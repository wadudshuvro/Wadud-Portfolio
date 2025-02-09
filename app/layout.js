import {
  Geist_Mono,
  Outfit as OutfitFont,
  Ovo as OvoFont,
} from 'next/font/google';
import './globals.css';

const outfit = OutfitFont({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

const ovo = OvoFont({
  subsets: ['latin'],
  weight: ['400'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata = {
  title: 'Portfolio - Shuvro',
  description: 'I am Wadud Shuvro',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${outfit.className} ${ovo.className} ${geistMono.variable} antialiased leading-8 overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
