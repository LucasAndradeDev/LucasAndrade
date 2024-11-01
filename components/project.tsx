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
import { IconType } from 'react-icons';

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
  enum TechIcons {
    React = 'react',
    Node = 'node',
    Js = 'js',
    Figma = 'figma',
    Css = 'css',
    Docker = 'docker',
    Typescript = 'typescript',
    Postgresql = 'postgresql',
    Tailwind = 'tailwind',
    Mysql = 'mysql',
  }

  const iconMap: Record<TechIcons, IconType> = {
    [TechIcons.React]: FaReact,
    [TechIcons.Node]: FaNodeJs,
    [TechIcons.Js]: FaJs,
    [TechIcons.Figma]: FaFigma,
    [TechIcons.Css]: FaCss3,
    [TechIcons.Docker]: FaDocker,
    [TechIcons.Typescript]: SiTypescript,
    [TechIcons.Postgresql]: BiLogoPostgresql,
    [TechIcons.Tailwind]: RiTailwindCssFill,
    [TechIcons.Mysql]: GrMysql,
  };

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress
      }}
      className="flex flex-col items-center rounded-3xl bg-gradient-to-tr from-[#192953] to-[#0f172a] p-8 shadow-lg transition-all duration-300 xl:flex-row xl:justify-between xl:space-x-10"
    >
      <div className="pb-[60px] xl:order-2 xl:w-1/2">
        <h5 className="text-sm font-medium capitalize text-gray-200">{category}</h5>
        <h3 className="mt-2 text-3xl font-bold text-white">{title}</h3>
        <p className="mb-4 mt-2 max-w-xl text-gray-300 leading-relaxed">{description}</p>
  
        {/* Tecnologias utilizadas */}
        <div className="mt-4 flex gap-4 flex-wrap">
          {technologies.map((tech) => {
            const iconKey = tech.icon.toLowerCase() as TechIcons; // forçando o tipo
            const IconComponent = iconMap[iconKey];
  
            return (
              <div key={tech.id} className="flex items-center gap-2">
                {IconComponent && <IconComponent className="text-gray-200" size={20} />}
                <span className="text-sm text-gray-300">{tech.name}</span>
              </div>
            );
          })}
        </div>
      </div>
  
      <div className="flex items-center justify-center transition-all xl:order-1 xl:w-1/2">
        <Link href="/">
          <motion.div
            whileHover={{ scale: 1.05, rotate: 2 }}
            className="relative overflow-hidden rounded-lg border border-blue-500 shadow-md hover:shadow-xl transition-shadow duration-300"
          >
            <Image
              src={image}
              width={420}
              height={420}
              alt="project image"
              className=" rounded-lg transition-transform duration-300"
            />
          </motion.div>
        </Link>
      </div>
    </motion.div>
  );
  
};
