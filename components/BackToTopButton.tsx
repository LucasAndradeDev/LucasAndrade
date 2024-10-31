'use client'

import React, { useEffect, useState } from 'react'
import { ArrowUp } from 'lucide-react'
import { motion } from 'framer-motion'

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false)

  // Mostrar o botão ao atingir 300px de rolagem
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Função para rolar ao topo da página
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <>
      {isVisible && (
        <motion.button
          onClick={scrollToTop}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed bottom-6 right-32 z-40 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-indigo-500 text-white shadow-lg shadow-indigo-700/50 transition-transform duration-300 hover:scale-110 active:scale-100 hover:shadow-xl"
        >
          <ArrowUp className="h-6 w-6 transition-transform duration-200 group-hover:-translate-y-1 group-hover:scale-110" />
        </motion.button>
      )}
    </>
  )
  
}

export default BackToTopButton
