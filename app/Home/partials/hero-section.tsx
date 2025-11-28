'use client';

import Navbar from './navbar';
import Image from 'next/image';
import { ArrowDown } from 'lucide-react';
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTiktok,
} from 'react-icons/fa';
import { CiGlobe } from 'react-icons/ci';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <section
      id='hero'
      className='custom-container flex h-screen flex-wrap gap-7 overflow-hidden md:gap-10'
    >
      {/* Portfolio */}
      <div
        className='text-outline absolute top-17.5 left-1/2 -translate-x-1/2 font-bold opacity-10 md:top-14 lg:top-44.75'
        style={{
          fontSize: 'clamp(3.47rem, 11.73vw, 8.85rem)',
          lineHeight: 'clamp(4.39rem, 14.84vw, 11.21rem)',
        }}
      >
        <h1>PORTFOLIO</h1>
      </div>

      {/* Foto Profile */}
      <div
        className='absolute top-26.75 left-1/2 -translate-x-1/2 lg:top-67'
        style={{
          width: 'clamp(19.95rem, 31.71vw, 23.94rem)',
          height: 'clamp(25.88rem, 41.12vw, 31.05rem)',
        }}
      >
        <div className=''>
          <Image
            src='/images/foto-profile.svg'
            alt='hero'
            fill
            className='object-center'
          />

          {/* Logo Profile */}
          <Image
            src='/images/logo-dark.svg'
            alt='logo-profile'
            width={81}
            height={81}
            className='absolute top-3.5 left-62.75 md:left-61 md:h-31.5 md:w-31.5 lg:top-7.75 lg:left-76'
          />
          <Image
            src='/images/stamp.png'
            alt='logo-profile'
            width={97}
            height={97}
            className='absolute top-90 left-60.75 lg:top-99.25 lg:left-79.5 lg:h-30 lg:w-30'
          />
        </div>
      </div>

      {/* Arrow to down */}
      <div
        className='absolute top-200.5 left-1/2 -translate-x-1/2 rounded-t-[70px] border-[0.7px] border-white opacity-20 md:top-209.5'
        style={{
          width: 'clamp(4.63rem, 10.21vw, 6.56rem)',
          height: 'clamp(6.81rem, 15.18vw, 9.75rem)',
        }}
      >
        <Link href='#contact'>
          <div className='absolute top-4.25 left-1/2 -translate-x-1/2 cursor-pointer md:top-10.75'>
            <ArrowDown className='h-6 w-6 md:h-8.75 md:w-8.75' />
          </div>
        </Link>
      </div>

      {/* Name, About Me & Social Media */}
      <div className='z-10 mt-116.75 flex-[5.3] basis-80 md:pl-20 lg:mt-1 lg:flex lg:items-center lg:justify-between'>
        {/* Name */}
        <div
          className='font-bold'
          style={{
            fontSize: 'clamp(2.5rem, 6.62vw, 5rem)',
            lineHeight: 'clamp(3.5rem, 7.55vw, 5.7rem)',
          }}
        >
          <h1>DEBI</h1>
          <h1>UMBARA</h1>
        </div>
        {/* About Me */}
        <div className='w-78.25'>
          <h1
            className='font-bold'
            style={{
              fontSize: 'clamp(1.13rem, 2.65vw, 2rem)',
              lineHeight: 'clamp(2rem, 3.31vw, 2.5rem)',
            }}
          >
            About me
          </h1>
          <p
            className='mt-1 font-semibold'
            style={{
              fontSize: 'clamp(0.88rem, 1.32vw, 1rem)',
              lineHeight: 'clamp(1.75rem, 2.48vw, 1.88rem)',
            }}
          >
            Passionate about frontend development, I focus on crafting digital
            products.
          </p>
          {/* Social Media */}
          <div className='mt-3xl flex gap-3 lg:mt-10'>
            <Link
              href='#facebook'
              className='flex-center cursor-pointer rounded-full border border-white/20 md:border-none md:bg-black/60'
              style={{
                width: 'clamp(2.5rem, 3.97vw, 3rem)',
                height: 'clamp(2.5rem, 3.97vw, 3rem)',
              }}
            >
              <FaFacebookF
                className='text-neutral-25'
                style={{
                  width: 'clamp(0.68rem, 1.08vw, 0.81rem)',
                  height: 'clamp(1.25rem, 3.31vw, 2.5rem)',
                }}
              />
            </Link>
            <Link
              href='#instagram'
              className='flex-center cursor-pointer rounded-full border border-white/20 md:border-none md:bg-black/60'
              style={{
                width: 'clamp(2.5rem, 3.97vw, 3rem)',
                height: 'clamp(2.5rem, 3.97vw, 3rem)',
              }}
            >
              <FaInstagram
                className='text-neutral-25'
                style={{
                  width: 'clamp(1.25rem, 1.99vw, 1.5rem)',
                  height: 'clamp(1.25rem, 1.99vw, 1.5rem)',
                }}
              />
            </Link>
            <Link
              href='#linkedin'
              className='flex-center cursor-pointer rounded-full border border-white/20 md:border-none md:bg-black/60'
              style={{
                width: 'clamp(2.5rem, 3.97vw, 3rem)',
                height: 'clamp(2.5rem, 3.97vw, 3rem)',
              }}
            >
              <FaLinkedinIn
                className='text-neutral-25'
                style={{
                  width: 'clamp(1.05rem, 1.66vw, 1.26rem)',
                  height: 'clamp(1rem, 1.59vw, 1.2rem)',
                }}
              />
            </Link>
            <Link
              href='#twitter'
              className='flex-center cursor-pointer rounded-full border border-white/20 md:border-none md:bg-black/60'
              style={{
                width: 'clamp(2.5rem, 3.97vw, 3rem)',
                height: 'clamp(2.5rem, 3.97vw, 3rem)',
              }}
            >
              <FaTiktok
                className='text-neutral-25'
                style={{
                  width: 'clamp(1.07rem, 1.69vw, 1.28rem)',
                  height: 'clamp(1.23rem, 1.95vw, 1.47rem)',
                }}
              />
            </Link>
          </div>
        </div>
      </div>

      {/* Name */}
      {/* <div
        className='absolute top-116.75 font-bold md:pl-20 lg:top-99.5 lg:pl-13.5'
        style={{
          fontSize: 'clamp(2.5rem, 6.62vw, 5rem)',
          lineHeight: 'clamp(3.5rem, 7.55vw, 5.7rem)',
        }}
      >
        <h1>DEBI</h1>
        <h1>UMBARA</h1>
      </div> */}
      {/* About Me */}
      {/* <div className='md:gap-5xl gap-3xl absolute top-146.75 w-78.25 md:pl-20 lg:top-98.25 lg:right-0 lg:-translate-x-1/2'>
        <h1
          className='font-bold'
          style={{
            fontSize: 'clamp(1.13rem, 2.65vw, 2rem)',
            lineHeight: 'clamp(2rem, 3.31vw, 2.5rem)',
          }}
        >
          About me
        </h1>
        <p
          className='mt-1 font-semibold'
          style={{
            fontSize: 'clamp(0.88rem, 1.32vw, 1rem)',
            lineHeight: 'clamp(1.75rem, 2.48vw, 1.88rem)',
          }}
        >
          Passionate about frontend development, I focus on crafting digital
          products.
        </p> */}
      {/* Social Media */}
      {/* <div className='mt-3xl flex gap-3 lg:mt-10'>
          <Link
            href='#facebook'
            className='flex-center cursor-pointer rounded-full border border-white/20 md:border-none md:bg-black/60'
            style={{
              width: 'clamp(2.5rem, 3.97vw, 3rem)',
              height: 'clamp(2.5rem, 3.97vw, 3rem)',
            }}
          >
            <FaFacebookF
              className='text-neutral-25'
              style={{
                width: 'clamp(0.68rem, 1.08vw, 0.81rem)',
                height: 'clamp(1.25rem, 3.31vw, 2.5rem)',
              }}
            />
          </Link>
          <Link
            href='#instagram'
            className='flex-center cursor-pointer rounded-full border border-white/20 md:border-none md:bg-black/60'
            style={{
              width: 'clamp(2.5rem, 3.97vw, 3rem)',
              height: 'clamp(2.5rem, 3.97vw, 3rem)',
            }}
          >
            <FaInstagram
              className='text-neutral-25'
              style={{
                width: 'clamp(1.25rem, 1.99vw, 1.5rem)',
                height: 'clamp(1.25rem, 1.99vw, 1.5rem)',
              }}
            />
          </Link>
          <Link
            href='#linkedin'
            className='flex-center cursor-pointer rounded-full border border-white/20 md:border-none md:bg-black/60'
            style={{
              width: 'clamp(2.5rem, 3.97vw, 3rem)',
              height: 'clamp(2.5rem, 3.97vw, 3rem)',
            }}
          >
            <FaLinkedinIn
              className='text-neutral-25'
              style={{
                width: 'clamp(1.05rem, 1.66vw, 1.26rem)',
                height: 'clamp(1rem, 1.59vw, 1.2rem)',
              }}
            />
          </Link>
          <Link
            href='#twitter'
            className='flex-center cursor-pointer rounded-full border border-white/20 md:border-none md:bg-black/60'
            style={{
              width: 'clamp(2.5rem, 3.97vw, 3rem)',
              height: 'clamp(2.5rem, 3.97vw, 3rem)',
            }}
          >
            <FaTiktok
              className='text-neutral-25'
              style={{
                width: 'clamp(1.07rem, 1.69vw, 1.28rem)',
                height: 'clamp(1.23rem, 1.95vw, 1.47rem)',
              }}
            />
          </Link>
        </div>
      </div> */}

      {/* Background Desktop */}
      <Image
        src='/images/bg-dekstop.png'
        alt='hero'
        width={1440}
        height={946}
        className='absolute left-1/2 -z-20 hidden h-full w-full -translate-x-1/2 object-cover object-center lg:block'
      />

      {/* Background */}
      <Image
        src='/images/bg-mobile.png'
        alt='hero'
        width={852}
        height={560}
        className='absolute left-1/2 -z-20 -translate-x-1/2 lg:hidden'
      />
    </section>
  );
};

export default HeroSection;
