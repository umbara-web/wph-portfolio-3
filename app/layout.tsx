import clsx from 'clsx';
import type { Metadata } from 'next';
import { Raleway, Raleway_Dots } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from 'next-themes';

const raleway = Raleway({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  style: ['normal', 'italic'],
  variable: '--font-raleway',
});

export const metadata: Metadata = {
  title: 'Umbara Portfolio',
  description: 'Modern & Minimal Umbara Portfolio',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <head>
        <link rel='icon' href='/images/wph-logo.svg' sizes='any' />
      </head>
      <body className={clsx(raleway.variable, 'antialiased')}>
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
