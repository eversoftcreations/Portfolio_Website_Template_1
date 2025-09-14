'use client';

import { RemixiconComponentType } from "@remixicon/react";
import { Dispatch, SetStateAction } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export interface ServiceAccordionItemInterface {
    icon: RemixiconComponentType,
    title: string,
    points: string[],
}

export default function ServicesAccordionItem({
    data, 
    isOpen, 
    setIsOpen, 
    index,
}: {
    data: ServiceAccordionItemInterface,
    isOpen: {[key: number]: boolean},
    setIsOpen: Dispatch<SetStateAction<{ [key: number]: boolean }>>,
    index: number,
}) {

    return (
        <div>
            <button
                className={cn(
                    "flex items-center justify-center gap-[20px] cursor-pointer",
                    !isOpen[index] ? "opacity-30" : ""
                )}
                onClick={() => setIsOpen(prev => ({
                    [index]: prev[index] === true ? false : true,
                }))}
            >
                {
                    isOpen[index] &&
                    <motion.div
                        className="min-w-[60px] min-h-[60px] flex items-center justify-center rounded-md bg-gradient-to-r from-primary-theme to-primary-theme/30"
                        initial={{
                            scale: 0,
                        }}
                        animate={{
                            scale: 1,
                        }}
                    >
                        <data.icon
                            size={30}
                        />
                    </motion.div>
                }
                <p
                    className="text-[27px] md:text-5xl"
                >{data.title}</p>
            </button>
            {
                isOpen[index] &&
                <motion.div
                    className="pt-[30px]"
                    initial={{
                        x: 200,
                    }}
                    animate={{
                        x: 0,
                    }}
                >
                    <div>
                        <ul
                            className="list-disc pl-[35px]"
                        >
                            {
                                data.points.map((point, index) => (
                                    <li
                                        key={index}
                                        className="marker:text-[14px] text-[20px] md:text-[25px] opacity-80"
                                    >{point}</li>
                                ))
                            }
                        </ul>
                    </div>
                </motion.div>
            }
        </div>
    )
}