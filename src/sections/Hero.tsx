'use client';
import ArrowIcon from '@/assets/arrow-right.svg';
import cogImage from '@/assets/cog.png';
import cylinderImage from '@/assets/cylinder.png';
import noodleImage from '@/assets/noodle.png';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Button } from '@/components/ui/Button';

export const Hero = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start end', 'end start'],
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return (
    <section
      id="about"
      ref={heroRef}
      className="pt-8 pb-20 md:pt-5 md:pb-10 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_100%)] overflow-x-clip"
    >
      <div className="container">
        <div className="md:flex items-center">
          <div className="md:w-[478px]">
            <div className="tag">2.0 versiyasi taqdim etildi</div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mt-6">
              Samaradorlik sari yo‘l
            </h1>
            <p className="text-xl text-[#010D3E] tracking-tight mt-6">
              O‘z muvaffaqiyatingizni kuzatish, harakatlaringizni
              rag‘batlantirish va yutuqlaringizni nishonlash uchun yaratilgan
              ilova bilan bajarilgan ishlaringizdan zavq oling.
            </p>
            <div className="mt-[30px] flex gap-1 items-center">
              <Button onClick={() => (window.location.hash = '#pricing')}>
                Bepul foydalanish
              </Button>
              <Button
                variant="text"
                className="flex items-center gap-1"
                onClick={() => (window.location.hash = '#features')}
                rightIcon={<ArrowIcon className="w-5 h-5" />}
              >
                Batafsil ma’lumot
              </Button>
            </div>
          </div>
          <div className="mt-20 md:mt-0 md:h-[648px] md:flex-1 relative">
            <motion.img
              src={cogImage.src}
              alt="tishli mexanizm rasmi"
              className="md:absolute md:h-full md:w-auto md:max-w-none md:left-6 lg:left-0 "
              animate={{
                translateY: [-30, 30],
              }}
              transition={{
                repeat: Infinity,
                repeatType: 'mirror',
                duration: 3,
                ease: 'easeInOut',
              }}
            />
            <motion.img
              src={cylinderImage.src}
              alt="silindr rasmi"
              width={200}
              height={200}
              className="md:block hidden -top-8 -left-28 md:absolute"
              style={{
                translateY: translateY,
              }}
            />
            <motion.img
              src={noodleImage.src}
              alt="to‘lqin shaklli bezak rasmi"
              width={220}
              className="hidden lg:block absolute top-[524px] left-[448px] rotate-[30deg]"
              style={{
                rotate: 30,
                translateY: translateY,
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
