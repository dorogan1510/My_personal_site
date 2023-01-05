import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Button, Modal, Navbar } from 'flowbite-react'
import Image from 'next/image'
import me_icon from '../src/img/me_icon.jpg'
import { usePathname } from 'next/navigation'
import { useTheme } from 'next-themes'

const Header = () => {
    const [visible, setVisible] = useState(false)

    const [mounted, setMounted] = useState(false)
    const { theme, setTheme } = useTheme()

    const pathname = usePathname()

    useEffect(() => {
        if (theme === 'dark') setMounted(true)
    }, [])

    return (
        <header className=' mb-10 lg:mb-32 relative flex gap-2 items-center rounded-3xl '>
            <Navbar.Brand href='/' color='gray' className=' flex flex-1 '>
                {/* <Image
                    className='rounded-3xl'
                    src={me_icon}
                    alt='Picture of the author'
                    width={50}
                    height={50}
                    priority={true}
                /> */}
            </Navbar.Brand>
            <Navbar className='hidden md:block rounded-3xl text-center font-medium justify-end dark:bg-transparent border'>
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
                    <Navbar.Link
                        href='/portfolio'
                        active={pathname == '/portfolio' ? true : false}
                        className='transition'
                    >
                        Портфолио
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
                <Modal.Header className=' bg-white p-8 ring-1 ring-zinc-900/5 dark:bg-zinc-900 dark:ring-zinc-800  '>
                    Меню
                </Modal.Header>
                <Modal.Body className=' bg-white p-8 ring-1 ring-zinc-900/5 dark:bg-zinc-900 dark:ring-zinc-800'>
                    <div className='space-y-6 flex flex-col '>
                        <div className='block py-2 pr-4 pl-3 md:p-0 border-b   text-gray-700 hover:bg-gray-50 border-zinc-200 dark:border-zinc-700/40 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-white'>
                            <Link href={'/'} onClick={() => setVisible(false)}>
                                Главная
                            </Link>
                        </div>
                        <div className='block py-2 pr-4 pl-3 md:p-0 border-b   text-gray-700 hover:bg-gray-50 border-zinc-200 dark:border-zinc-700/40 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-white'>
                            <Link
                                href={'/about'}
                                onClick={() => setVisible(false)}
                            >
                                Обо мне
                            </Link>
                        </div>
                        <div className='block py-2 pr-4 pl-3 md:p-0 border-b   text-gray-700 hover:bg-gray-50 border-zinc-200 dark:border-zinc-700/40 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-white'>
                            <Link
                                href={'/price'}
                                onClick={() => setVisible(false)}
                            >
                                Цены
                            </Link>
                        </div>
                        <div className='block py-2 pr-4 pl-3 md:p-0 border-b   text-gray-700 hover:bg-gray-50 border-zinc-200 dark:border-zinc-700/40 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-white'>
                            <Link
                                href={'/portfolio'}
                                onClick={() => setVisible(false)}
                            >
                                Портфолио
                            </Link>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>

            <div className=' flex md:flex-1 justify-end'>
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
        </header>
    )
}

export default Header
