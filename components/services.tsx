'use client';
import AnimatedCounter from '../lib/animatedCounter';
import ServicesDetails from './servicesDetails';
import { useEffect, useState, useRef } from 'react';

const Services = () => {
  const [isVisibleLeft, setIsVisibleLeft] = useState(false);
  const [isVisibleRight, setIsVisibleRight] = useState(false);
  const servicesRefLeft = useRef<HTMLDivElement | null>(null);
  const servicesRefRight = useRef<HTMLDivElement | null>(null);

  const handleScroll = () => {
    if (servicesRefLeft.current) {
      const rectLeft = servicesRefLeft.current.getBoundingClientRect();
      setIsVisibleLeft(rectLeft.top < window.innerHeight && rectLeft.bottom > 0);
    }
    if (servicesRefRight.current) {
      const rectRight = servicesRefRight.current.getBoundingClientRect();
      setIsVisibleRight(rectRight.top < window.innerHeight && rectRight.bottom > 0);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section id="services" className="z-30 -translate-y-1 bg-secondary">
      <div className="container w-full py-[15px] lg:py-[30px]">
        <div className="flex flex-col justify-between gap-12 px-2 lg:flex-row lg:px-0">
          <div
            ref={servicesRefLeft}
            className={`w-full pt-14 ${isVisibleLeft ? 'animate__animated animate__fadeInLeft' : ''}`}
          >
            <h1 className="pb-4 text-[40px] font-bold leading-[3rem]">
              Solutions that Boost your Business!
            </h1>
            <p>
              Tired of missing out on opportunities due to a lack of impactful digital presence?
              I transform your needs into real solutions that are completely tailored to your business.
              From robust platforms to simple applications, I have the tools to solve your problem.
            </p>
            <div className="flex justify-between space-x-4 py-8">
              <div className="flex flex-col items-center justify-center">
                <p className="text-lg font-semibold uppercase">Projetos Desenvolvidos</p>
                <p className="text-[36px] font-bold text-blue">
                  +<AnimatedCounter from={0} to={15} />
                </p>
              </div>
            </div>
          </div>

          <div
            ref={servicesRefRight}
            className={`w-full lg:pt-14 md:pt-14 sm:pt-8 gap-8 flex flex-col ${isVisibleRight ? 'animate__animated animate__fadeInDown' : ''}`}
          >
            <div className="flex items-center space-x-6 bg-primary p-4 rounded-md shadow-lg">
              <p className="text-6xl font-bold text-blue">01</p>
              <div>
                <h2 className="mb-2 text-2xl font-bold">Front-end Development</h2>
                <p>
                I transform your Figma/XD design into a fully responsive and modern web application, using the best technologies: React, Next.js and Tailwind CSS.
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-6 bg-primary p-4 rounded-md shadow-lg">
              <p className="text-6xl font-bold text-blue">02</p>
              <div>
                <h2 className="mb-2 text-2xl font-bold">Back-end Development</h2>
                <p>
                Build a scalable and secure backend with cutting-edge technologies to
                ensure high performance and stability for your business.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ServicesDetails />
    </section>
  );
};

export default Services;
