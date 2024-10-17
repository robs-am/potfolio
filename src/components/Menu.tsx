// components/Menu.tsx
import Link from 'next/link';
import headerData from '../data/headerData.json';

interface MenuProps {
  isMobile: boolean;  // Defina o tipo da prop isMobile como boolean
  closeMenu: () => void; // Defina o tipo da prop closeMenu como uma função sem parâmetros
}

const Menu: React.FC<MenuProps> = ({ isMobile, closeMenu }) => {
  return (
    <nav className={isMobile ? 'md:hidden bg-background/95 backdrop-blur-sm' : 'hidden md:flex md:w-full'}>
      <ul className={`flex ${isMobile ? 'flex-col space-y-4' : 'space-x-4'}`}>
        {headerData.links.map((item) => (
          <li key={item.url}>
            <Link
              href={item.url}
              className={`text-secondary-foreground hover:text-primary transition-colors ${
                isMobile ? 'underline-hover-effect' : ''
              }`}
              onClick={isMobile ? closeMenu : undefined}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Menu;
