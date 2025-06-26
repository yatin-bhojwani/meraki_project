import { 
  Dancing_Script,
  Poppins,
  Playfair_Display 
} from 'next/font/google';

// Modern elegant cursive
export const merakiFont = Dancing_Script({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-meraki',
  display: 'swap',
});

// Clean sans-serif
export const headingFont = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-heading',
  display: 'swap',
});

// Base text
export const baseFont = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-base',
  display: 'swap',
});