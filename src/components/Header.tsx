"use client";

import { usePathname } from "next/navigation";
import { nohemiRegular } from "@/app/fonts";

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
      <div className="h-full max-w-[90%] md:max-w-[85%] mx-auto px-2 flex justify-between items-center">
        <h1
          className={`text-[1.2rem] md:text-[1.5rem] font-medium ${nohemiRegular.className}`}
        >
          flexágono
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
