'use client';

import React from 'react'

const WorksSection = () => {

    return (
        <div
            className='mt-[100px]'
        >
            <div
                className='w-full overflow-hidden bg-background-1/50 py-[40px] px-[50px] rounded-[30px]'
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
                                        className='w-[20px] h-[20px] rounded-full bg-primary-theme'
                                    />
                                    <span
                                        className='text-7xl font-medium'
                                    >Selected Works</span>
                                </div>
                            ))
                    }
                </div>
            </div>


        </div>
    )
}

export default WorksSection