import React from 'react';
import headerData from '../data/headerData.json';


export const Header: React.FC = () => {
  return (
    <header>
      <nav>
        <ul>
          {headerData.links.map((link, index) =>(
            <li key={index}>
              <a href={link.url}>{link.label}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

