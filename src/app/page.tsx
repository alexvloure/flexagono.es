import styles from './fonts/fonts.module.css';

import Card from '@/components/Card/Card';

import blurry from '@/public/bbblurry.svg';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="h-[calc(100dvh_-_80px)] w-full flex flex-col justify-between">
      <Image
        className="absolute top-0 mx-auto max-w-[100dvw] max-h-[100dvh] h-auto w-auto"
        src={blurry}
        alt="blurry background"
      />
      <div className="flex flex-col mt-20 mx-auto md:mx-0 md:ml-10 xl:ml-20 2xl:ml-28 z-[1]">
        <h1
          className={`text-7xl lg:text-8xl xl:text-9xl ml-16 font-[500] ${styles.nohemiRegular}`}>
          Ciencia
        </h1>
        <p
          className={`text-6xl lg:text-7xl xl:text-8xl ${styles.fanwoodItalic}`}>
          hecha <span className="underline decoration-[#FFED9D]">fácil!</span>
        </p>
      </div>
      <div className="self-center flex flex-row items-end gap-2 md:gap-5 justify-center h-1/2 w-full pb-5">
        <Card
          className="w-1/3 h-4/5 bg-[#DAFFB9]"
          title="Primaria"
          description="hey"
        />
        <Card
          className="w-1/3 h-full bg-[#FFED9D]"
          title="Secundaria"
          description="hey"
        />
        <Card
          className="w-1/3 h-2/3 bg-[#9DE0FF]"
          title="Bachillerato"
          description="hey"
        />
      </div>
    </div>
  );
}
