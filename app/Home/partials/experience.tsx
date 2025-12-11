import { Section } from '@/components/layout/section';
import { Button } from '@/components/ui/button';
import { experienceData } from '@/constants/experiance-data';
import Image from 'next/image';

const ExperienceDev = () => {
  return (
    <Section
      id='experiance'
      title='Experienced in Web & App Development'
      subtitle='I create user-focused websites that look good, work well, and feel right.'
    >
      <div className='mt-6 grid grid-cols-1 gap-4 md:mt-16 md:flex md:grid-cols-2 md:justify-between'>
        <div className='grid grid-cols-2 gap-4 md:w-168.5 md:grid-cols-3'>
          {experienceData.map((experience) => (
            <div
              key={experience.title}
              className='flex-center h-43 gap-4 rounded-2xl border border-neutral-900 p-2 md:h-53.5'
            >
              <div className='text-center'>
                <Image
                  src={experience.iconSrc}
                  alt='icon-experiance'
                  width={90}
                  height={90}
                />
                <h4 className='text-md-regular md:text-lg-medium'>
                  {experience.title}
                </h4>
              </div>
            </div>
          ))}
        </div>
        {/* Description */}
        <div className='flex-center relative md:w-127.25'>
          <div className='absolute gap-3 px-6 py-4'>
            <p className='text-xl-bold md:display-md-bold h-35.25 md:h-56.5'>
              "Programming is the art of telling another human what you want the
              computer to do."
            </p>
            <h4 className='text-md-regular'>— Donald Knuth</h4>
            <Button className='text-sm-semibold mt-16.5 h-12 w-full gap-1 p-2 text-black'>
              Let’s Build Something
            </Button>
          </div>
          <Image
            src='/images/image-experiance.png'
            alt='image-experiance'
            width={361}
            height={303}
            className='w-full md:h-111.25'
          />
        </div>
      </div>
    </Section>
  );
};

export default ExperienceDev;
