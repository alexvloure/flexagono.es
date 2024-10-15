import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header/Header';
import { Montserrat } from 'next/font/google';
import { Providers } from './providers';
import Image from 'next/image';

// import gradientBg from '@/assets/gradient-bg.jpg';
import background from '@/assets/background.jpg';

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.className} antialiased min-h-screen `}>
        <Image src={background} alt="Gradient background" className='fixed w-full h-full inset-0' />
        <div className="fixed mix-blend-multiply inset-0 z-0">
          <video className='w-full h-full object-cover' autoPlay loop muted playsInline>
            <source src="/videos/background.mp4" type='video/mp4' />
          </video>
        </div>
        <Header />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
