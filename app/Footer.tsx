import React from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

const Footer = () => {
    return (
        <footer className='mt-10 lg:mt-32'>
            <hr className='border-zinc-200  dark:border-zinc-700/40' />

            <div className=' mt-10  flex flex-col gap-4 sm:flex-row justify-between items-center bg-white dark:bg-[#18181B]'>
                <ul className='flex flex-wrap gap-8 items-center  text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0'>
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
                    © 2023 Danila Frolov. All rights reserved.
                </span>
            </div>
        </footer>
    )
}

export default Footer
