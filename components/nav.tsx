import React, { useState } from 'react';
import { Link } from 'react-scroll';

const menu = [
  {
    name: 'Serviços',
    href: 'services'
  },
  {
    name: 'Trabalhos',
    href: 'work'
  },
  {
    name: 'Dúvidas',
    href: 'FAQ'
  },
  {
    name: 'Contato',
    href: 'Contact'
  }
];

const Nav = () => {
  const [activeItem, setActiveItem] = useState('');

  return (
    <nav className="z-50 flex gap-4">
      {menu.map((item, index) => (
        <Link
          key={index}
          to={item.href}
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          onSetActive={() => setActiveItem(item.href)}
          className={`
            relative px-4 py-2 rounded-lg transition-all duration-300 ease-in-out
            cursor-pointer group
            ${activeItem === item.href ? 'text-blue-500' : 'text-white'}
          `}
        >
          <span className="text-lg font-medium capitalize">
            {item.name}
          </span>
          
          {/* Animated underline */}
          <div className={`
            absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5
            bg-blue-600 rounded-full transition-all duration-300 ease-out
            group-hover:w-full
            ${activeItem === item.href ? 'w-full' : ''}
          `} />
        </Link>
      ))}
    </nav>
  );
};

export default Nav;