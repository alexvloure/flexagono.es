import styles from './fonts/fonts.module.css';

import Card from '@/components/Card/Card';

import blurry from '@/public/bbblurry.svg';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="h-[calc(100dvh_-_80px)] w-full flex flex-col justify-between">
      <Image
        className="absolute top-10 mx-auto"
        src={blurry}
        alt="blurry background"
      />
      <div className="flex flex-col mt-20 ml-28 z-[1]">
        <h1 className={`text-9xl ml-16 font-[500] ${styles.nohemiRegular}`}>
          Ciencia
        </h1>
        <p className={`text-8xl ${styles.fanwoodItalic}`}>
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
