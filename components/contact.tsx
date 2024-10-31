'use client'

// Importação das bibliotecas
import { useForm } from 'react-hook-form' // Biblioteca para lidar com formulários
import { Send } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import ButtonWpp from './button.wpp'
import BackToTopButton from './BackToTopButton'
import FadeIn from '@/lib/variants'

// Importação da rota para envio do email
import { sendMessageRoute } from '@/http/sendMessage.route'

// Definição da interface para os dados do formulário
interface MensagemFormData {
  name: string
  email?: string // Opcional
  phone: string
  message: string
}

const Contact = () => {
  const [isClient, setIsClient] = useState(false)
  const [successMessage, setSuccessMessage] = useState('')
  const [showMessage, setShowMessage] = useState(false)
  const [messageSubmit, setMessageSubmit] = useState<boolean | null>(null)

  useEffect(() => {
    setIsClient(true)
  }, [])

  // Criar uma instância para o useForm
  const { register, handleSubmit, reset } = useForm<MensagemFormData>()

  // Função para lidar com o envio do formulário
  async function sendMessage(data: MensagemFormData) {
    try {
      console.log('Dados recebidos pelo formulário:', data)
      const response = await sendMessageRoute(data)
      console.log('Resposta do envio:', response)

      setMessageSubmit(true)
      setSuccessMessage('Mensagem enviada com sucesso!')
      setShowMessage(true)
      reset()

      // Oculta a mensagem após 3 segundos
      setTimeout(() => setShowMessage(false), 3000)
    } catch (error) {
      console.error('Erro ao enviar a mensagem:', error)
      setMessageSubmit(false)
      setSuccessMessage('Erro ao enviar a mensagem. Tente novamente.')
      setShowMessage(true)

      // Oculta a mensagem após 3 segundos
      setTimeout(() => setShowMessage(false), 3000)
    }
  }

  return (
    <section
      id="Contact"
      className="relative bg-[url(https://github.com/oguzbits/icon-parallax-background/raw/master/gif/Icon-Parallax.gif)] bg-cover bg-center bg-no-repeat py-28"
    >
      {/* Exibindo a mensagem de sucesso */}
      {showMessage && (
        <div
          className={`fixed bottom-10 sm:bottom-4 left-1/2 transform -translate-x-1/2 py-2 px-4 rounded-md shadow-lg transition-opacity duration-300 z-50 w-5/6 md:w-1/2 lg:w-1/3 h-auto text-center align-middle ${messageSubmit ? 'bg-green-500' : 'bg-red-500'
            } text-white`}
        >
          {successMessage}
        </div>
      )}


      {/* Overlay para reduzir a opacidade */}
      <div className="absolute inset-0 bg-black opacity-60" />

      <div className="container mx-auto flex flex-col items-center gap-y-10 py-12 px-6 text-lg md:flex-row md:justify-between">
        <motion.div
          variants={FadeIn('right', 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.8 }}
          className="text-center md:text-left relative z-10"
        >
          <h1 className="text-4xl font-extrabold uppercase leading-snug tracking-wide text-white md:text-5xl lg:text-6xl">
            Vamos trabalhar <br />
            <span className="under-line">juntos!</span>
          </h1>
          <p className="mt-4 text-gray-200 text-base md:text-lg lg:text-xl">
            Estou disponível para discutir suas ideias e transformar seu projeto em realidade. Envie uma mensagem e vamos começar!
          </p>
        </motion.div>

        <form
          className="relative z-10 w-full max-w-3xl rounded-lg bg-secondary/80 p-8 shadow-lg space-y-6"
          onSubmit={handleSubmit(sendMessage)}
        >
          <motion.div
            variants={FadeIn('left', 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.8 }}
            className="flex flex-col gap-y-6"
          >
            <input
              {...register('name')}
              type="text"
              placeholder="Seu nome"
              required
              className="w-full rounded-md border border-white/25 bg-transparent py-3 px-4 text-white placeholder:text-white/50 outline-none transition-all duration-200 focus:border-blue focus:border-opacity-75"
            />
            <input
              {...register('email')}
              type="email"
              placeholder="Seu email (opcional)"
              className="w-full rounded-md border border-white/25 bg-transparent py-3 px-4 text-white placeholder:text-white/50 outline-none transition-all duration-200 focus:border-blue focus:border-opacity-75"
            />
            <input
              {...register('phone')}
              type="text"
              required
              placeholder="Número para contato"
              className="w-full rounded-md border border-white/25 bg-transparent py-3 px-4 text-white placeholder:text-white/50 outline-none transition-all duration-200 focus:border-blue focus:border-opacity-75"
            />

            <textarea
              {...register('message')}
              placeholder="Escreva sua mensagem ..."
              id="message"
              className="w-full h-32 resize-none rounded-md border border-white/25 bg-transparent py-3 px-4 text-white placeholder:text-white/50 outline-none transition-all duration-200 focus:border-blue focus:border-opacity-75"
            ></textarea>
            <button
              className="mt-6 flex w-full items-center justify-center gap-x-3 rounded-full bg-blue px-5 py-3 text-md font-semibold text-secondary transition-all duration-300 hover:bg-lighted hover:scale-105 active:scale-100 shadow-lg"
              type="submit"
            >
              <p>Envie sua mensagem</p>
              <Send className="h-5 w-5" />
            </button>
          </motion.div>
        </form>
      </div>

      {/* Renderiza os botões apenas no cliente */}
      {isClient && <ButtonWpp />}
      {isClient && <BackToTopButton />}
    </section>
  )
}

export default Contact
