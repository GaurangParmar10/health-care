'use client';

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function DnaHelixCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    // Dimensions
    let width = container.clientWidth || window.innerWidth;
    let height = container.clientHeight || 600;

    // Scene
    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 250;

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // DNA Helix Construction
    const numPoints = 80;
    const radius = 24;
    const heightSpan = 160;

    // Geometry containers
    const strand1Geometry = new THREE.BufferGeometry();
    const strand2Geometry = new THREE.BufferGeometry();
    const connectionsGeometry = new THREE.BufferGeometry();

    const positions1 = new Float32Array(numPoints * 3);
    const positions2 = new Float32Array(numPoints * 3);
    const connectionPositions = new Float32Array(numPoints * 6); // 2 vertices per connection line

    // Create points
    for (let i = 0; i < numPoints; i++) {
      const t = (i / numPoints) * Math.PI * 8; // 4 full rotations
      const y = (i / numPoints) * heightSpan - heightSpan / 2;

      // Strand 1
      const x1 = radius * Math.cos(t);
      const z1 = radius * Math.sin(t);
      positions1[i * 3] = x1;
      positions1[i * 3 + 1] = y;
      positions1[i * 3 + 2] = z1;

      // Strand 2 (180 deg out of phase)
      const x2 = radius * Math.cos(t + Math.PI);
      const z2 = radius * Math.sin(t + Math.PI);
      positions2[i * 3] = x2;
      positions2[i * 3 + 1] = y;
      positions2[i * 3 + 2] = z2;

      // Base pairs lines (connection points)
      connectionPositions[i * 6] = x1;
      connectionPositions[i * 6 + 1] = y;
      connectionPositions[i * 6 + 2] = z1;
      connectionPositions[i * 6 + 3] = x2;
      connectionPositions[i * 6 + 4] = y;
      connectionPositions[i * 6 + 5] = z2;
    }

    strand1Geometry.setAttribute('position', new THREE.BufferAttribute(positions1, 3));
    strand2Geometry.setAttribute('position', new THREE.BufferAttribute(positions2, 3));
    connectionsGeometry.setAttribute('position', new THREE.BufferAttribute(connectionPositions, 3));

    // Materials
    // Use texture canvas for nice circular particles
    const createCircleTexture = (colorStr: string) => {
      const c = document.createElement('canvas');
      c.width = 16;
      c.height = 16;
      const ctx = c.getContext('2d');
      if (ctx) {
        ctx.beginPath();
        ctx.arc(8, 8, 7, 0, Math.PI * 2);
        ctx.fillStyle = colorStr;
        ctx.fill();
      }
      return new THREE.CanvasTexture(c);
    };

    const textureBlue = createCircleTexture('#0A3EBE');
    const textureYellow = createCircleTexture('#FFD400');

    // Double Helix Points
    const pointsMaterial1 = new THREE.PointsMaterial({
      size: 4.5,
      map: textureBlue,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });

    const pointsMaterial2 = new THREE.PointsMaterial({
      size: 4.5,
      map: textureYellow,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });

    const strand1 = new THREE.Points(strand1Geometry, pointsMaterial1);
    const strand2 = new THREE.Points(strand2Geometry, pointsMaterial2);

    // Connection lines material
    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0xE9EDF7,
      transparent: true,
      opacity: 0.15,
      blending: THREE.AdditiveBlending,
    });
    const connections = new THREE.LineSegments(connectionsGeometry, lineMaterial);

    // Group to hold everything and rotate
    const dnaGroup = new THREE.Group();
    dnaGroup.add(strand1);
    dnaGroup.add(strand2);
    dnaGroup.add(connections);
    scene.add(dnaGroup);

    // Subtle floating dust/particles
    const particleCount = 120;
    const dustGeometry = new THREE.BufferGeometry();
    const dustPositions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      dustPositions[i * 3] = (Math.random() - 0.5) * 300;
      dustPositions[i * 3 + 1] = (Math.random() - 0.5) * 300;
      dustPositions[i * 3 + 2] = (Math.random() - 0.5) * 300;
    }
    dustGeometry.setAttribute('position', new THREE.BufferAttribute(dustPositions, 3));
    const dustMaterial = new THREE.PointsMaterial({
      size: 1.5,
      color: 0xE9EDF7,
      transparent: true,
      opacity: 0.3,
    });
    const dustParticles = new THREE.Points(dustGeometry, dustMaterial);
    scene.add(dustParticles);

    // Mouse interactive values
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      // Normalize values between -1 and 1
      targetX = (event.clientX / window.innerWidth) * 2 - 1;
      targetY = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    // Scroll interactive values
    let scrollY = 0;
    const handleScroll = () => {
      scrollY = window.scrollY;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);

    // Animation Loop
    const clock = new THREE.Clock();

    const animate = () => {
      const elapsedTime = clock.getElapsedTime();

      // Continuous rotation
      dnaGroup.rotation.y = elapsedTime * 0.25 + scrollY * 0.0015;
      dnaGroup.rotation.x = elapsedTime * 0.05;

      // Mouse Parallax interpolation
      currentX += (targetX - currentX) * 0.05;
      currentY += (targetY - currentY) * 0.05;

      dnaGroup.rotation.y += currentX * 0.3;
      dnaGroup.rotation.x += -currentY * 0.2;

      // Animate dust particles slightly
      dustParticles.rotation.y = elapsedTime * 0.02;
      dustParticles.rotation.x = elapsedTime * 0.01;

      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };

    animate();

    // Resize Handler
    const handleResize = () => {
      if (!container || !canvas) return;
      width = container.clientWidth || window.innerWidth;
      height = container.clientHeight || 600;

      camera.aspect = width / height;
      camera.updateProjectionMatrix();

      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
    };
  }, []);

  return (
    <div ref={containerRef} className="w-full h-full min-h-[400px] flex items-center justify-center">
      <canvas ref={canvasRef} className="w-full h-full max-w-full block" />
    </div>
  );
}
