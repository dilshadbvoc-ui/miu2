

interface LogoProps {
  className?: string;
  theme?: 'light' | 'dark';
  isScrolled?: boolean;
}

export default function Logo({ className = "", theme = 'light', isScrolled = false }: LogoProps) {
  const isDark = theme === 'dark';
  
  if (isScrolled) {
    return (
      <div className={`flex items-center gap-2 transition-all duration-300 ${className}`}>
        <img 
          src="/miu-logo-scroll.png" 
          alt="MIU" 
          className="h-10 md:h-12 w-auto object-contain drop-shadow-sm" 
        />
      </div>
    );
  }

  return (
    <div className={`flex items-center gap-2 md:gap-3 transition-all duration-300 hover:opacity-90 ${className}`}>
      {/* Emblem Container */}
      <div className="relative w-10 h-10 md:w-12 md:h-12 flex-shrink-0">
        <img 
          src="/miu-seal.png" 
          alt="MIU Seal" 
          className="h-full w-full object-contain drop-shadow-[0_2px_4px_rgba(0,0,0,0.1)]"
        />
      </div>

      {/* Stacked MIU Text Layout */}
      <div className={`flex flex-col gap-0 leading-none ${isDark ? 'text-white' : 'text-[#3D2B1F]'}`}>
        <div className="flex items-baseline gap-1">
          <span className={`font-heading font-black text-lg md:text-xl ${isDark ? 'text-miu-gold' : 'text-inherit'}`}>M</span>
          <span className={`font-heading font-bold text-[10px] md:text-xs tracking-widest ${isDark ? 'text-white/90' : 'text-inherit opacity-90'}`}>ANIPUR</span>
        </div>
        <div className="flex items-baseline gap-1">
          <span className={`font-heading font-black text-lg md:text-xl ${isDark ? 'text-miu-gold' : 'text-inherit'}`}>I</span>
          <span className={`font-heading font-bold text-[10px] md:text-xs tracking-widest ${isDark ? 'text-white/90' : 'text-inherit opacity-90'}`}>NTERNATIONAL</span>
        </div>
        <div className="flex items-baseline gap-1">
          <span className={`font-heading font-black text-lg md:text-xl ${isDark ? 'text-miu-gold' : 'text-inherit'}`}>U</span>
          <span className={`font-heading font-bold text-[10px] md:text-xs tracking-widest ${isDark ? 'text-white/90' : 'text-inherit opacity-90'}`}>NIVERSITY</span>
        </div>
      </div>
    </div>
  );
}
