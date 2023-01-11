import React from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

const Footer = () => {
    return (
        <footer className='px-6 sm:px-20 w-full sm:w-11/12 max-w-6xl mx-auto '>
            <hr className='border-zinc-200  dark:border-zinc-700/40' />

            <div className=' mt-10  flex flex-col gap-4 justify-between items-center bg-white dark:bg-[#18181B]'>
                <div className='flex flex-row justify-center   gap-2'>
                    <Link
                        href={'https://t.me/danfrolov94'}
                        className='group'
                        target='_blank'
                    >
                        <svg
                            className='fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300'
                            xmlns='http://www.w3.org/2000/svg'
                            width='30'
                            height='30'
                            viewBox='0 0 256 256'
                        >
                            <path
                                d='M25.154 3.984a2.718 2.718 0 0 0-.894.217c-.25.1-1.204.51-2.707 1.154-1.505.646-3.497 1.5-5.621 2.415-4.25 1.827-9.028 3.884-11.475 4.937-.092.04-.413.142-.754.408-.34.266-.703.818-.703 1.432 0 .495.236.987.533 1.281.297.294.612.44.881.549l4.58 1.873c.202.617 1.299 3.973 1.553 4.795.168.543.327.883.535 1.152.104.135.225.253.371.346.059.037.123.066.188.092l.004.002c.014.006.027.016.043.021.028.01.047.011.085.02.153.049.307.08.444.08.585 0 .943-.322.943-.322l.022-.016 3.01-2.604 3.65 3.454c.051.072.53.73 1.588.73.627 0 1.125-.315 1.445-.65.32-.336.519-.688.604-1.131v-.002c.079-.419 3.443-17.69 3.443-17.69l-.006.024c.099-.45.124-.868.016-1.281a1.747 1.747 0 0 0-.75-1.022 1.798 1.798 0 0 0-1.028-.264zm-.187 2.09c-.005.03.003.015-.004.05l-.002.01-.002.012s-3.323 17.05-3.445 17.7c.009-.05-.032.048-.075.107-.06-.04-.181-.094-.181-.094l-.02-.021-4.986-4.717-3.525 3.047 1.048-4.2s6.557-6.786 6.952-7.18c.318-.317.384-.427.384-.536 0-.146-.076-.252-.246-.252-.153 0-.358.149-.468.219-1.434.913-7.725 4.58-10.545 6.22-.449-.183-3.562-1.458-4.618-1.888l.014-.006 11.473-4.938 5.62-2.414c1.48-.634 2.51-1.071 2.626-1.119z'
                                transform='scale(8.53333)'
                            />
                        </svg>
                    </Link>
                    <Link
                        href={'https://www.instagram.com/danfrolov_it/'}
                        className='group'
                        target='_blank'
                    >
                        <svg
                            className='fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300'
                            xmlns='http://www.w3.org/2000/svg'
                            width='30'
                            height='30'
                            viewBox='0 0 30 30'
                        >
                            <path d='M15 11a4 4 0 1 0 0 8 4 4 0 1 0 0-8Z' />
                            <path d='M19.999 3h-10C6.14 3 3 6.141 3 10.001v10C3 23.86 6.141 27 10.001 27h10C23.86 27 27 23.859 27 19.999v-10C27 6.14 23.859 3 19.999 3zM15 21c-3.309 0-6-2.691-6-6s2.691-6 6-6 6 2.691 6 6-2.691 6-6 6zm7-12a1 1 0 1 1 0-2 1 1 0 0 1 0 2z' />
                        </svg>
                    </Link>
                    <Link
                        href={'https://api.whatsapp.com/send?phone=79093817368'}
                        className='group'
                        target='_blank'
                    >
                        <svg
                            className='fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300'
                            xmlns='http://www.w3.org/2000/svg'
                            width='30'
                            height='30'
                            viewBox='0 0 30 30'
                        >
                            <path d='M4.796 20.836 3.107 27l6.308-1.656z' />
                            <path d='M15 3C8.373 3 3 8.373 3 15s5.373 12 12 12 12-5.373 12-12S21.627 3 15 3zm5.924 16.143c-.247.693-1.461 1.363-2.005 1.41-.549.051-1.061.247-3.568-.74-3.024-1.191-4.931-4.289-5.08-4.489-.149-.195-1.21-1.61-1.21-3.07 0-1.465.768-2.182 1.037-2.48.274-.298.595-.372.795-.372.195 0 .395 0 .568.009.214.005.447.019.67.512.265.586.842 2.056.916 2.205.074.149.126.326.023.521-.098.2-.149.321-.293.498-.149.172-.312.386-.447.516-.149.149-.302.312-.13.609s.768 1.27 1.651 2.056c1.135 1.014 2.093 1.326 2.391 1.475s.47.126.642-.074c.177-.195.744-.865.944-1.163.195-.298.395-.247.665-.149.274.098 1.735.819 2.033.968s.493.223.568.344c.077.125.077.72-.17 1.414z' />
                        </svg>
                    </Link>
                    <Link
                        href={'https://github.com/dorogan1510'}
                        className='group'
                        target='_blank'
                    >
                        <svg
                            className='fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300'
                            xmlns='http://www.w3.org/2000/svg'
                            width='30'
                            height='30'
                            viewBox='0 0 30 30'
                        >
                            <path d='M15 3C8.373 3 3 8.373 3 15c0 5.623 3.872 10.328 9.092 11.63a1.751 1.751 0 0 1-.092-.583v-2.051h-1.508c-.821 0-1.551-.353-1.905-1.009-.393-.729-.461-1.844-1.435-2.526-.289-.227-.069-.486.264-.451.615.174 1.125.596 1.605 1.222.478.627.703.769 1.596.769.433 0 1.081-.025 1.691-.121.328-.833.895-1.6 1.588-1.962-3.996-.411-5.903-2.399-5.903-5.098 0-1.162.495-2.286 1.336-3.233-.276-.94-.623-2.857.106-3.587 1.798 0 2.885 1.166 3.146 1.481A8.993 8.993 0 0 1 15.495 9c1.036 0 2.024.174 2.922.483C18.675 9.17 19.763 8 21.565 8c.732.731.381 2.656.102 3.594.836.945 1.328 2.066 1.328 3.226 0 2.697-1.904 4.684-5.894 5.097C18.199 20.49 19 22.1 19 23.313v2.734c0 .104-.023.179-.035.268C23.641 24.676 27 20.236 27 15c0-6.627-5.373-12-12-12z' />
                        </svg>
                    </Link>

                    <Link
                        href={'https://www.linkedin.com/in/frolovdan/'}
                        className='group'
                        target='_blank'
                    >
                        <svg
                            className='fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300'
                            xmlns='http://www.w3.org/2000/svg'
                            width='30'
                            height='30'
                            viewBox='0 0 30 30'
                        >
                            <path d='M15 3C8.373 3 3 8.373 3 15s5.373 12 12 12 12-5.373 12-12S21.627 3 15 3zm-4.504 5.403c.842 0 1.403.561 1.403 1.309 0 .748-.561 1.309-1.496 1.309C9.561 11.022 9 10.46 9 9.712c0-.748.561-1.309 1.496-1.309zM12 20H9v-8h3v8zm10 0h-2.824v-4.372c0-1.209-.753-1.488-1.035-1.488s-1.224.186-1.224 1.488V20H14v-8h2.918v1.116c.376-.651 1.129-1.116 2.541-1.116S22 13.116 22 15.628V20z' />
                        </svg>
                    </Link>
                </div>
                <div className='flex flex-col  justify-between items-center gap-4'>
                    <ul className='flex flex-wrap justify-between gap-4  items-center  text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0'>
                        <li>
                            <Link
                                href='/'
                                className=' border-gray-100  text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white border-0 hover:bg-transparent hover:text-blue-700 dark:hover:bg-transparent transition'
                            >
                                Главная
                            </Link>
                        </li>
                        <li>
                            <Link
                                href='/about'
                                className=' border-gray-100  text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white border-0 hover:bg-transparent hover:text-blue-700 dark:hover:bg-transparent transition'
                            >
                                Обо мне
                            </Link>
                        </li>
                        <li>
                            <Link
                                href='/prices'
                                className=' border-gray-100  text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white border-0 hover:bg-transparent hover:text-blue-700 dark:hover:bg-transparent transition'
                            >
                                Цены
                            </Link>
                        </li>
                    </ul>

                    <span className='text-sm text-gray-500 sm:text-center dark:text-gray-400'>
                        © 2023 Danila Frolov
                    </span>
                </div>
            </div>
        </footer>
    )
}

export default Footer
