

interface LogoProps {
  className?: string;
  theme?: 'light' | 'dark';
}

export default function Logo({ className = "", theme = 'light' }: LogoProps) {
  const isDark = theme === 'dark';
  
  return (
    <div className={`flex items-center gap-2 md:gap-3 transition-opacity hover:opacity-90 ${className}`}>
      {/* Emblem Container - Extracts only the circle portion from miu-logo.png */}
      <div className="relative w-10 h-10 md:w-12 md:h-12 flex-shrink-0 overflow-hidden rounded-full border border-miu-gold/20 shadow-sm">
        <img 
          src="/miu-logo.png" 
          alt="MIU Emblem" 
          className="absolute -left-[3px] top-0 h-full w-auto max-w-none scale-[1.3] origin-left"
          style={{ objectFit: 'cover' }}
        />
      </div>

      {/* Stacked MIU Text Layout */}
      <div className={`flex flex-col gap-0 leading-none ${isDark ? 'text-white' : 'text-miu-navy'}`}>
        <div className="flex items-baseline gap-1">
          <span className="font-heading font-black text-lg md:text-xl text-[#3D2B1F] dark:text-miu-gold">M</span>
          <span className="font-heading font-bold text-[10px] md:text-xs tracking-widest text-[#3D2B1F] dark:text-white/80">ANIPUR</span>
        </div>
        <div className="flex items-baseline gap-1">
          <span className="font-heading font-black text-lg md:text-xl text-[#3D2B1F] dark:text-miu-gold">I</span>
          <span className="font-heading font-bold text-[10px] md:text-xs tracking-widest text-[#3D2B1F] dark:text-white/80">NTERNATIONAL</span>
        </div>
        <div className="flex items-baseline gap-1">
          <span className="font-heading font-black text-lg md:text-xl text-[#3D2B1F] dark:text-miu-gold">U</span>
          <span className="font-heading font-bold text-[10px] md:text-xs tracking-widest text-[#3D2B1F] dark:text-white/80">NIVERSITY</span>
        </div>
      </div>
    </div>
  );
}
