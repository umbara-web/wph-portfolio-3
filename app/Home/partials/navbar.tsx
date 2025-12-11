'use client';

import { Button } from '@/components/ui/button';
import { navigationData } from '@/constants/navigation-data';
import { Menu, X } from 'lucide-react';
import { motion, useScroll, useTransform } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import React from 'react';
import { ModeToggle } from '@/components/ui/ModeToggle';

const Navbar = () => {
  const [menuState, setMenuState] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header>
      <nav data-state={menuState && 'active'} className='fixed z-50 w-full'>
        <div
          className={cn(
            'custom-container mx-auto mt-4 transition-all duration-300',
            isScrolled &&
              'bg-background/10 rounded-2xl shadow-xl shadow-zinc-300/20 backdrop-blur-lg'
          )}
        >
          <div className='relative mt-4 flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-4'>
            <div className='flex w-full justify-between lg:w-auto'>
              {/* Logo */}
              <Link
                href='/'
                aria-label='home'
                className='flex items-center gap-1 lg:gap-2'
              >
                <Image
                  src='/images/logo-light.svg'
                  alt='logo'
                  width={30}
                  height={30}
                  className='md:h-10.75 md:w-10.75 dark:hidden'
                />
                <Image
                  src='/images/logo-dark.svg'
                  alt='logo'
                  width={30}
                  height={30}
                  className='hidden md:h-10.75 md:w-10.75 dark:block'
                />
                <p className='text-xl-bold'>Umbara</p>
              </Link>

              {/* Humberger Menu */}
              <button
                onClick={() => setMenuState(!menuState)}
                aria-label={menuState == true ? 'Close Menu' : 'Open Menu'}
                className='relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden'
              >
                <Menu className='m-auto size-6 duration-200 in-data-[state=active]:scale-0 in-data-[state=active]:rotate-180 in-data-[state=active]:opacity-0' />
                <X className='absolute inset-0 m-auto size-6 scale-0 -rotate-180 opacity-0 duration-200 in-data-[state=active]:scale-100 in-data-[state=active]:rotate-0 in-data-[state=active]:opacity-100' />
              </button>
            </div>

            {/* Navigation Dekstop */}
            <div className='hidden lg:block'>
              <ul className='text-md flex gap-6 font-medium'>
                {navigationData.map((data) => (
                  <li key={data.label}>
                    <Link
                      href={data.href}
                      className='block rounded-md px-2 py-1 transition-colors hover:bg-neutral-500/40 focus:bg-neutral-500/40'
                    >
                      <span>{data.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Navigation Mobile */}
            <div className='bg-background mt-8 mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 divide-y divide-neutral-500/30 rounded-3xl border border-neutral-500/30 p-6 shadow-2xl shadow-zinc-300/20 in-data-[state=active]:block md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none lg:in-data-[state=active]:flex dark:shadow-none dark:lg:bg-transparent'>
              <div className='lg:hidden'>
                <ul className='text-md space-y-3 pb-6 font-medium'>
                  {navigationData.map((data) => (
                    <li key={data.label}>
                      <Link
                        href={data.href}
                        className='block rounded-md px-3 py-2 transition-colors hover:bg-neutral-500/15 focus:bg-neutral-500/15'
                      >
                        <span>{data.label}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Button & Dark*/}
              <div className='flex w-full flex-col items-center space-y-3 md:w-fit md:flex-row md:gap-3 md:space-y-0'>
                <Button
                  asChild
                  size='sm'
                  className='w-full font-semibold lg:w-fit'
                >
                  <Link href='#contact'>
                    <span>Get in Touch</span>
                  </Link>
                </Button>
                <ModeToggle />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </motion.header>
  );
};
export default Navbar;
