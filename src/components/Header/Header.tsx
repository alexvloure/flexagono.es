"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import logo from "@/assets/logo.png";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const Header = () => {
  const location = usePathname();
  const [scrolled, setScrolled] = useState(false);

  const navOptions = [
    {
      name: "Academia",
      url: "/",
      active: location === "/",
    },
    {
      name: "Sobre mí",
      url: "/sobre-mi",
      active: location === "/sobre-mi",
    },
    {
      name: "Contacto",
      url: "/contacto",
      active: location === "/contacto",
    },
  ];

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    });
  }, []);

  return (
    <header
      className={cn("sticky-header xl:top-4 xl:h-16 xl:m-4", {
        elevated: scrolled,
      })}
    >
      <div className="flex items-center gap-2">
        <Image src={logo} alt="Flexagono logo" width={32} />
        <h1 className={`text-[1.5rem] text-[#3c3a34] font-medium`}>
          flexágono
        </h1>
      </div>
      <nav>
        <ul className="hidden sm:flex flex-row gap-5">
          {navOptions.map((option) => (
            <li key={option.name}>
              <a
                className={`py-[5px] px-4 border-[1px] rounded-full ${
                  option.active
                    ? "border-[#2f2f2f] text-[#2f2f2f]"
                    : "border-[#bbb] text-[#555]"
                }`}
                href={option.url}
              >
                {option.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
