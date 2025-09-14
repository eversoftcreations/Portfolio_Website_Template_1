'use client';

import { RiArrowRightUpLine, RiCropLine, RiExpandDiagonalLine, RiGlobalLine, RiPenNibLine, RiRulerLine } from '@remixicon/react'
import React, { useState } from 'react'
import ServicesAccordionItem, { ServiceAccordionItemInterface } from './AccordionItem'
import ColorBullet from '@/components/ui-elements/ColorBullet';

const ServiceSection = () => {

  const [tabOpen, setTabOpen] = useState<{
    [key: number]: boolean,
  }>({0: true});

  const accordionData:
    ServiceAccordionItemInterface[] =
    [
      {
        title: "Graphic Design",
        icon: RiPenNibLine,
        points: [
          "Typography & Color Systems",
          "Logo Design",
          "Brand Guidelines",
        ]
      },
      {
        title: "UI/UX Design",
        icon: RiRulerLine,
        points: [
          "Iconography",
          "Imagery & Photography Style",
          "Grid & Layout Systems",
        ]
      },
      {
        title: "Webflow Dev",
        icon: RiCropLine,
        points: [
          "UI Components Library",
          "Motion & Animation Guidelines",
          "Design Tokens",
        ]
      },
      {
        title: "Framer Dev",
        icon: RiExpandDiagonalLine,
        points: [
          "Social Media Guidelines",
          "Brand Architecture",
          "Print Assets",
        ]
      },
    ]

  return (
    <div
      className='mt-[100px] bg-background-1/50 py-[40px] px-[35px] rounded-2xl'
    >
      <div id='services'/>
      <div
        className='space-y-[50px]'
      >
        <ColorBullet
          text='My Services'
        />

        <div
          className='space-y-[30px]'
        >
          {
            accordionData.map((data, index) => (
              <ServicesAccordionItem
                data={data}
                index={index}
                isOpen={tabOpen}
                setIsOpen={setTabOpen}
                key={index}
              />
            ))
          }
        </div>

        <div
          className='w-full flex items-center justify-between'
        >
          <div
            className='flex items-center gap-1.5'
          >
            <RiGlobalLine
              size={18}
              opacity={0.5}
            />
            <p
              className='text-[15px] text-foreground/50 pt-[2px]'
            >Available to <span className='text-foreground'>Worldwide</span></p>
          </div>

          <button
            className='flex items-center gap-1.5 cursor-pointer'
          >
            <p>Contact Us</p>
            <RiArrowRightUpLine
              size={20}
            />
          </button>
        </div>
      </div>
    </div>
  )
}

export default ServiceSection