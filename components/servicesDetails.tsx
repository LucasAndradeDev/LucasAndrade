import React from 'react';
import { motion } from 'framer-motion';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger
  } from '@/components/ui/accordion';
  import FadeIn from '@/lib/variants'

  const servicesList = [
    {
      id: 1,
      title: 'Landing Pages Irresistíveis',
      description: 'Se você deseja transformar visitantes em clientes, estou aqui para ajudar! Crio páginas de destino super atraentes e otimizadas para garantir as melhores conversões.'
    },
    {
      id: 2,
      title: 'Sites Institucionais que Impressionam',
      description: 'Deixe sua marca brilhar! Eu desenvolvo sites institucionais que mostram tudo sobre sua empresa, seus valores e seus serviços de forma cativante e profissional.'
    },
    {
      id: 3,
      title: 'Seu E-commerce de Sucesso',
      description: 'Está pronto para vender online? Posso montar um e-commerce personalizado com tudo que você precisa: integração de pagamentos e gerenciamento de produtos para impulsionar suas vendas!'
    },
    {
      id: 4,
      title: 'Manutenção de Software e Sites',
      description: 'Não deixe seu sistema ficar desatualizado! Ofereço suporte e atualizações contínuas para garantir que seu software e site funcionem sempre com segurança e eficiência.'
    },
    {
      id: 5,
      title: 'Desenvolvimento de Software Sob Medida',
      description: 'Tem uma ideia em mente? Estou aqui para transformar sua visão em realidade! Desenvolvo sistemas personalizados que atendem exatamente às suas necessidades, garantindo inovação e eficiência.'
    },
    {
      id: 6,
      title: 'Soluções Personalizadas para Você',
      description: 'Sei que cada empresa é única. Por isso, crio soluções de software sob medida que se encaixam perfeitamente nas suas necessidades específicas, elevando sua operação a um novo nível.'
    },
    {
      id: 7,
      title: 'Consultoria Técnica Especializada',
      description: 'Vamos aproveitar a tecnologia a seu favor! Minha consultoria técnica traz insights valiosos para otimizar seus processos e garantir que você esteja sempre um passo à frente da concorrência.'
    },
    {
      id: 8,
      title: 'Chatbots Inteligentes que Fazem a Diferença',
      description: 'Quer melhorar o atendimento ao cliente? Desenvolvo chatbots inteligentes que automatizam interações e respondem rapidamente, 24 horas por dia, 7 dias por semana!'
    }
  ];
  
  

const ServicesDetails = () => {
  return (
    <section className="py-12 px-6 bg-secondary">
      <div className="container mx-auto">
        <h2 className="text-[40px] font-bold text-center mb-8">Serviços Oferecidos</h2>
        <motion.div
          variants={FadeIn('up', 0.2)}
          initial='hidden'
          whileInView='show'
          viewport={{ once: true, amount: 0.8 }}
          className="mx-auto mt-12 flex max-w-3xl flex-col justify-center rounded-md bg-primary py-8 sm:px-2"
        >
          {servicesList.map(service => (
            <Accordion key={service.id} type='single' collapsible className='w-full text-left flex-col gap-10'>
              <AccordionItem value={`item-${service.id}`}>
                <AccordionTrigger className='mx-2 text-xl font-medium hover:no-underline'>
                  {service.title}
                </AccordionTrigger>
                <AccordionContent className='px-2 pt-4 text-[16px] leading-6'>
                  {service.description}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesDetails;
