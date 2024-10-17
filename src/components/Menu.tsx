// components/Menu.tsx
import Link from 'next/link';
import headerData from '../data/headerData.json';

interface MenuProps {
  isMobile: boolean;  // Defina o tipo da prop isMobile como boolean
  closeMenu: () => void; // Defina o tipo da prop closeMenu como uma função sem parâmetros
}

const Menu: React.FC<MenuProps> = ({ isMobile, closeMenu }) => {
  return (
    <div
      className={`absolute inset-0 flex items-center justify-center ${isMobile ? 'block' : 'hidden'} md:hidden`}
      onClick={closeMenu}
    >
      <nav className="bg-background/95 backdrop-blur-sm rounded-lg p-4">
        <ul className="flex flex-col space-y-4">
          {headerData.links.map((item) => (
            <li key={item.url}>
              <Link
                href={item.url}
                className="text-secondary-foreground hover:text-primary transition-colors"
                onClick={closeMenu} // Fecha o menu ao clicar em um link
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Menu;
