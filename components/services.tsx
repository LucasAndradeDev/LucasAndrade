'use client';
import { motion } from 'framer-motion';
import FadeIn from '../lib/variants';
import AnimatedCounter from '../lib/animatedCounter';
import ServicesDetails from './servicesDetails';

const Services = () => {
  return (
    <section id="services" className="z-30 -translate-y-1 bg-secondary">
      <div className="container w-full py-[100px] lg:py-[200px]">
        <div className="flex flex-col justify-between gap-12 px-2 lg:flex-row lg:px-0">
          <motion.div
            variants={FadeIn('right', 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.8 }}
            className="justify-between lg:mr-8 flex w-full flex-col lg:w-1/2"
          >
            <h1 className="pb-4 text-[40px] font-bold leading-[3rem]">
              Soluções que Alavancam seu Negócio!
            </h1>
            <p>
              Cansado de perder oportunidades por falta de uma presença digital impactante? 
              Transformo suas necessidades em soluções reais e totalmente sob medida para o seu negócio. 
              Desde plataformas robustas até aplicativos simples, tenho as ferramentas para resolver seu problema.
            </p>
            <div className="flex justify-between space-x-4 py-8">
              <div className="flex flex-col items-center justify-center">
                <p className="text-lg font-semibold uppercase">Projetos Desenvolvidos</p>
                <p className="text-[36px] font-bold text-blue">
                  +<AnimatedCounter from={0} to={15} />
                </p>
              </div>
             
            </div>
          </motion.div>
          <motion.div
            variants={FadeIn('left', 0.4)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.8 }}
            className="flex h-full flex-col gap-8"
          >
            <div className="flex items-center space-x-6 bg-primary p-4 rounded-md shadow-lg">
              <p className="text-6xl font-bold text-blue">01</p>
              <div>
                <h2 className="mb-2 text-2xl font-bold">Desenvolvimento Front-end</h2>
                <p>
                  Transformo seu design Figma/XD em uma aplicação web totalmente responsiva 
                  e moderna, usando as melhores tecnologias: React, Next.js e Tailwind CSS.
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-6 bg-primary p-4 rounded-md shadow-lg">
              <p className="text-6xl font-bold text-blue">02</p>
              <div>
                <h2 className="mb-2 text-2xl font-bold">Desenvolvimento Back-end</h2>
                <p>
                  Construa um backend escalável e seguro com as tecnologias de ponta para 
                  garantir alta performance e estabilidade ao seu negócio.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <ServicesDetails />
    </section>
  );
};

export default Services;
