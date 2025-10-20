"use client";
import acmeLogo from "@/assets/logo-acme.png";
import apexLogo from "@/assets/logo-apex.png";
import celestialLogo from "@/assets/logo-celestial.png";
import echoLogo from "@/assets/logo-echo.png";
import pulseLogo from "@/assets/logo-pulse.png";
import quantumLogo from "@/assets/logo-quantum.png";
import Image from "next/image";
import { motion } from "framer-motion";

export const LogoTicker = () => {
  const logos = [
    { src: acmeLogo, alt: "Acme" },
    { src: quantumLogo, alt: "Quantum" },
    { src: echoLogo, alt: "Echo" },
    { src: celestialLogo, alt: "Celestial" },
    { src: pulseLogo, alt: "Pulse" },
    { src: apexLogo, alt: "Apex" },
  ];
  return (
    <div className="py-8 md:py-12 bg-white">
      <div className="container">
        <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
          <motion.div
            className="flex gap-14 flex-none pr-14"
            animate={{
              translateX: "-50%",
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear",
              repeatType: "loop",
            }}
          >
            {[...logos, ...logos].map((logo, idx) => (
              <Image
                className="logo-ticker-image"
                key={`${logo.alt}-${idx}`}
                src={logo.src}
                alt={logo.alt}
                sizes="(max-width: 1200px) 64px, 96px"
                loading="lazy"
              />
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};
