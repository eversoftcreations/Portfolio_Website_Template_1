'use client';

import React, { useState } from 'react'
import menuItems from './menuItems'
import ThemeToggler from '@/components/ui-elements/ThemeToggler';

const FloatNavigation = () => {

    const [showTooltip, setShowTooltip] = useState<{ [index: number]: boolean }>({});

    return (
        <div
            className='fixed top-0 right-0 w-[120px] h-dvh flex flex-col gap-[20px] justify-center items-center'
        >

            <ThemeToggler/>

            <div
                className='flex flex-col gap-[15px] bg-background-1 p-[5px] rounded-full'
            >
                {
                    menuItems.map((item, index) => (
                        <div
                            key={index}
                            className='relative'
                        >
                            <button
                                className='w-[30px] h-[30px] rounded-full flex items-center justify-center hover:bg-background-2 cursor-pointer'
                                onMouseEnter={() => {
                                    setShowTooltip(prev => ({
                                        ...prev,
                                        [index]: true,
                                    }))
                                }}
                                onMouseLeave={() => {
                                    setShowTooltip(prev => ({
                                        ...prev,
                                        [index]: false,
                                    }))
                                }}
                            >
                                <item.icon
                                    size={12}
                                />
                            </button>

                            {
                                showTooltip[index] &&
                                <span
                                    className='absolute top-1/2 -translate-y-1/2 right-[40px] text-xs py-[5px] px-[10px] bg-background-1 font-semibold rounded-md'
                                >{item.title}</span>
                            }
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default FloatNavigation