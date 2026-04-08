interface LogoProps {
  className?: string;
  isScrolled?: boolean;
}

export default function Logo({ className = '', isScrolled = false }: LogoProps) {
  if (isScrolled) {
    // Scrolled: seal + MIU badge
    return (
      <div className={`flex items-center gap-3 transition-all duration-300 ${className}`}>
        <img src="/miu-seal.png" alt="MIU Seal" className="h-16 md:h-20 w-auto object-contain flex-shrink-0" style={{ mixBlendMode: 'multiply' }} />
        <div className="bg-miu-navy rounded px-4 py-2 flex items-center justify-center">
          <span className="font-heading font-black text-3xl md:text-4xl text-miu-gold tracking-widest leading-none">MIU</span>
        </div>
      </div>
    );
  }

  // Static: just the seal, white bg removed via mix-blend-mode
  return (
    <div className={`flex items-center transition-all duration-300 hover:opacity-100 ${className}`}>
      <img
        src="/miu-seal.png"
        alt="Manipur International University"
        className="h-16 md:h-20 w-auto object-contain"
        style={{ mixBlendMode: 'multiply' }}
      />
    </div>
  );
}
