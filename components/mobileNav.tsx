'use client';
import { Menu } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

export const menu = [
  {
    name: 'Serviços',
    href: '#services'
  },
  {
    name: 'Trabalhos',
    href: '/#works'
  },
  {
    name: 'Dúvidas',
    href: '/#FAQ'
  },
  {
    name: 'Contato',
    href: '/#Contact'
  }
];

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger className="flex items-center">
        <Menu className="w-8 h-8 text-blue" />
      </SheetTrigger>
      <SheetContent>
        <div className="mb-40 mt-32 flex items-center justify-center">
          <Link href="/">
            <Image src="/logo-LA.png" height={80} width={60} alt="Logo" />
    
          </Link>
        </div>
        <nav className="mt-8 flex flex-col items-center justify-center gap-8">
          {menu.map((item, index) => (
            <Link
              href={item.href}
              key={index}
              className="text-lg font-medium capitalize"
            >
              <span className="pb-2 transition-all hover:border-b-2 hover:border-blue hover:text-blue">
                {item.name}
              </span>
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
