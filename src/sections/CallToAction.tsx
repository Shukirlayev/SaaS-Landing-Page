"use client";
import ArrowRight from "@/assets/arrow-right.svg";
import starImage from "@/assets/star.png";
import springImage from "@/assets/spring.png";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/Button";

export const CallToAction = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [100, -150]);
  return (
    <section
      id="help"
      ref={sectionRef}
      className="bg-gradient-to-b from-white to-[#D2DCFF] py-24 overflow-x-clip"
    >
      <div className="container">
        <div className="section-heading relative">
          <h2 className="section-title">Bugunoq bepul ro‘yxatdan o‘ting</h2>
          <p className="section-description mt-5">
            Taraqqiyotingizni kuzatish va harakatlaringizni rag‘batlantirish
            uchun yaratilgan ilova bilan yutuqlaringizni nishonlang.
          </p>
          <motion.img
            src={starImage.src}
            alt="Star"
            width={360}
            style={{ translateY }}
            className="absolute -left-[350px] -top-[137px]"
          />
          <motion.img
            src={springImage.src}
            alt="Spring"
            width={360}
            style={{ translateY }}
            className="absolute -right-[331px] -top-[19px]"
          />
        </div>
        <div className="flex gap-2 mt-10 justify-center">
          <Button onClick={() => (window.location.hash = "#pricing")}>Bepul foydalanish</Button>
          <Button
            variant="text"
            className="gap-1"
            onClick={() => (window.location.hash = "#features")}
            rightIcon={<ArrowRight className="w-5 h-5" />}
          >
            Batafsil ma’lumot
          </Button>
        </div>
      </div>
    </section>
  );
};
