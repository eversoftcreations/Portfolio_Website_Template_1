'use client';

import { getBasiclayoutOverflowElement, getBasicLayoutOverflowElementChild } from '@/functions/client/getBasicLayoutOverflowElement';
import { RiArrowRightUpLongLine } from '@remixicon/react';
import React, { useEffect, useRef } from 'react'

const WorksSection = () => {

    const MOBILE_BREAKPOINT = 456;

    const parallelScrollRef = useRef<HTMLDivElement>(null);

    function handleScroll() {
        let parent: Window | Element | null = getBasiclayoutOverflowElement();
        let child = getBasicLayoutOverflowElementChild();

        if (window.innerWidth < MOBILE_BREAKPOINT) {
            parent = window;
            child = document.body;
        }

        if (parent && child) {

            let progress;

            if (parent instanceof Window) {
                progress = (parent.pageYOffset / child.scrollHeight) * 100;
            } else {
                progress = (parent.scrollTop / child.scrollHeight) * 100;
            }

            if (parallelScrollRef.current) {
                const scrollValue = (progress / 100) * child.scrollHeight;
                parallelScrollRef.current.scrollLeft = scrollValue;
            }
        }
    }

    useEffect(() => {
        let overflowElement: Window | Element | null = getBasiclayoutOverflowElement();

        if (window.innerWidth < MOBILE_BREAKPOINT) {
            overflowElement = window;
        }

        if (overflowElement) {
            overflowElement.addEventListener("scroll", handleScroll);
        }

        return () => overflowElement?.removeEventListener("scroll", handleScroll)
    }, [])

    const worksList: {
        image: string,
        title: string,
        category: string,
        date: string,
        url: string,
    }[] = [
            {
                image: "/images/works/works-1.jpg",
                title: "Helve Tica Website Redesign",
                category: "Website Design",
                date: "May 2024",
                url: "#"
            },
            {
                image: "/images/works/works-2.jpg",
                title: 'X-direct Mobile',
                category: "Mobile App Design",
                date: "May 2024",
                url: "#",
            },
            {
                image: "/images/works/works-3.jpg",
                title: "UI/UX Agency Website",
                category: "Website Design",
                date: "May 2024",
                url: "#",
            },
        ]

    return (
        <div
            className='mt-[100px] space-y-[80px]'
        >
            <div id='works' />
            <div
                className='w-full overflow-hidden bg-background-1/50 py-[40px] px-[50px] rounded-[30px]'
                ref={parallelScrollRef}
            >
                <div
                    className='min-w-max flex items-center gap-[40px]'
                >
                    {
                        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
                            .map((key) => (
                                <div
                                    key={key}
                                    className='flex items-center flex-nowrap gap-[40px] min-w-max'
                                >
                                    <div
                                        className='w-[15px] md:w-[20px] h-[15px] md:h-[20px] rounded-full bg-primary-theme'
                                    />
                                    <span
                                        className='text-5xl md:text-7xl font-medium'
                                    >Selected Works</span>
                                </div>
                            ))
                    }
                </div>
            </div>

            <div>
                <div
                    className='space-y-[50px]'
                >
                    {
                        worksList.map((work, index) => (
                            <div
                                key={index}
                                className='rounded-3xl overflow-hidden relative'
                            >
                                <div
                                    className='w-full min-h-[400px]'
                                    style={{
                                        backgroundImage: `url(${work.image})`,
                                        backgroundPosition: "center",
                                        backgroundSize: "cover",
                                        backgroundRepeat: "no-repeat",
                                    }}
                                />

                                <div
                                    className='absolute bottom-0 left-0 p-[20px] w-full'
                                >
                                    <div
                                        className='bg-background/70 py-[25px] px-[35px] flex flex-col md:flex-row gap-[30px] items-start md:items-center justify-between rounded-3xl border border-transparent hover:border-primary-theme'
                                    >
                                        <div>
                                            <p
                                                className='text-[20px] opacity-70'
                                            >{work.category}</p>
                                            <h3
                                                className='text-[35px] md:text-[40px] leading-[40px] md:leading-[50px]'
                                            >{work.title}</h3>
                                        </div>
                                        <div>
                                            <button
                                                className='w-[50px] h-[50px] flex items-center justify-center rounded-full bg-background-2 hover:bg-primary-theme cursor-pointer'
                                            >
                                                <RiArrowRightUpLongLine
                                                    size={25}
                                                />
                                            </button>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        ))
                    }
                </div>
            </div>

        </div>
    )
}

export default WorksSection