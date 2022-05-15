import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'

// prettier-ignore
const sunIcon = (
  <svg xmlns='http://www.w3.org/2000/svg' width='25' height='24' fill='none' viewBox='0 0 25 24' className='dark:opacity-50'>
    <g stroke='#fff' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' clipPath='url(#clip0_192_823)' ><path d='M12.5 17a5 5 0 100-10 5 5 0 000 10zM12.5 1v2M12.5 21v2M4.72 4.22l1.42 1.42M18.86 18.36l1.42 1.42M1.5 12h2M21.5 12h2M4.72 19.78l1.42-1.42M18.86 5.64l1.42-1.42'/></g>
    <defs><clipPath id='clip0_192_823'><path className='fill-current text-white' d='M0 0H24V24H0z' transform='translate(.5)'/></clipPath></defs>
  </svg>
)

// prettier-ignore
const moonIcon = (
  <svg xmlns='http://www.w3.org/2000/svg' width='21' height='20' fill='none' viewBox='0 0 21 20' >
    <path stroke='#fff' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' className='stroke-current text-gray-400 dark:text-white' d='M19.5 10.79A9 9 0 119.71 1a7 7 0 009.79 9.79v0z' />
  </svg>
)

function ThemeSwitcher() {
  const { theme, setTheme } = useTheme()
  useEffect(() => {
    if (theme === 'dark') document.documentElement.classList.add('dark')
    else document.documentElement.classList.remove('dark')
    localStorage.setItem('theme', theme)
  })

  return (
    <div className='flex mt-6 bg-white justify-center dark:bg-gray-900 rounded-3xl p-1'>
      {/* prettier-ignore */}
      <button
        aria-label='Use Dark Mode'
        onClick={()=>{setTheme('dark')}}
        className='flex items-center pr-2 dark:bg-primary rounded-3xl justify-center align-center p-2 w-24 h-10 transition'
      >{moonIcon}</button>
      {/* prettier-ignore */}
      <button
        aria-label='Use Light Mode'
        onClick={()=>{setTheme('light')}}
        className='flex items-center pr-2 bg-primary dark:bg-transparent rounded-3xl justify-center align-center p-2 w-24 h-10 transition'
      >{sunIcon}</button>
    </div>
  )
}

export default function Footer() {
  const text = process.env.BLOG_FOOTER_TEXT
  const footerText = text ? decodeURI(text) : 'All rights reserved. @DegenDragonz | IMPORTANT: Projects listed above are not endorsed or verified by Solnftdrops.com. Always make sure to do your own research before investing. Use a "burner" wallet for all the Mints (some Mints might be created by bad actors).'

  return (
    <footer className='pt-16 pb-24 flex flex-col items-center'>
      <p className='dark:text-white uppercase mb-3 font-bold opacity-60'>
        {footerText}
      </p>
      <ThemeSwitcher />
    </footer>
  )
}
