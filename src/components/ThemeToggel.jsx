import React from 'react'
import { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';
import { cn } from '../lib/util';



export const ThemeToggel = () => {
    const [isDarkmode, setIsDarkmode] = useState(false);
    useEffect(() => {
        const theme = localStorage.getItem('theme');
        if (theme === 'dark') {
            setIsDarkmode(true);
            document.documentElement.classList.add('dark');
        } else {

            localStorage.setItem('theme', 'light');
            setIsDarkmode(false);
        }
    }, []);

    const toggleTheme = () => {
        if (isDarkmode) {
            setIsDarkmode(false);
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
            setIsDarkmode(false);
        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
            setIsDarkmode(true);
        }
    }


    return <button onClick={toggleTheme} className={cn("fixed max-sm:hidden top-5 right-5 z-50 o-2 rounded-full transition-color duration-300",
        "focus:outline-hidden"
    )}>{isDarkmode ? <Sun className='h-6 w-6 text-yellow-300' /> : <Moon className='h-6 w-6 text-blue-900' />}</button>

}