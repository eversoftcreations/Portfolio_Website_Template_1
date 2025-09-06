import ColorBullet from '@/components/ui-elements/ColorBullet'
import CounterText from '@/components/ui-elements/CounterText'
import MetrixAnimationText from '@/components/ui-elements/TextMetrix'
import { cn } from '@/lib/utils'
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

                <ColorBullet text='Introduction' />

                <h1
                    className='text-[40px] md:text-[50px] font-medium leading-[55px] max-w-[580px] min-h-[110px]'
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

            <div
                className='mt-[100px] space-y-[30px]'
            >
                <div>

                    <div>
                        <ColorBullet text='Experiences' />
                    </div>

                    <div
                        className='mt-[-30px]'
                    >
                        <h2
                            className='flex flex-wrap gap-[10px] text-[45px] leading-[55px]'
                        >
                            {
                                "I will offers more than just a place to live it’s a space designed to reflect your unique style inspiration"
                                    .split(" ").map((word, index) => (
                                        <span
                                            key={index}
                                            className={cn(
                                                index === 0 && "ml-[200px]"
                                            )}
                                        >{word}</span>
                                    ))
                            }
                        </h2>
                    </div>

                </div>

                <div>
                    {
                        [
                            {
                                subTitle: "Drake",
                                title: "Product Designer",
                                year: "2022 - Present",
                            },
                            {
                                subTitle: "Minus",
                                title: "Product Designer",
                                year: "2021 - 2022",
                            },
                            {
                                subTitle: "Avox Studio",
                                title: "Product Designer",
                                year: "2020 - 2021",
                            },
                        ]
                        .map((item, index) => (
                            <div
                                key={index}
                                className='flex items-center w-full justify-between py-[25px] border-b hover:border-primary-theme px-[30px] hover:bg-background-1/30 transition-all'
                            >
                                <div>
                                    <p
                                        className='text-xl opacity-60'
                                    >{item.subTitle}</p>
                                    <p
                                        className='text-xl font-semibold'
                                    >{item.title}</p>
                                </div>
                                <div>
                                    <p
                                        className='py-[6px] px-[20px] bg-background-1 rounded-full'
                                    >{item.year}</p>
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