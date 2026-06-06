import React from 'react';
import { Link } from 'react-router-dom';
import { AlertCircle, ArrowLeft, Home } from 'lucide-react';
import SEO from '../components/SEO';

export const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 pt-32 pb-20 px-8 flex flex-col items-center justify-center text-center">
      <SEO 
        title="Page Not Found | SmileCare Dental"
        description="We couldn't find the page you are looking for. Please search our dental clinic directory or return home."
      />

      <div className="max-w-md w-full bg-white dark:bg-slate-800 border border-slate-200/50 dark:border-slate-800 rounded-3xl shadow-xl p-8 md:p-12 space-y-6">
        <div className="w-16 h-16 bg-red-50 dark:bg-red-950/20 text-red-500 rounded-full flex items-center justify-center mx-auto">
          <AlertCircle className="w-10 h-10" />
        </div>

        <div className="space-y-2">
          <h1 className="text-4xl font-extrabold text-slate-800 dark:text-white tracking-tight">404 Error</h1>
          <h2 className="text-xl font-bold text-slate-600 dark:text-slate-300">Page Not Found</h2>
          <p className="text-slate-400 dark:text-slate-500 text-sm leading-relaxed">
            The page you are looking for doesn't exist or has been relocated to another address.
          </p>
        </div>

        <div className="flex flex-col gap-3 pt-4">
          <Link
            to="/"
            className="py-3 px-6 rounded-full bg-[#0F4C81] text-white font-bold hover:bg-[#0B3A63] transition-all flex items-center justify-center gap-2 shadow-md shadow-[#0F4C81]/25"
          >
            <Home className="w-4 h-4" /> Go to Homepage
          </Link>
          <button
            onClick={() => window.history.back()}
            className="py-3 px-6 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 font-bold transition-all flex items-center justify-center gap-2 border border-slate-200/50 dark:border-slate-700"
          >
            <ArrowLeft className="w-4 h-4" /> Go Back
          </button>
        </div>
      </div>
    </div>
  );
};
export default NotFound;
