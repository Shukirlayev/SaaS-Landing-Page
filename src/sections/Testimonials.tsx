"use client";
import avatar1 from "@/assets/avatar-1.png";
import avatar2 from "@/assets/avatar-2.png";
import avatar3 from "@/assets/avatar-3.png";
import avatar4 from "@/assets/avatar-4.png";
import avatar5 from "@/assets/avatar-5.png";
import avatar6 from "@/assets/avatar-6.png";
import avatar7 from "@/assets/avatar-7.png";
import avatar8 from "@/assets/avatar-8.png";
import avatar9 from "@/assets/avatar-9.png";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const testimonials = [
  {
    text: "Tajribali dizayner sifatida har doim innovatsion vositalarni izlayman — Framer.com darhol e’tiborimni tortdi.",
    imageSrc: avatar1.src,
    name: "Jamie Rivera",
    username: "@jamietechguru00",
  },
  {
    text: "Jamoamiz ushbu vositadan foydalana boshlaganimizdan beri unumdorlik keskin oshdi.",
    imageSrc: avatar2.src,
    name: "Josh Smith",
    username: "@jjsmith",
  },
  {
    text: "Ushbu ilova loyihalarim va muddatlarni boshqarish uslubimni butunlay o‘zgartirib yubordi.",
    imageSrc: avatar3.src,
    name: "Morgan Lee",
    username: "@morganleewhiz",
  },
  {
    text: "Bu ilovani ish jarayonimizga qanchalik tez integratsiya qilganimizdan hayratda qoldim.",
    imageSrc: avatar4.src,
    name: "Casey Jordan",
    username: "@caseyj",
  },
  {
    text: "Tadbirlarni rejalashtirish va amalga oshirish endi hech qachon bunchalik oson bo‘lmagan. Bu ilova barcha jarayonlarni nazoratda ushlab, hech narsa e’tibordan chetda qolmasligini ta’minlaydi.",
    imageSrc: avatar5.src,
    name: "Taylor Kim",
    username: "@taylorkimm",
  },
  {
    text: "Ilovaning moslashtirish imkoniyatlari va integratsiya funksiyalari juda yuqori darajada.",
    imageSrc: avatar6.src,
    name: "Riley Smith",
    username: "@rileysmith1",
  },
  {
    text: "Jamoamiz uchun bu ilovani qabul qilish loyihalarni boshqarishni soddalashtirib, ichki muloqotni yaxshiladi.",
    imageSrc: avatar7.src,
    name: "Jordan Patels",
    username: "@jpatelsdesign",
  },
  {
    text: "Bu ilova yordamida vazifalarni taqsimlash, jarayonni kuzatish va hujjatlarni boshqarishning barchasini bitta joyda amalga oshirish mumkin.",
    imageSrc: avatar8.src,
    name: "Sam Dawson",
    username: "@dawsontechtips",
  },
  {
    text: "Foydalanuvchiga qulay interfeys va kuchli funksiyalar bizning turli ehtiyojlarimizni to‘liq qondiradi.",
    imageSrc: avatar9.src,
    name: "Casey Harper",
    username: "@casey09",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

const TestimonialsColumn = (props: {
  className?: string;
  testimonials: typeof testimonials;
  duration?: number;
}) => (
  <div className={props.className}>
    <motion.div
      animate={{
        translateY: "-50%",
      }}
      transition={{
        duration: props.duration || 10,
        repeat: Infinity,
        ease: "linear",
        repeatType: "loop",
      }}
      className="flex flex-col gap-6 pb-6"
    >
      {[...new Array(2)].fill(0).map((_, index) => (
        <React.Fragment key={index}>
          {props.testimonials.map(({ text, imageSrc, name, username }) => (
            <div key={name} className="card">
              <div>{text}</div>
              <div className="flex items-center gap-2 mt-5">
                <Image
                  src={imageSrc}
                  alt={name}
                  width={40}
                  height={40}
                  className="w-10 h-10 rounded-full"
                />
                <div className="flex flex-col">
                  <div className="font-medium tracking-tight leading-5">
                    {name}
                  </div>
                  <div className="leading-5 tracking-tight">{username}</div>
                </div>
              </div>
            </div>
          ))}
        </React.Fragment>
      ))}
    </motion.div>
  </div>
);

export const Testimonials = () => {
  return (
    <section id="customers" className="bg-white">
      <div className="container">
        <div className="section-heading">
          <div className="flex justify-center">
            <div className="tag">Fikrlar</div>
          </div>
          <h2 className="section-title mt-5">
            Foydalanuvchilarimiz nima deyishadi
          </h2>
          <p className="section-description mt-5">
            Intuitiv dizayndan tortib qudratli funksiyalargacha — bizning
            ilovamiz butun dunyo foydalanuvchilari uchun ajralmas vositaga
            aylandi.
          </p>
        </div>
        <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[738px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn
            testimonials={secondColumn}
            className="hidden md:block"
            duration={19}
          />
          <TestimonialsColumn
            testimonials={thirdColumn}
            className="hidden lg:block"
            duration={17}
          />
        </div>
      </div>
    </section>
  );
};
