"use client";

import { usePathname } from "next/navigation";
import { nohemiRegular } from "@/app/fonts";
import { Germania_One } from "next/font/google";

const germania_one = Germania_One({
  weight: "400",
  subsets: ["latin"],
});

const Header = () => {
  const location = usePathname();

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

  return (
    <header className="h-16 fixed top-0 w-full z-[9999]">
      <div className="h-full max-w-[95%] mx-auto px-2 flex justify-between items-center">
        <h1 className={`text-[2rem] font-medium ${nohemiRegular.className}`}>
          Flexágono
        </h1>
        <nav>
          <ul className="hidden sm:flex flex-row gap-5">
            {navOptions.map((option) => (
              <li key={option.name}>
                <a href={option.url}>{option.name}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
