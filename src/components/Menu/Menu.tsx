import Link from 'next/link';
import headerData from '../../data/headerData.json';

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
      <div
        className={`fixed inset-0 bg-background/95 backdrop-blur-sm flex items-center z-40 justify-center transform transition-transform duration-500 ease-in-out ${
          isMobile ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
        } md:hidden`}
        onClick={closeMenu}
      >
        <nav className="rounded-lg  p-4 flex justify-center relative w-full">
          <ul className="flex flex-col items-center space-y-4 absolute mt-10">
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
    </>
  );
};

export default Menu;
