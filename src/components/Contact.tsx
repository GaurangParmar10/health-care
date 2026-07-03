'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Clock, MapPin, Mail, Phone, CalendarCheck2, ArrowRight } from 'lucide-react';

const appointmentSchema = z.object({
  fullName: z.string().min(2, 'Full name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  department: z.string().min(1, 'Please select a clinical department'),
  date: z.string().min(1, 'Please select a preferred date'),
  notes: z.string().optional(),
});

type AppointmentForm = z.infer<typeof appointmentSchema>;

export default function Contact() {
  const [isSuccess, setIsSuccess] = useState(false);
  const [formErrors, setFormErrors] = useState<Partial<Record<keyof AppointmentForm, string>>>({});
  
  const { register, handleSubmit, reset } = useForm<AppointmentForm>();

  const onSubmit = (data: AppointmentForm) => {
    // Validate form using Zod
    const validationResult = appointmentSchema.safeParse(data);
    
    if (!validationResult.success) {
      const errors: Partial<Record<keyof AppointmentForm, string>> = {};
      validationResult.error.issues.forEach((err) => {
        if (err.path[0]) {
          errors[err.path[0] as keyof AppointmentForm] = err.message;
        }
      });
      setFormErrors(errors);
      return;
    }

    // Success state
    setFormErrors({});
    setIsSuccess(true);
    reset();

    // Revert success screen after 5 seconds
    setTimeout(() => {
      setIsSuccess(false);
    }, 5000);
  };

  return (
    <section className="py-24 bg-brand-gray text-brand-navy relative overflow-hidden" id="contact">
      {/* Background Dots */}
      <div className="absolute inset-0 dots-grid opacity-[0.03] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Side: Booking Form */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="paper-card p-8 md:p-10 rounded-[32px] bg-brand-white">
              
              <div className="mb-8">
                <span className="sticker bg-brand-yellow text-brand-navy">Consultation Portal</span>
                <h3 className="font-editorial text-3xl md:text-4xl font-black uppercase tracking-tight text-brand-navy mt-4">
                  Schedule <span className="text-brand-blue">Clinical Triage</span>
                </h3>
              </div>

              {isSuccess ? (
                /* Success Screen */
                <div className="py-12 flex flex-col items-center justify-center text-center">
                  <div className="w-16 h-16 rounded-2xl bg-brand-yellow border-2 border-brand-navy flex items-center justify-center mb-6 shadow-[3px_3px_0px_#081E58] animate-bounce">
                    <CalendarCheck2 className="w-8 h-8 text-brand-navy" />
                  </div>
                  <h4 className="font-editorial text-2xl font-black uppercase tracking-tight text-brand-navy mb-3">
                    Appointment Scheduled!
                  </h4>
                  <p className="text-sm text-brand-navy/70 max-w-sm leading-relaxed mb-6">
                    Your pre-triage assessment has been sent to our diagnostics lab. A triage coordinator will email your consultation details within 2 hours.
                  </p>
                  <div className="text-xs uppercase font-editorial tracking-widest font-black text-brand-blue">
                    Verification Code: NX-{Math.floor(100000 + Math.random() * 900000)}
                  </div>
                </div>
              ) : (
                /* Form layout */
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  {/* Name field */}
                  <div className="flex flex-col text-left">
                    <label className="text-xs uppercase font-editorial tracking-widest font-black text-brand-navy mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      {...register('fullName')}
                      placeholder="e.g. Sarah Jenkins"
                      className="w-full px-4 py-3 border border-brand-navy rounded-xl focus:border-brand-blue focus:ring-1 focus:ring-brand-blue outline-none text-sm bg-brand-gray/30 text-brand-navy cursor-none placeholder-brand-navy/30 font-medium"
                    />
                    {formErrors.fullName && (
                      <span className="text-xs text-red-600 font-semibold mt-1">● {formErrors.fullName}</span>
                    )}
                  </div>

                  {/* Email field */}
                  <div className="flex flex-col text-left">
                    <label className="text-xs uppercase font-editorial tracking-widest font-black text-brand-navy mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      {...register('email')}
                      placeholder="e.g. sarah@example.com"
                      className="w-full px-4 py-3 border border-brand-navy rounded-xl focus:border-brand-blue focus:ring-1 focus:ring-brand-blue outline-none text-sm bg-brand-gray/30 text-brand-navy cursor-none placeholder-brand-navy/30 font-medium"
                    />
                    {formErrors.email && (
                      <span className="text-xs text-red-600 font-semibold mt-1">● {formErrors.email}</span>
                    )}
                  </div>

                  {/* Department and Date Row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Department Select */}
                    <div className="flex flex-col text-left">
                      <label className="text-xs uppercase font-editorial tracking-widest font-black text-brand-navy mb-2">
                        Clinical Department *
                      </label>
                      <select
                        {...register('department')}
                        className="w-full px-4 py-3 border border-brand-navy rounded-xl focus:border-brand-blue outline-none text-sm bg-brand-white text-brand-navy cursor-none font-medium appearance-none"
                        style={{
                          backgroundImage: `url("data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23081E58' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`,
                          backgroundRepeat: 'no-repeat',
                          backgroundPosition: 'right 16px center',
                          backgroundSize: '16px',
                        }}
                      >
                        <option value="">Select Specialty</option>
                        <option value="cardiology">Cardiology</option>
                        <option value="neurology">Neurology</option>
                        <option value="orthopedics">Orthopedics</option>
                        <option value="pediatrics">Pediatrics</option>
                        <option value="radiology">Radiology</option>
                        <option value="dentistry">Dentistry</option>
                        <option value="emergency">Emergency Care</option>
                      </select>
                      {formErrors.department && (
                        <span className="text-xs text-red-600 font-semibold mt-1">● {formErrors.department}</span>
                      )}
                    </div>

                    {/* Date field */}
                    <div className="flex flex-col text-left">
                      <label className="text-xs uppercase font-editorial tracking-widest font-black text-brand-navy mb-2">
                        Preferred Date *
                      </label>
                      <input
                        type="date"
                        {...register('date')}
                        className="w-full px-4 py-3 border border-brand-navy rounded-xl focus:border-brand-blue outline-none text-sm bg-brand-gray/30 text-brand-navy cursor-none font-medium"
                      />
                      {formErrors.date && (
                        <span className="text-xs text-red-600 font-semibold mt-1">● {formErrors.date}</span>
                      )}
                    </div>
                  </div>

                  {/* Notes field */}
                  <div className="flex flex-col text-left">
                    <label className="text-xs uppercase font-editorial tracking-widest font-black text-brand-navy mb-2">
                      Clinical Notes (Optional)
                    </label>
                    <textarea
                      rows={3}
                      {...register('notes')}
                      placeholder="Brief details about your symptoms or scheduling requirements..."
                      className="w-full px-4 py-3 border border-brand-navy rounded-xl focus:border-brand-blue outline-none text-sm bg-brand-gray/30 text-brand-navy cursor-none placeholder-brand-navy/30 font-medium resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-4 bg-brand-blue text-brand-white font-editorial font-bold text-sm tracking-widest uppercase border-2 border-brand-navy rounded-xl shadow-[4px_4px_0px_#081E58] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_#081E58] transition-all flex items-center justify-center gap-2 cursor-none"
                  >
                    Submit Appointment Request <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Right Side: Working Info */}
          <div className="lg:col-span-5 flex flex-col">
            {/* Clinical stats card */}
            <div className="p-8 rounded-[32px] bg-brand-navy text-brand-white border-2 border-brand-navy shadow-[4px_4px_0px_#0A3EBE] h-full flex flex-col justify-between relative overflow-hidden">
              {/* Telemetry background dots inside card */}
              <div className="absolute inset-0 dots-grid-white opacity-[0.03] pointer-events-none" />
              
              <div className="relative z-10">
                <h4 className="font-editorial text-2xl font-black uppercase tracking-tight text-brand-white mb-6">
                  Nexus Diagnostics <br />
                  <span className="text-brand-yellow">Headquarters</span>
                </h4>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <MapPin className="w-5 h-5 text-brand-yellow shrink-0 mt-0.5" />
                    <p className="text-sm font-medium text-brand-gray/90 leading-relaxed">
                      700 Innovation Blvd, Research Tower C,<br />
                      Andheri west 
                    </p>
                  </div>
                  <div className="flex items-start gap-4">
                    <Clock className="w-5 h-5 text-brand-yellow shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-bold text-brand-white">Clinical Hours</p>
                      <p className="text-xs text-brand-gray/70 mt-1">Mon - Fri: 7:00 AM - 9:00 PM</p>
                      <p className="text-xs text-brand-gray/70">Sat - Sun: 8:00 AM - 5:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Direct Emergency Contact details */}
              <div className="border-t border-brand-white/10 pt-6 mt-8 space-y-3 relative z-10">
                <a href="tel:+18005559999" className="flex items-center gap-2 text-brand-yellow text-sm font-bold cursor-none">
                  <Phone className="w-4 h-4" /> +1 (800) 555-9999 (24/7 Hot)
                </a>
                <a href="mailto:triage@nexuslabs.net" className="flex items-center gap-2 text-brand-white text-sm font-medium hover:text-brand-yellow transition-colors cursor-none">
                  <Mail className="w-4 h-4" /> triage@nexuslabs.net
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
