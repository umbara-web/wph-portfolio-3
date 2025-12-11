import { StaticImageData } from 'next/image';

import iconImage from '../public/icons/icon-statistic.svg';
import statistic1Src from '../public/images/statistic1.png';
import statistic2Src from '../public/images/statistic2.png';
import statistic3Src from '../public/images/statistic3.png';

type Statistic = {
  iconSrc: StaticImageData;
  data: string;
  info: string;
  imageSrc: StaticImageData;
};

export const statisticData: Statistic[] = [
  {
    iconSrc: iconImage,
    data: '2+',
    info: 'Years Experience',
    imageSrc: statistic1Src,
  },
  {
    iconSrc: iconImage,
    data: '99%',
    info: 'Client Satisfaction',
    imageSrc: statistic2Src,
  },
  {
    iconSrc: iconImage,
    data: '12+',
    info: 'Project Delivered',
    imageSrc: statistic3Src,
  },
];
