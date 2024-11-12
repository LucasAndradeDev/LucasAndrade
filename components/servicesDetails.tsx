import React, { useEffect, useState, useRef } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion';

const servicesList = [
  {
    id: 1,
    title: 'Irresistible Landing Pages',
    description: "If you're looking to turn visitors into customers, I'm here to help! I create highly engaging, optimized landing pages to ensure the best conversions."
  },
  {
    id: 2,
    title: 'Impressive Company Websites',
    description: "Let your brand shine! I develop company websites that showcase everything about your business, values, and services in a captivating and professional way."
  },
  {
    id: 3,
    title: 'Your Successful E-commerce',
    description: "Ready to sell online? I can set up a customized e-commerce site with everything you need: payment integration and product management to boost your sales!"
  },
  {
    id: 4,
    title: 'Software and Website Maintenance',
    description: "Don’t let your system become outdated! I offer ongoing support and updates to ensure your software and website always run securely and efficiently."
  },
  {
    id: 5,
    title: 'Custom Software Development',
    description: "Have an idea in mind? I'm here to bring your vision to life! I develop custom systems tailored to your needs, ensuring innovation and efficiency."
  },
  {
    id: 6,
    title: 'Personalized Solutions for You',
    description: "I know each company is unique. That’s why I create custom software solutions that perfectly fit your specific needs, elevating your operations to a new level."
  },
  {
    id: 7,
    title: 'Specialized Technical Consulting',
    description: "Let’s make technology work for you! My technical consulting provides valuable insights to optimize your processes and keep you one step ahead of the competition."
  },
  {
    id: 8,
    title: 'Intelligent Chatbots That Make a Difference',
    description: "Looking to enhance customer service? I develop smart chatbots that automate interactions and provide quick responses, 24/7!"
  }
];

const ServicesDetails = () => {
  const [isVisible, setIsVisible] = useState(false);
  const servicesDetailsRef = useRef<HTMLDivElement>(null); // Alterado para HTMLDivElement

  const handleScroll = () => {
    if (servicesDetailsRef.current) {
      const rect = servicesDetailsRef.current.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight && rect.bottom > 0; // Condição para verificar visibilidade
      setIsVisible(isVisible);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      ref={servicesDetailsRef}
      className={`py-12 px-6 bg-secondary ${isVisible ? 'animate__animated animate__zoomIn' : ''}`}
    >
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">My Services</h2>
        <div className="flex flex-col space-y-6">
          {servicesList.map(service => (
            <Accordion key={service.id} type='single' collapsible className='w-full'>
              <AccordionItem value={`item-${service.id}`}>
                <AccordionTrigger className='mx-2 text-xl font-medium text-zinc-200 transition-colors duration-200 rounded p-4 text-left shadow-md hover:no-underline hover:text-white'>
                  <p className='w-full text-center'>{service.title}</p>
                </AccordionTrigger>
                <AccordionContent className='px-4 py-2 text-base leading-6 text-zinc-300'>
                  {service.description}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          ))}
        </div>
      </div>
    </section>
  );
  
};

export default ServicesDetails;
