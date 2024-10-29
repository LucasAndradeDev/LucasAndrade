'use client';

import { FaReact, FaNodeJs, FaJs, FaFigma, FaCss3, FaDocker } from 'react-icons/fa';
import { SiTypescript } from 'react-icons/si'; // Importação corrigida
import { BiLogoPostgresql } from 'react-icons/bi';
import { RiTailwindCssFill } from 'react-icons/ri';
import { GrMysql } from "react-icons/gr";
import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { projectsData } from '@/lib/data';
import { useScroll, useTransform, motion } from 'framer-motion';

type ProjectProps = (typeof projectsData)[number];

export const Project = ({
  title,
  image,
  category,
  description,
  technologies
}: ProjectProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['0 1', '1.33 1']
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  // Mapeamento dos ícones
  const iconMap = {
    react: FaReact,
    node: FaNodeJs,
    js: FaJs,
    figma: FaFigma,
    css: FaCss3,
    docker: FaDocker,
    typescript: SiTypescript,
    postgresql: BiLogoPostgresql,
    tailwind: RiTailwindCssFill,
    mysql: GrMysql
  };

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress
      }}
      className="flex flex-col items-center rounded-3xl bg-blue/10 p-8 shadow-md transition-all xl:flex-row xl:justify-between xl:space-x-10"
    >
      <div className="pb-[60px] xl:order-2">
        <h5 className="text-sm font-medium capitalize text-gray-100">{category}</h5>
        <h3 className="mt-4 text-[40px] font-semibold text-white">{title}</h3>
        <p className="mb-4 mt-4 max-w-xl text-gray-100 leading-relaxed">{description}</p>

        {/* Tecnologias utilizadas */}
        <div className="mt-4 flex gap-4 flex-wrap">
          {technologies.map((tech) => {
            const IconComponent = iconMap[tech.icon.toLowerCase()]; 

            return (
              <div key={tech.id} className="flex items-center gap-2">
                {/* Renderiza o ícone */}
                {IconComponent && <IconComponent className="text-gray-200" size={20} />}
                <span className="text-sm text-gray-100">{tech.name}</span>
              </div>
            );
          })}
        </div>
      </div>

      <div className="flex items-center justify-center transition-all xl:order-1">
        <Link href="/">
          <motion.div
            whileHover={{ scale: 1.11, rotate: -1 }}
            className="relative overflow-hidden rounded-[20px] border border-[#2A0E61] shadow-lg hover:shadow-2xl"
          >
            <Image
              src={image}
              width={420}
              height={420}
              alt="project image"
              className="object-cover rounded-[20px]"
            />
          </motion.div>
        </Link>
      </div>
    </motion.div>
  );
};
