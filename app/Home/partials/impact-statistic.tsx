import React from 'react';
import Image from 'next/image';
// import { statisticImagesData } from 'next/image';
import Navbar from './navbar';
import { Section } from '@/components/layout/section';
import { div } from 'motion/react-client';
import { statisticData } from '@/constants/statistic-data';

const ImpactStatistics = () => {
  return (
    <div className='custom-container'>
      {/* Heading */}
      <div className='flex-star py-10 md:py-20'>
        <h1 className='md:display-2xl-bold display-sm-bold text-neutral-25'>
          Proven Numbers. Real Impact.
        </h1>
        <p className='text-md-regular md:text-lg-regular mt-2 text-neutral-400 md:mt-4'>
          From shipped products to years of experience
        </p>
      </div>

      {/* Content */}
      <div className=''>
        <div className='mt-6 flex flex-col divide-y divide-neutral-900 md:mt-12'>
          {statisticData.map((statistic) => (
            <div
              key={statistic.data}
              className='flex-center w-full flex-row py-8 md:py-12'
            >
              <div className='flex basis-128 items-center gap-2'>
                <Image
                  src={statistic.iconSrc}
                  alt='icon-statistic'
                  width={28}
                  height={28}
                  className='md:h-11 md:w-11'
                />
                <h1 className='display-xl-bold md:display-4xl-bold text-white'>
                  {statistic.data}
                </h1>
              </div>
              <div className='flex-2 basis-128'>
                <h1 className='md:display-md-medium text-neutral-25 text-md-medium w-28'>
                  {statistic.info}
                </h1>
              </div>
              <div className='flex-center basis-64 md:basis-32'>
                <Image
                  src={statistic.imageSrc}
                  alt='statistic'
                  width={80}
                  height={80}
                  className='md:h-30 md:w-30'
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    // <Section id='about' className='custom-container'>
    //   <div>IMPACT STATISTIC</div>
    // </Section>
  );
};
export default ImpactStatistics;
