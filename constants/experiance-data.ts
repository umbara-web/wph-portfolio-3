import { StaticImageData } from 'next/image';

import iconSrc1 from '../public/icons/html.svg';
import iconSrc2 from '../public/icons/css.svg';
import iconSrc3 from '../public/icons/javascript.svg';
import iconSrc4 from '../public/icons/typescript.svg';
import iconSrc5 from '../public/icons/sequalize.svg';
import iconSrc6 from '../public/icons/mongodb.svg';

type Experience = {
  iconSrc: StaticImageData;
  title: string;
};
export const experienceData: Experience[] = [
  {
    iconSrc: iconSrc1,
    title: 'HTML',
  },
  {
    iconSrc: iconSrc2,
    title: 'CSS',
  },
  {
    iconSrc: iconSrc3,
    title: 'JavaScript',
  },
  {
    iconSrc: iconSrc4,
    title: 'TypeScript',
  },
  {
    iconSrc: iconSrc5,
    title: 'Sequalize',
  },
  {
    iconSrc: iconSrc6,
    title: 'Mongo DB',
  },
];
