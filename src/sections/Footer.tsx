import logo from "@/assets/logosaas.png";
import SocialInstagram from "@/assets/social-insta.svg";
import SocialLinkedin from "@/assets/social-linkedin.svg";
import SocialX from "@/assets/social-x.svg";
import SocialYoutube from "@/assets/social-youtube.svg";
import { NAVIGATION_LINKS, SOCIAL_LINKS } from "@/lib/constants";
import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="bg-black text-[#BCBCBC] text-sm py-10 text-center">
      <div className="container">
        <div className="inline-flex relative before:content-[''] before:top-2 before:bottom-0 before:h-full before:w-full before:blur before:bg-[linear-gradient(to_right,#F87BFF,#FB92CF,#FFDD9B,#C2F0B1,#2FD8FE)] before:absolute ">
          <Image src={logo} alt="Logotip" height={40} className="relative" />
        </div>
        <nav className="flex flex-col md:flex-row md:justify-center gap-6 mt-6">
          {NAVIGATION_LINKS.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-white">
              {link.label}
            </a>
          ))}
        </nav>
        <div className="flex justify-center gap-6 mt-6">
          <a
            href={SOCIAL_LINKS.twitter}
            aria-label="Twitter"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
          >
            <SocialX />
          </a>
          <a
            href={SOCIAL_LINKS.instagram}
            aria-label="Instagram"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
          >
            <SocialInstagram />
          </a>
          <a
            href={SOCIAL_LINKS.linkedin}
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
          >
            <SocialLinkedin />
          </a>
          <a
            href={SOCIAL_LINKS.youtube}
            aria-label="YouTube"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
          >
            <SocialYoutube />
          </a>
        </div>
        <p className="mt-6">
          &copy; 2025 Sizning Kompaniyangiz. Barcha huquqlar himoyalangan.
        </p>
      </div>
    </footer>
  );
};
