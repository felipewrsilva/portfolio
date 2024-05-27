'use client'

import { BentoGrid, BentoGridItem } from './ui/BentoGrid'
import { HeroProps } from '@/data'

const Grid: React.FC<HeroProps> = ({ dict }) => {
  const gridItems = [
    {
      id: 1,
      title: dict.page.gridItems[0].title,
      description: dict.page.gridItems[0].description,
      className: 'lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]',
      imgClassName: 'w-full h-full',
      titleClassName: 'justify-end',
      img: '/b1.svg',
      spareImg: '',
    },
    {
      id: 2,
      title: dict.page.gridItems[1].title,
      description: dict.page.gridItems[1].description,
      className: 'lg:col-span-2 md:col-span-3 md:row-span-2',
      imgClassName: '',
      titleClassName: 'justify-start',
      img: '',
      spareImg: '',
    },
    {
      id: 3,
      title: dict.page.gridItems[2].title,
      description: dict.page.gridItems[2].description,
      className: 'lg:col-span-2 md:col-span-3 md:row-span-2',
      imgClassName: '',
      titleClassName: 'justify-center',
      img: '',
      spareImg: '',
    },
    {
      id: 4,
      title: dict.page.gridItems[3].title,
      description: dict.page.gridItems[3].description,
      className: 'lg:col-span-2 md:col-span-3 md:row-span-1',
      imgClassName: '',
      titleClassName: 'justify-start',
      img: '/grid.svg',
      spareImg: '/b4.svg',
    },
    {
      id: 5,
      title: dict.page.gridItems[4].title,
      description: dict.page.gridItems[4].description,
      className: 'md:col-span-3 md:row-span-2',
      imgClassName: 'absolute right-0 bottom-0 md:w-96 w-60',
      titleClassName: 'justify-center md:justify-start lg:justify-center',
      img: '/b5.svg',
      spareImg: '/grid.svg',
    },
    {
      id: 6,
      title: dict.page.gridItems[5].title,
      description: dict.page.gridItems[5].description,
      className: 'lg:col-span-2 md:col-span-3 md:row-span-1',
      imgClassName: '',
      titleClassName: 'justify-center md:max-w-full max-w-60 text-center',
      img: '',
      spareImg: '',
    },
  ]
  return (
    <section id="about">
      <BentoGrid className="w-full py-20">
        {gridItems.map((item, i) => (
          <BentoGridItem
            id={item.id}
            key={i}
            title={item.title}
            description={item.description}
            className={item.className}
            img={item.img}
            imgClassName={item.imgClassName}
            titleClassName={item.titleClassName}
            spareImg={item.spareImg}
            dict={dict}
          />
        ))}
      </BentoGrid>
    </section>
  )
}

export default Grid
