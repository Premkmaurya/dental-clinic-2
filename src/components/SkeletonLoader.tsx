import React from 'react';

interface SkeletonProps {
  type?: 'card' | 'text' | 'profile' | 'grid';
  count?: number;
}

export const SkeletonLoader: React.FC<SkeletonProps> = ({ type = 'card', count = 1 }) => {
  const renderItem = () => {
    switch (type) {
      case 'profile':
        return (
          <div className="animate-pulse bg-white dark:bg-slate-800 border border-slate-200/50 dark:border-slate-800 rounded-3xl p-6 flex flex-col md:flex-row gap-6 w-full">
            <div className="w-24 h-24 md:w-32 md:h-32 bg-slate-200 dark:bg-slate-700 rounded-full flex-shrink-0" />
            <div className="flex-1 space-y-4 py-2">
              <div className="h-6 bg-slate-200 dark:bg-slate-700 rounded w-1/3" />
              <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded w-1/4" />
              <div className="space-y-2">
                <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded w-full" />
                <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded w-5/6" />
              </div>
            </div>
          </div>
        );
      case 'text':
        return (
          <div className="animate-pulse space-y-3 w-full">
            <div className="h-6 bg-slate-200 dark:bg-slate-700 rounded w-3/4" />
            <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded w-full" />
            <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded w-5/6" />
            <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded w-2/3" />
          </div>
        );
      case 'grid':
        return (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
            {[...Array(3)].map((_, i) => (
              <SkeletonLoader key={i} type="card" />
            ))}
          </div>
        );
      case 'card':
      default:
        return (
          <div className="animate-pulse bg-white dark:bg-slate-800 border border-slate-200/50 dark:border-slate-800 rounded-3xl p-6 h-72 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 bg-slate-200 dark:bg-slate-700 rounded-2xl" />
              <div className="h-6 bg-slate-200 dark:bg-slate-700 rounded w-3/4" />
              <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded w-full" />
              <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded w-5/6" />
            </div>
            <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded w-1/4" />
          </div>
        );
    }
  };

  return (
    <div className="space-y-6 w-full">
      {[...Array(count)].map((_, idx) => (
        <React.Fragment key={idx}>{renderItem()}</React.Fragment>
      ))}
    </div>
  );
};
export default SkeletonLoader;
