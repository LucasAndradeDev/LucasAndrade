'use client'

import Image from 'next/image'
import { Link, animateScroll as scroll } from 'react-scroll'
import React from 'react'
import Social from '@/components/social'

const Footer = () => {
  return (
    <footer className='bg-secondary py-10'>
      <div className='container mx-auto flex flex-col items-center justify-between gap-8 text-gray-100 md:flex-row'>
        
        {/* Copyright */}
        <p className='text-lg font-semibold tracking-wide text-center md:text-left'>
          <span className='text-xl font-bold'>© 2024</span> Lucas Andrade
        </p>

        {/* Logo com animação hover */}
        <Link to='/' spy={true} smooth={true} className='cursor-pointer'>
          <Image
            src='/logo-LA.png'
            width={54.08}
            height={54.08}
            alt='logo'
            className='transition-transform duration-200 hover:scale-110'
          />
        </Link>

        {/* Ícones sociais */}
        <Social/>
      </div>

      {/* Linha divisória sutil e Link para o topo */}
      <div className='mt-6 border-t border-gray-700 pt-4 pt-10'>
        <div className='flex justify-center space-x-6'>
         
        </div>
      </div>
    </footer>
  )
}

export default Footer
