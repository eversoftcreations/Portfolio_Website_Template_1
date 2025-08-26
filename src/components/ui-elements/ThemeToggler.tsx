'use client';

import { cn } from "@/lib/utils";
import { RiMoonLine, RiSunLine } from "@remixicon/react";
import { useEffect, useState } from "react";

const ThemeToggler = () => {

    const options = [RiSunLine, RiMoonLine];
    const [isDark, setIsDark] = useState<boolean>(false);

    useEffect(() => {
        const bodyClassList = window.document.body.classList;
        const isDarkMode = bodyClassList.contains("dark");
        setIsDark(isDarkMode);

        const currentTheme = localStorage.getItem("theme");

        if (currentTheme) {
            const isDarkMode = currentTheme === "dark" ? true : false;
            const bodyElement = document.querySelector("body");
            
            if (isDarkMode) {
                bodyElement?.classList.add("dark");
                setIsDark(true);
            }
        }

    }, [])

    function handleChangeTheme () {
        const bodyClassList = window.document.body.classList;
        const isDarkMode = bodyClassList.contains("dark");

        const bodyElement = document.querySelector("body");

        if (!bodyElement) return;

        if (isDarkMode) {
            bodyElement.classList.remove("dark");
        } else {
            bodyElement.classList.add("dark");
        }

        setIsDark(!isDarkMode)

        const currentMode = !isDarkMode ? "dark" : "light";

        localStorage.setItem("theme", currentMode);

    }

    return (
        <button
            className="flex flex-col bg-background-1 p-[5px] relative rounded-full cursor-pointer border"
            onClick={handleChangeTheme}
        >
            <div
                className={cn(
                    "w-[30px] h-[30px] rounded-full bg-foreground absolute transition-all duration-300",
                    isDark ? "bottom-[5px] right-[5px]" : "top-[5px] right-[5px]"
                )}
            ></div>
            {
                options.map((Option, index) => (
                    <div
                        className={cn(
                            "w-[30px] h-[30px] flex justify-center items-center z-10",
                            isDark ? index === 1 ? "text-background" : "" : index === 0 ? "text-background" : ""
                        )}
                        key={index}
                    >
                        <Option
                            size={12}
                        />
                    </div>
                ))
            }
        </button>
    )
}

export default ThemeToggler