'use client'

import { Button, Modal, Navbar } from 'flowbite-react'
import { useTheme } from 'next-themes'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect, useRef, useState } from 'react'

const Header = () => {
    const [visible, setVisible] = useState(false)

    const [mounted, setMounted] = useState(false)
    const { theme, setTheme } = useTheme()

    const modalRef = useRef() as React.MutableRefObject<HTMLDivElement>
    const pathname = usePathname()

    useEffect(() => {
        if (theme === 'dark') setMounted(true)
    }, [theme])

    useEffect(() => {
        const checkIfClickedOutside = (e: MouseEvent) => {
            if (modalRef.current !== undefined) {
                if (visible && !modalRef.current.contains(e.target as Node)) {
                    setVisible(false)
                }
            }
        }
        document.addEventListener('mousedown', checkIfClickedOutside)
        return () => {
            document.removeEventListener('mousedown', checkIfClickedOutside)
        }
    }, [visible])

    return (
        <header className='px-6 sm:px-20 w-full sm:w-11/12 max-w-6xl mx-auto  lg:mb-32 relative flex gap-2 items-center justify-end md:justify-between  rounded-3xl '>
            <div className='flex-1'></div>
            <Navbar className='hidden md:flex rounded-3xl text-center  font-medium  justify-end dark:bg-transparent border'>
                <Navbar.Collapse className='mx-auto flex justify-end '>
                    <Navbar.Link
                        href='/'
                        active={pathname == '/' ? true : false}
                        className='transition'
                    >
                        Главная
                    </Navbar.Link>
                    <Navbar.Link
                        href='/about'
                        active={pathname == '/about' ? true : false}
                        className='transition'
                    >
                        Обо мне
                    </Navbar.Link>
                    <Navbar.Link
                        href='/price'
                        active={pathname == '/price' ? true : false}
                        className='transition'
                    >
                        Цены
                    </Navbar.Link>
                </Navbar.Collapse>
            </Navbar>
            <Button
                onClick={() => setVisible(true)}
                color='gray'
                className='md:hidden transition'
                pill={true}
            >
                Меню
                <svg
                    className='w-4 h-4 ml-2'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                    xmlns='http://www.w3.org/2000/svg'
                >
                    <path
                        fillRule='evenodd'
                        d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
                        clipRule='evenodd'
                    />
                </svg>
            </Button>

            <Modal
                show={visible}
                size='sm'
                onClose={() => setVisible(false)}
                className='bg-black h-screen '
            >
                <Modal.Body className='rounded-xl bg-white p-8 ring-1 ring-zinc-900/5 dark:bg-zinc-900 dark:ring-zinc-800'>
                    <div
                        ref={modalRef}
                        className='text-center space-y-6 flex flex-col '
                    >
                        <Link href={'/'} onClick={() => setVisible(false)}>
                            <div className='block py-2 pr-4 pl-3 md:p-0 border-b   text-gray-700 hover:bg-gray-50 border-zinc-200 dark:border-zinc-700/40 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-white'>
                                Главная
                            </div>
                        </Link>
                        <Link href={'/about'} onClick={() => setVisible(false)}>
                            <div className='block py-2 pr-4 pl-3 md:p-0 border-b   text-gray-700 hover:bg-gray-50 border-zinc-200 dark:border-zinc-700/40 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-white'>
                                Обо мне
                            </div>
                        </Link>
                        <Link href={'/price'} onClick={() => setVisible(false)}>
                            <div className='block py-2 pr-4 pl-3 md:p-0 border-b   text-gray-700 hover:bg-gray-50 border-zinc-200 dark:border-zinc-700/40 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-white'>
                                Цены
                            </div>
                        </Link>
                    </div>
                </Modal.Body>
            </Modal>
            <div className='flex flex-row  md:flex-1 justify-end gap-2'>
                <div className=' flex  justify-end'>
                    <button
                        onClick={() => {
                            setTheme(theme === 'dark' ? 'light' : 'dark')
                            setMounted(mounted ? false : true)
                        }}
                    >
                        <svg
                            className='w-7 h-7 transition hover:stroke-zinc-600 dark:hover:stroke-zinc-300'
                            fill='none'
                            stroke='#989fab'
                            viewBox='0 0 24 24'
                            xmlns='http://www.w3.org/2000/svg'
                        >
                            <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth='2'
                                d='M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z'
                            ></path>
                        </svg>
                    </button>
                </div>
            </div>
        </header>
    )
}

export default Header
