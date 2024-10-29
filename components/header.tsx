'use client';

import { Link } from 'react-scroll';
import Image from 'next/image';
import Nav from '@/components/nav';
import MobileNav from '@/components/mobileNav';
import { FaWhatsapp } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="fixed z-50 w-full bg-primary/95 py-5 shadow-lg backdrop-blur-lg xl:py-7 transition-all duration-300">
      <div className="container mx-auto flex items-center justify-between px-4">
        {/* Logo */}
        <Link
          to="/"
          spy={true}
          smooth={true}
          className="cursor-pointer flex items-center gap-2"
          aria-label="Ir para a página inicial"
        >
          <Image
            src="/logo-LA.png"
            height={54}
            width={44}
            alt="Logo da empresa"
            className="hover:scale-105 transition-transform duration-300"
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-x-8 xl:flex">
          <Nav />
          <a
            href="https://wa.me/5585996331923"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-md rounded-full bg-gradient-to-r from-green-500 to-green-600 px-6 py-3 font-medium text-white shadow-md hover:scale-105 transition-transform duration-300"
            aria-label="Fale no WhatsApp"
          >
            <FaWhatsapp size={30} className="mr-2" />
            Fale no WhatsApp
          </a>
        </div>

        {/* Mobile Nav */}
        <div className="z-50 xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
