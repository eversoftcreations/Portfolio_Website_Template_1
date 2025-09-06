import React from 'react'

const ColorBullet = ({ text }: {
    text: string,
}) => {
    return (
        <div
            className='flex items-center gap-[10px]'
        >
            <div
                className='w-[6px] h-[6px] rounded-full bg-primary-theme'
            ></div>
            <p
                className='text-foreground/50 text-base font-medium'
            >{text}</p>
        </div>
    )
}

export default ColorBullet