'use client';

import { usePathname } from 'next/navigation';

const Header = () => {
  const location = usePathname();

  const navOptions = [
    {
      name: 'Academia',
      url: '/',
      active: location === '/',
    },
    {
      name: 'Sobre mí',
      url: '/sobre-mi',
      active: location === '/sobre-mi',
    },
    {
      name: 'Contacto',
      url: '/contacto',
      active: location === '/contacto',
    },
  ];

  return (
    <header className="h-20 flex flex-row justify-between items-center">
      <h1 className="text-xl font-bold">Flexágono</h1>
      <nav>
        <ul className="flex flex-row gap-5">
          {navOptions.map((option) => (
            <li key={option.name}>
              <a
                className={`py-[5px] px-4 border-[1px] rounded-full ${
                  option.active
                    ? 'border-[#2f2f2f] text-[#2f2f2f]'
                    : 'border-[#bbb] text-[#555]'
                }`}
                href={option.url}>
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
