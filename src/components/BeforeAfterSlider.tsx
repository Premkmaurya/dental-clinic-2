import React, { useState, useRef, useEffect } from 'react';

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
}

export const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({
  beforeImage,
  afterImage,
  beforeLabel = 'Before',
  afterLabel = 'After',
}) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (!isDragging) return;
    if (e.touches.length > 0) {
      handleMove(e.touches[0].clientX);
    }
  };

  useEffect(() => {
    const handleMouseUp = () => setIsDragging(false);
    
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
      window.addEventListener('touchmove', handleTouchMove);
      window.addEventListener('touchend', handleMouseUp);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, [isDragging]);

  return (
    <div 
      ref={containerRef} 
      className="relative w-full h-[350px] md:h-[450px] rounded-3xl overflow-hidden shadow-2xl select-none cursor-ew-resize border border-white/40"
      onMouseDown={() => setIsDragging(true)}
      onTouchStart={() => setIsDragging(true)}
    >
      {/* After Image (Full background) */}
      <img 
        src={afterImage} 
        alt="After treatment" 
        className="absolute inset-0 w-full h-full object-cover"
        draggable={false}
      />
      <span className="absolute bottom-6 right-6 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-slate-800 bg-white/80 rounded-full backdrop-blur-md shadow-md">
        {afterLabel}
      </span>

      {/* Before Image (Clipping mask) */}
      <div 
        className="absolute inset-0 w-full h-full overflow-hidden"
        style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
      >
        <img 
          src={beforeImage} 
          alt="Before treatment" 
          className="absolute inset-0 w-full h-full object-cover"
          draggable={false}
        />
        <span className="absolute bottom-6 left-6 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-slate-800 bg-white/80 rounded-full backdrop-blur-md shadow-md">
          {beforeLabel}
        </span>
      </div>

      {/* Split Line Indicator */}
      <div 
        className="absolute top-0 bottom-0 w-0.5 bg-white cursor-ew-resize shadow-lg"
        style={{ left: `${sliderPosition}%` }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white text-[#0F4C81] flex items-center justify-center shadow-xl border-2 border-[#4FB3BF] hover:scale-110 transition-transform">
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l-4 4 4 4m8 0l4-4-4-4" />
          </svg>
        </div>
      </div>
    </div>
  );
};
export default BeforeAfterSlider;
