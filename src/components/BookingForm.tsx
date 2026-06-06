import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { Calendar, User, Mail, Phone, FileText, Clock, HeartHandshake } from 'lucide-react';
import { useBooking } from '../context/BookingContext';

interface FormInput {
  name: string;
  email: string;
  phone: string;
  service: string;
  doctor: string;
  date: string;
  time: string;
  notes?: string;
}

const servicesList = [
  "Teeth Cleaning",
  "Teeth Whitening",
  "Dental Implants",
  "Root Canal Treatment",
  "Orthodontics",
  "Invisalign",
  "Cosmetic Dentistry",
  "Pediatric Dentistry"
];

const doctorsList = [
  "Dr. Alexander Adams (Implants & Surgery)",
  "Dr. Sarah Chen (Orthodontics & Invisalign)",
  "Dr. Marcus Miller (Cosmetic & General)"
];

const timeSlots = [
  "09:00 AM", "10:00 AM", "11:00 AM", "01:00 PM", "02:00 PM", "03:00 PM", "04:00 PM"
];

export const BookingForm: React.FC = () => {
  const { 
    selectedService, 
    setSelectedService, 
    selectedDoctor, 
    setSelectedDoctor,
    submitBooking,
    closeBooking 
  } = useBooking();
  
  const navigate = useNavigate();
  const [isPending, setIsPending] = useState(false);

  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormInput>({
    defaultValues: {
      service: selectedService,
      doctor: selectedDoctor,
      date: '',
      time: '',
      name: '',
      email: '',
      phone: '',
      notes: ''
    }
  });

  const onSubmit = async (data: FormInput) => {
    setIsPending(true);
    const finalData = {
      ...data,
      service: data.service || selectedService,
      doctor: data.doctor || selectedDoctor
    };
    const success = await submitBooking(finalData);
    setIsPending(false);
    if (success) {
      reset();
      closeBooking();
      navigate('/booking-success', { state: { booking: finalData } });
    }
  };

  return (
    <form 
      onSubmit={handleSubmit(onSubmit)} 
      className="bg-white dark:bg-slate-900 p-8 md:p-10 rounded-[32px] border border-slate-200/50 dark:border-slate-800 shadow-2xl space-y-6 max-w-2xl mx-auto"
    >
      <div className="text-center md:text-left mb-6">
        <h3 className="text-2xl font-bold text-slate-800 dark:text-white flex items-center justify-center md:justify-start gap-2">
          <HeartHandshake className="text-[#4FB3BF] w-6 h-6" /> Book a Consultation
        </h3>
        <p className="text-slate-600 dark:text-slate-400 text-sm mt-1">Fill out the form below to secure your premium dental visit.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Name */}
        <div>
          <label className="block text-slate-700 dark:text-slate-300 text-sm font-semibold mb-2 flex items-center gap-1.5">
            <User className="w-4 h-4 text-[#0F4C81] dark:text-[#4FB3BF]" /> Full Name
          </label>
          <input
            type="text"
            placeholder="John Doe"
            {...register("name", { required: "Name is required" })}
            className={`w-full px-4 py-3 rounded-xl border bg-white dark:bg-slate-800 text-slate-800 dark:text-white border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-[#0F4C81] dark:focus:ring-[#4FB3BF] transition-all text-sm ${
              errors.name ? 'border-red-400' : 'border-slate-200 dark:border-slate-700'
            }`}
          />
          {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
        </div>

        {/* Email */}
        <div>
          <label className="block text-slate-700 dark:text-slate-300 text-sm font-semibold mb-2 flex items-center gap-1.5">
            <Mail className="w-4 h-4 text-[#0F4C81] dark:text-[#4FB3BF]" /> Email Address
          </label>
          <input
            type="email"
            placeholder="john@example.com"
            {...register("email", { 
              required: "Email is required", 
              pattern: { value: /^\S+@\S+$/i, message: "Invalid email address" } 
            })}
            className={`w-full px-4 py-3 rounded-xl border bg-white dark:bg-slate-800 text-slate-800 dark:text-white border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-[#0F4C81] dark:focus:ring-[#4FB3BF] transition-all text-sm ${
              errors.email ? 'border-red-400' : 'border-slate-200 dark:border-slate-700'
            }`}
          />
          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
        </div>

        {/* Phone */}
        <div>
          <label className="block text-slate-700 dark:text-slate-300 text-sm font-semibold mb-2 flex items-center gap-1.5">
            <Phone className="w-4 h-4 text-[#0F4C81] dark:text-[#4FB3BF]" /> Phone Number
          </label>
          <input
            type="tel"
            placeholder="(123) 456-7890"
            {...register("phone", { required: "Phone number is required" })}
            className={`w-full px-4 py-3 rounded-xl border bg-white dark:bg-slate-800 text-slate-800 dark:text-white border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-[#0F4C81] dark:focus:ring-[#4FB3BF] transition-all text-sm ${
              errors.phone ? 'border-red-400' : 'border-slate-200 dark:border-slate-700'
            }`}
          />
          {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
        </div>

        {/* Service */}
        <div>
          <label className="block text-slate-700 dark:text-slate-3-00 dark:text-slate-300 text-sm font-semibold mb-2 flex items-center gap-1.5">
            <FileText className="w-4 h-4 text-[#0F4C81] dark:text-[#4FB3BF]" /> Dental Service
          </label>
          <select
            value={selectedService}
            {...register("service", { onChange: (e) => setSelectedService(e.target.value) })}
            className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#0F4C81] dark:focus:ring-[#4FB3BF] transition-all text-sm"
          >
            <option value="">Select a service...</option>
            {servicesList.map((service, index) => (
              <option key={index} value={service}>{service}</option>
            ))}
          </select>
        </div>

        {/* Doctor */}
        <div>
          <label className="block text-slate-700 dark:text-slate-300 text-sm font-semibold mb-2 flex items-center gap-1.5">
            <User className="w-4 h-4 text-[#0F4C81] dark:text-[#4FB3BF]" /> Specialist Dentist
          </label>
          <select
            value={selectedDoctor}
            {...register("doctor", { onChange: (e) => setSelectedDoctor(e.target.value) })}
            className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#0F4C81] dark:focus:ring-[#4FB3BF] transition-all text-sm"
          >
            <option value="">Select a doctor...</option>
            {doctorsList.map((doc, index) => (
              <option key={index} value={doc}>{doc}</option>
            ))}
          </select>
        </div>

        {/* Date */}
        <div>
          <label className="block text-slate-700 dark:text-slate-300 text-sm font-semibold mb-2 flex items-center gap-1.5">
            <Calendar className="w-4 h-4 text-[#0F4C81] dark:text-[#4FB3BF]" /> Appointment Date
          </label>
          <input
            type="date"
            min={new Date().toISOString().split('T')[0]}
            {...register("date", { required: "Date is required" })}
            className={`w-full px-4 py-3 rounded-xl border bg-white dark:bg-slate-800 text-slate-800 dark:text-white border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-[#0F4C81] dark:focus:ring-[#4FB3BF] transition-all text-sm ${
              errors.date ? 'border-red-400' : 'border-slate-200 dark:border-slate-700'
            }`}
          />
          {errors.date && <p className="text-red-500 text-xs mt-1">{errors.date.message}</p>}
        </div>

        {/* Time */}
        <div className="md:col-span-2">
          <label className="block text-slate-700 dark:text-slate-300 text-sm font-semibold mb-2 flex items-center gap-1.5">
            <Clock className="w-4 h-4 text-[#0F4C81] dark:text-[#4FB3BF]" /> Preferred Time Slot
          </label>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-7 gap-2">
            {timeSlots.map((time, idx) => (
              <label 
                key={idx} 
                className="cursor-pointer text-center"
              >
                <input
                  type="radio"
                  value={time}
                  {...register("time", { required: "Time slot is required" })}
                  className="peer sr-only"
                />
                <div className="px-2 py-2.5 text-xs font-semibold rounded-xl border border-slate-200 dark:border-slate-700 bg-white/40 dark:bg-slate-800/40 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 peer-checked:bg-[#0F4C81] dark:peer-checked:bg-[#4FB3BF] peer-checked:text-white dark:peer-checked:text-slate-900 peer-checked:border-[#0F4C81] dark:peer-checked:border-[#4FB3BF] transition-all">
                  {time}
                </div>
              </label>
            ))}
          </div>
          {errors.time && <p className="text-red-500 text-xs mt-2">{errors.time.message}</p>}
        </div>

        {/* Notes */}
        <div className="md:col-span-2">
          <label className="block text-slate-700 dark:text-slate-300 text-sm font-semibold mb-2 flex items-center gap-1.5">
            <FileText className="w-4 h-4 text-[#0F4C81] dark:text-[#4FB3BF]" /> Special Notes or Symptoms
          </label>
          <textarea
            rows={3}
            placeholder="Tell us about any specific concerns..."
            {...register("notes")}
            className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#0F4C81] dark:focus:ring-[#4FB3BF] transition-all resize-none text-sm"
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={isPending}
        className="w-full py-4 rounded-full bg-[#0F4C81] dark:bg-[#4FB3BF] hover:bg-[#0B3A63] dark:hover:bg-[#3ea2ae] text-white dark:text-slate-900 font-semibold shadow-lg shadow-[#0F4C81]/20 dark:shadow-[#4FB3BF]/10 transition-all duration-300 transform active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 text-xs uppercase tracking-wider"
      >
        {isPending ? (
          <>
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white dark:text-slate-900" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
            </svg>
            Processing Booking...
          </>
        ) : (
          "Book Appointment Now"
        )}
      </button>
    </form>
  );
};
export default BookingForm;
