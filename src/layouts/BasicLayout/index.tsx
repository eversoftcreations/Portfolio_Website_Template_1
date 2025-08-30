import React from 'react'
import ProfileSidebar from './Profile'
import FloatNavigation from './Navigation'

const BasicLayout = ({
    children,
}: Readonly<{
    children: React.ReactNode,
}>) => {
    return (
        <div
            className='flex flex-col md:flex-row gap-[30px] md:gap-0 items-stretch p-[20px] md:p-[0px] md:pl-[25px] md:h-dvh'
        >
            <ProfileSidebar />
            <div
                className='w-full p-0 md:pl-[50px] md:py-[50px] md:pr-[100px] h-full overflow-auto'
                style={{
                    scrollbarWidth: "none",
                    msOverflowStyle: "none",
                }}
            >
                <div
                    className='w-full max-w-[800px] mx-auto'
                >
                    {children}
                </div>
            </div>
            <FloatNavigation />
        </div>
    )
}

export default BasicLayout