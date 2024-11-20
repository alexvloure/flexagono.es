"use client";

import { usePathname } from "next/navigation";
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
    <header className="fixed-header">
      <div className="flex items-center gap-2">
        {/* <Image src={logo} alt="Flexagono logo" width={32} /> */}
        <h1 className={`text-[2.5rem] font-medium ${germania_one.className}`}>
          F.
        </h1>
      </div>
      <nav>
        <ul className="hidden sm:flex flex-row gap-5">
          {navOptions.map((option) => (
            <li key={option.name}>
              <a
                // className={`py-[5px] px-4 border-[1px] rounded-full ${
                //   option.active
                //     ? "border-[#2f2f2f] text-[#2f2f2f]"
                //     : "border-[#bbb] text-[#555]"
                // }`}
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
