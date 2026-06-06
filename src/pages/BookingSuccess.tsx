import React, { useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { CheckCircle2, Calendar, Clock, ArrowRight, Printer, AlertTriangle } from 'lucide-react';
import SEO from '../components/SEO';

export const BookingSuccess: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const booking = location.state?.booking;

  useEffect(() => {
    // If no booking data is present, redirect to appointment page
    if (!booking) {
      navigate('/book-appointment');
    }
  }, [booking, navigate]);

  if (!booking) return null;

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 pt-32 pb-20 px-8 flex flex-col items-center">
      <SEO 
        title="Appointment Confirmed | SmileCare Premium Practice"
        description="Your SmileCare dental appointment has been successfully scheduled. Review your consultation slot here."
      />

      <div className="max-w-2xl w-full bg-white dark:bg-slate-800 border border-slate-200/60 dark:border-slate-800 rounded-3xl shadow-2xl overflow-hidden p-8 md:p-12 text-center">
        
        {/* Animated Check Circle */}
        <div className="w-20 h-20 bg-[#E8F4FF] dark:bg-[#0F4C81]/30 rounded-full flex items-center justify-center mx-auto mb-6 text-[#0F4C81] dark:text-[#4FB3BF]">
          <CheckCircle2 className="w-12 h-12" />
        </div>

        <h1 className="text-3xl font-extrabold text-slate-800 dark:text-white tracking-tight mb-2">
          Your Visit is Scheduled!
        </h1>
        <p className="text-slate-500 dark:text-slate-400 text-sm max-w-md mx-auto mb-8">
          Thank you, <span className="font-bold text-slate-700 dark:text-slate-200">{booking.name}</span>. We have locked in your consult slot and sent confirmation details to <span className="font-semibold text-[#0F4C81] dark:text-[#4FB3BF]">{booking.email}</span>.
        </p>

        {/* Confirmation Details Card */}
        <div className="bg-slate-50 dark:bg-slate-900/50 rounded-3xl p-6 border border-slate-200/50 dark:border-slate-800 text-left space-y-4 mb-8">
          <div className="flex items-center justify-between border-b border-slate-200/50 dark:border-slate-800 pb-3">
            <span className="text-slate-500 text-xs font-bold uppercase tracking-wider">Scheduled Treatment</span>
            <span className="font-bold text-slate-800 dark:text-white text-sm">{booking.service}</span>
          </div>
          <div className="flex items-center justify-between border-b border-slate-200/50 dark:border-slate-800 pb-3">
            <span className="text-slate-500 text-xs font-bold uppercase tracking-wider">Specialist Dentist</span>
            <span className="font-bold text-slate-800 dark:text-white text-sm">{booking.doctor}</span>
          </div>
          <div className="flex items-center justify-between border-b border-slate-200/50 dark:border-slate-800 pb-3">
            <span className="text-slate-500 text-xs font-bold uppercase tracking-wider">Appointment Date</span>
            <span className="font-bold text-[#0F4C81] dark:text-[#4FB3BF] text-sm flex items-center gap-1.5">
              <Calendar className="w-4 h-4" /> {booking.date}
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-slate-500 text-xs font-bold uppercase tracking-wider">Arrival Time Slot</span>
            <span className="font-bold text-slate-800 dark:text-white text-sm flex items-center gap-1.5">
              <Clock className="w-4 h-4" /> {booking.time}
            </span>
          </div>
        </div>

        {/* Guidelines Warning */}
        <div className="flex gap-3 text-left bg-amber-50 dark:bg-amber-950/20 border border-amber-200/40 dark:border-amber-900/20 p-5 rounded-2xl mb-8">
          <AlertTriangle className="w-6 h-6 text-amber-500 flex-shrink-0" />
          <div>
            <h4 className="text-sm font-bold text-amber-800 dark:text-amber-300">Appointment Guidelines</h4>
            <p className="text-xs text-amber-600 dark:text-amber-400/80 mt-1 leading-relaxed">
              Please arrive 10-15 minutes early to finalize dental history records. Bring your insurance PPO card if applicable. Cancellations require 24 hours notice.
            </p>
          </div>
        </div>

        {/* Print / Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <button
            onClick={() => window.print()}
            className="flex-1 py-3.5 px-6 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 font-bold transition-all flex items-center justify-center gap-2 border border-slate-200 dark:border-slate-700"
          >
            <Printer className="w-4 h-4" /> Print Receipt
          </button>
          
          <Link
            to="/"
            className="flex-1 py-3.5 px-6 rounded-full bg-[#0F4C81] text-white font-bold hover:bg-[#0B3A63] transition-all flex items-center justify-center gap-1.5 shadow-lg shadow-[#0F4C81]/25 hover:shadow-xl"
          >
            Return to Homepage <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </div>
  );
};
export default BookingSuccess;
