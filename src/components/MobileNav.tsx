export default function MobileNav() {
  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm px-4 py-2 flex justify-between items-center shadow-[0_-2px_10px_rgba(0,0,0,0.05)] border-t border-outline-variant/20">
      <a className="mobile-nav-link flex flex-col items-center text-primary" href="#inicio">
        <span className="material-symbols-outlined text-[22px]" style={{ fontVariationSettings: "'FILL' 1" }}>account_balance</span>
        <span className="text-[10px] font-medium mt-0.5">Inicio</span>
      </a>
      <a className="mobile-nav-link flex flex-col items-center text-secondary" href="#areas">
        <span className="material-symbols-outlined text-[22px]">gavel</span>
        <span className="text-[10px] font-medium mt-0.5">Áreas</span>
      </a>
      <a className="mobile-nav-link flex flex-col items-center text-secondary" href="#consulta">
        <span className="material-symbols-outlined text-[22px]">chat</span>
        <span className="text-[10px] font-medium mt-0.5">Consulta</span>
      </a>
      <a className="mobile-nav-link flex flex-col items-center text-secondary" href="#perfil">
        <span className="material-symbols-outlined text-[22px]">person</span>
        <span className="text-[10px] font-medium mt-0.5">Perfil</span>
      </a>
      <a className="mobile-nav-link flex flex-col items-center text-secondary" href="#contacto">
        <span className="material-symbols-outlined text-[22px]">mail</span>
        <span className="text-[10px] font-medium mt-0.5">Contacto</span>
      </a>
    </nav>
  );
}
