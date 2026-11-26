import Icon from "@/components/Icon";

export default function MobileNav() {
  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm px-4 py-2 flex justify-between items-center shadow-[0_-2px_10px_rgba(0,0,0,0.05)] border-t border-outline-variant/20">
      <a className="mobile-nav-link flex flex-col items-center text-primary" href="#inicio">
        <Icon name="account_balance_fill" className="text-[22px]" />
        <span className="text-[10px] font-medium mt-0.5">Inicio</span>
      </a>
      <a className="mobile-nav-link flex flex-col items-center text-secondary" href="#areas">
        <Icon name="gavel" className="text-[22px]" />
        <span className="text-[10px] font-medium mt-0.5">Áreas</span>
      </a>
      <a className="mobile-nav-link flex flex-col items-center text-secondary" href="#consulta">
        <Icon name="chat" className="text-[22px]" />
        <span className="text-[10px] font-medium mt-0.5">Consulta</span>
      </a>
      <a className="mobile-nav-link flex flex-col items-center text-secondary" href="#perfil">
        <Icon name="person" className="text-[22px]" />
        <span className="text-[10px] font-medium mt-0.5">Perfil</span>
      </a>
      <a className="mobile-nav-link flex flex-col items-center text-secondary" href="#contacto">
        <Icon name="mail" className="text-[22px]" />
        <span className="text-[10px] font-medium mt-0.5">Contacto</span>
      </a>
    </nav>
  );
}
