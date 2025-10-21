import ArrowRight from "@/assets/arrow-right.svg";
import Logo from "@/assets/logosaas.png";
import Image from "next/image";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { NAVIGATION_LINKS } from "@/lib/constants";
import { Button } from "@/components/ui/Button";

export const Header = () => {
  return (
    <header className="sticky top-0 backdrop-blur-sm z-20">
      <div className="flex justify-center items-center py-3 bg-black text-white text-sm gap-3">
        <p className="text-white/60 hidden md:block">
          Ish jarayonlaringizni soddalashtiring va unumdorlikni oshiring
        </p>
        <div className="inline-flex items-center gap-1">
          <p>Bepul foydalanish</p>
          <ArrowRight className="w-4 h-4 inline-flex justify-center items-center" />
        </div>
      </div>
      <div className="py-5">
        <div className="container">
          <div className="flex items-center justify-between">
            <Image src={Logo} alt="SaaS logotipi" width={40} height={40} />
            <MobileMenu />
            <nav className="hidden md:flex items-center gap-6 text-black/80">
              {NAVIGATION_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="hover:text-black"
                >
                  {link.label}
                </a>
              ))}
              <Button className="ml-2">Bepul foydalanish</Button>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};
