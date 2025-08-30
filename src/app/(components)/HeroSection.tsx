import CounterText from '@/components/ui-elements/CounterText'
import MetrixAnimationText from '@/components/ui-elements/TextMetrix'
import React from 'react'

const HeroSection = () => {
    return (
        <div>
            <div
                className='space-y-[20px]'
            >
                <p
                    className='mb-[50px] text-lg min-h-[30px]'
                >
                    <MetrixAnimationText
                        text='San Francisco, CA 10:24 AM'
                        onetime={true}
                    />
                </p>
                <div
                    className='flex items-center gap-[10px]'
                >
                    <div
                        className='w-[6px] h-[6px] rounded-full bg-primary-theme'
                    ></div>
                    <p
                        className='text-foreground/50 text-base font-medium'
                    >Introduction</p>
                </div>
                <h1
                    className='text-[50px] font-medium leading-[55px] max-w-[580px] min-h-[110px]'
                >
                    <MetrixAnimationText
                        text='Making Your World a Pain Free Experience'
                        onetime={true}
                    />
                </h1>

                <p
                    className='max-w-[460px]'
                >
                    My passion lies in crafting elegant, straightforward digital experiences.
                    It&apos;s a love for simplicity, pure and simple
                </p>
            </div>

            <div
                className='mt-[100px] space-y-[40px]'
            >

                <div
                    className='flex flex-wrap gap-[15px] max-w-[600px]'
                >
                    {
                        [
                            "Branding",
                            "Art Direction",
                            "UI Design",
                            "Webflow Development",
                        ]
                            .map((item, index) => (
                                <p
                                    key={index}
                                    className='max-w-max px-[30px] py-[10px] bg-foreground/5 font-medium rounded-md cursor-pointer hover:bg-foreground hover:text-background shadow'
                                >{item}</p>
                            ))
                    }
                </div>

                <div
                    className='flex items-start gap-[15px] flex-col md:flex-row'
                >
                    {
                        [
                            {
                                label: "Net Worth Gross",
                                number: 20,
                                suffix: "M+",
                            },
                            {
                                label: "Success Rate",
                                number: 98,
                                suffix: "%",
                            }
                        ]
                            .map((item, index) => (
                                <div
                                    key={index}
                                    className='w-full space-y-[30px] bg-foreground/5 rounded-md py-[30px] px-[40px] shadow'
                                >
                                    <div
                                        className='flex items-center gap-[15px]'
                                    >
                                        <div
                                            className='w-[6px] h-[6px] rounded-full bg-primary-theme'
                                        ></div>
                                        <p
                                            className='text-lg font-medium'
                                        >{item.label}</p>
                                    </div>

                                    <div>
                                        <p
                                            className='text-7xl text-right font-extralight'
                                        >
                                            <CounterText
                                                endValue={item.number}
                                            />
                                            {item.suffix}
                                        </p>
                                    </div>

                                </div>
                            ))
                    }
                </div>

            </div>
        </div>
    )
}

export default HeroSection