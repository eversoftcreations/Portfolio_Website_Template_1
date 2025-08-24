import React from 'react'

const ProfileSidebar = () => {
    return (
        <div
            className='min-w-[250px] bg-background-1 p-[15px] flex flex-col items-center rounded-md'
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
        </div>
    )
}

export default ProfileSidebar