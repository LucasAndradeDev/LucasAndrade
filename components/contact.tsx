'use client'

import { Send } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import ButtonWpp from './button.wpp'
import BackToTopButton from './BackToTopButton'
import FadeIn from '@/lib/variants'

const Contact = () => {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  

  return (
    <section
      id="Contact"
      className="relative bg-[url(https://github.com/oguzbits/icon-parallax-background/raw/master/gif/Icon-Parallax.gif)] bg-cover bg-center bg-no-repeat py-28"
    >
      {/* Overlay to reduce opacity */}
      <div className="absolute inset-0 bg-black opacity-50" /> {/* Ajuste a opacidade conforme necessário */}

      <div className="container mx-auto flex flex-col items-center gap-y-10 py-12 px-6 text-lg md:flex-row md:justify-between">
        
        <motion.div
          variants={FadeIn('right', 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.8 }}
          className="text-center md:text-left relative z-10" // Adicione z-10 para garantir que este conteúdo fique acima da sobreposição
        >
          <h1 className="text-4xl font-extrabold uppercase leading-snug tracking-wide text-white md:text-5xl lg:text-6xl">
            Vamos trabalhar <br />
            <span className="under-line">juntos!</span>
          </h1>
          <p className="mt-4 text-gray-200 text-base md:text-lg lg:text-xl">
            Estou disponível para discutir suas ideias e transformar seu projeto em realidade. Envie uma mensagem e vamos começar!
          </p>
        </motion.div>
        
        <motion.form
          variants={FadeIn('left', 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.8 }}
          className="w-full max-w-3xl flex flex-col gap-y-6 rounded-lg bg-secondary/80 p-8 shadow-lg relative z-10" // Adicione z-10 aqui também
        >
          <input
            type="text"
            placeholder="Seu nome"
            required
            className="w-full border-b border-white/25 bg-transparent py-3 text-white placeholder:text-white/50 outline-none transition-all duration-200 focus:border-blue focus:border-opacity-75"
          />
          <input
            type="text"
            placeholder="Assunto"
            required
            className="w-full border-b border-white/25 bg-transparent py-3 text-white placeholder:text-white/50 outline-none transition-all duration-200 focus:border-blue focus:border-opacity-75"
          />
          <textarea
            name="message"
            placeholder="Escreva sua mensagem ..."
            id="message"
            className="w-full h-32 resize-none border-b border-white/25 bg-transparent py-3 text-white placeholder:text-white/50 outline-none transition-all duration-200 focus:border-blue focus:border-opacity-75"
          ></textarea>
          <button
            className="mt-6 flex w-full items-center justify-center gap-x-3 rounded-full bg-blue px-5 py-3 text-md font-semibold text-secondary transition-all duration-300 hover:bg-lighted hover:scale-105 active:scale-100"
          >
            <p>Envie sua mensagem</p>
            <Send className="h-5 w-5" />
          </button>
        </motion.form>
      </div>

      {/* Renderiza o ButtonWpp somente no cliente */}
      {isClient && <ButtonWpp />}
      {/* Renderiza o BackToTopButton somente no cliente */}
      {isClient && <BackToTopButton />}
    </section>
  )
}

export default Contact
