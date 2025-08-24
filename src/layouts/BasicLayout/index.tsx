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
        className='flex items-stretch p-[20px] h-dvh'
    >
        <ProfileSidebar/>
        <div
            className='w-full py-[15px] px-[20px]'
        >
            {children}
        </div>
        <FloatNavigation/>
    </div>
  )
}

export default BasicLayout