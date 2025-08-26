import Image from 'next/image'
import React from 'react'
import { RiFacebookFill, RiInstagramLine, RiYoutubeFill, RiTwitterXFill, RiArrowRightUpLongLine } from "@remixicon/react";

const ProfileSidebar = () => {
    return (
        <div
            className='min-w-[300px] max-w-[300px] bg-background-1 py-[25px] px-[25px] flex flex-col gap-[26px] items-center rounded-md border overflow-y-auto overflow-x-hidden'
        >
            <div
                className='border border-border py-[5px] px-[15px] flex gap-[10px] items-center rounded-4xl'
            >
                <div
                    className='w-[8px] h-[8px] rounded-full bg-primary-theme -mt-[3px]'
                ></div>
                <p
                    className='text-center text-sm text-foreground/60 font-medium'
                >Available for <span className='text-foreground'>3 Projects</span></p>
            </div>

            <div
                className='w-full relative flex flex-col items-center'
            >
                <div
                    className='w-[90%] bg-primary-theme relative rounded-md overflow-hidden'
                >
                    <Image
                        alt='Profile Avatar'
                        src={"/images/avatars/avatar.png"}
                        width={500}
                        height={500}
                        className='w-full'
                    />
                </div>

                <h2
                    className='font-allison absolute bottom-[-30px] text-[50px] text-center w-full rotate-[-10deg] text-white text-shadow-md text-shadow-black/50'
                >Jayden</h2>

            </div>

            <div
                className='mt-[15px] text-center'
            >

                <p
                    className='text-2xl font-semibold'
                >Jayden.design@gmail.com</p>
                
                <p
                    className='text-base font-medium text-foreground/50'
                >Based in San Fransisco, CA</p>

            </div>

            <div
                className='flex flex-nowrap gap-[5px]'
            >

                {
                    [
                        RiFacebookFill,
                        RiInstagramLine,
                        RiYoutubeFill,
                        RiTwitterXFill,
                    ].map((Icon, index) => (
                        <button
                            key={index}
                            className='min-w-[45px] h-[45px] rounded-full bg-background-2 flex items-center justify-center hover:bg-primary-theme transition-all duration-300 cursor-pointer hover:text-background dark:hover:text-foreground'
                        >
                            <Icon
                                size={20}
                            />
                        </button>
                    ))
                }

            </div>

            <button
                className='flex items-center gap-[20px] w-full pl-[20px] justify-between border border-primary-theme rounded-full cursor-pointer hover:bg-primary-theme transition-all hover:text-background dark:hover:text-foreground'
            >
                <p
                    className='text-lg font-medium'
                >Get Started</p>
                <div
                    className='w-[50px] h-[50px] flex items-center justify-center rounded-full bg-primary-theme text-background dark:text-foreground'
                >
                    <RiArrowRightUpLongLine
                        size={25}
                    />
                </div>
            </button>

        </div>
    )
}

export default ProfileSidebar