// components/Menu.tsx
import Link from 'next/link';
import headerData from '../data/headerData.json';

interface MenuProps {
  isMobile: boolean; 
  closeMenu: () => void; 
}

const Menu: React.FC<MenuProps> = ({ isMobile, closeMenu }) => {
  return (
    <>
      {/* Menu Desktop */}
      <nav className={`hidden md:flex md:w-full`}>
        <ul className="flex space-x-4">
          {headerData.links.map((item) => (
            <li key={item.url}>
              <Link
                href={item.url}
                className="text-secondary-foreground hover:text-primary transition-colors"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Menu Mobile */}
      {isMobile && (
        <div className="absolute inset-0 flex items-center justify-center md:hidden" onClick={closeMenu}>
          <nav className="flex justify-center w-full bg-background/95 backdrop-blur-sm rounded-lg p-4 pt-10">
            <ul className="flex flex-col items-center space-y-4 w-full absolute">
              {headerData.links.map((item) => (
                <li key={item.url}>
                  <Link
                    href={item.url}
                    className="text-secondary-foreground hover:text-primary transition-colors"
                    onClick={closeMenu} 
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </>
  );
};

export default Menu;
