import { ReactNode } from 'react';

type SectionProps = {
  children: ReactNode;
  title: string;
  subtitle: string;
  id?: string;
};

export const Section: React.FC<SectionProps> = ({
  children,
  title,
  subtitle,
  id,
}) => {
  return (
    <div className='custom-container py-10 md:py-20'>
      {/* Heading */}
      <div className='text-center'>
        <h2 className='md:display-2xl-bold display-sm-bold mb-2 md:mb-4'>
          {title}
        </h2>
        <p className='text-md-regular md:text-lg-regular text-neutral-400'>
          {subtitle}
        </p>
      </div>

      {/* Content */}
      <div className='mt-2 md:mt-4'>{children}</div>
    </div>
  );
};
