import Link from 'next/link'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import { Modal } from 'flowbite-react'

import polina_site_scrin from '/src/img/polina_site_scrin.png'

const Project1 = () => {
    const [visible, setVisible] = useState(false)

    const modalRef = useRef<any>()

    useEffect(() => {
        const checkIfClickedOutside = (e: MouseEvent) => {
            if (visible && !modalRef?.current?.contains(e.target)) {
                setVisible(false)
            }
        }
        document.addEventListener('mousedown', checkIfClickedOutside)
        return () => {
            document.removeEventListener('mousedown', checkIfClickedOutside)
        }
    }, [visible])

    //text variables
    const h2text = 'Website for English language school'
    const p2text =
        'You can choose your personal teacher and start to study english.'
    const litext1 = 'JS ES6+'
    const litext2 = 'SASS'
    const litext3 = 'Laravel Mix'

    //url variables
    const githubUrl = 'https://github.com/dorogan1510/englishSchoolSite'
    const externalUrl = 'https://pollyglotiki.com/'

    return (
        <div className='p-4 bg-zinc-100 bg-opacity-0 transition duration-300 hover:bg-opacity-100 dark:bg-zinc-800 dark:bg-opacity-0 dark:hover:bg-opacity-100 sm:rounded-2xl flex flex-col items-center'>
            <button
                onClick={() => setVisible(true)}
                color='gray'
                className=' transition'
            >
                <div className='flex justify-center  '>
                    <section className='flex flex-col items-center'>
                        <Image
                            src={polina_site_scrin}
                            alt={'image'}
                            width={250}
                            height={250}
                            className='mb-2 rounded-xl'
                        />

                        <h2 className='font-medium mb-2  text-zinc-800 dark:text-zinc-100 text-center '>
                            {h2text}
                        </h2>
                        <p className='text-base text-zinc-500 text[#8b8b94] dark:text-zinc-400 text-center '>
                            {p2text}
                        </p>
                    </section>
                </div>
            </button>

            <Modal
                show={visible}
                position='center'
                size='5xl'
                className='bg-black h-screen '
            >
                <Modal.Body className=' rounded-xl bg-white p-8 ring-1 ring-zinc-900/5 dark:bg-zinc-900 dark:ring-zinc-800'>
                    <div
                        ref={modalRef}
                        className='flex flex-col lg:flex-row justify-between gap-2'
                    >
                        <div>
                            <h2 className=' mb-4 font-medium   text-zinc-800 dark:text-zinc-100'>
                                {h2text}
                            </h2>
                            <p className='max-w-sm mb-6 text-base text-zinc-500 text[#8b8b94] dark:text-zinc-400'>
                                {p2text}
                            </p>
                            <ul className='space-y-2 list-disc list-inside mb-10 text-base text-zinc-500 text[#8b8b94] dark:text-zinc-400'>
                                <li>{litext1}</li>
                                <li>{litext2}</li>
                                <li>{litext3}</li>
                            </ul>
                            <div className='flex flex-row justify-start gap-2'>
                                <Link
                                    href={githubUrl}
                                    target='_blank'
                                    rel='noreferrer'
                                    className='group'
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
                                    href={externalUrl}
                                    target='_blank'
                                    rel='noreferrer'
                                    className='group'
                                >
                                    <svg
                                        className=' stroke-zinc-500 transition group-hover:stroke-zinc-600 dark:stroke-zinc-400 dark:group-hover:stroke-zinc-300'
                                        fill='none'
                                        stroke='currentColor'
                                        viewBox='0 0 24 24'
                                        width='30'
                                        height='30'
                                        xmlns='http://www.w3.org/2000/svg'
                                    >
                                        <path
                                            strokeLinecap='round'
                                            strokeLinejoin='round'
                                            strokeWidth={2}
                                            d='M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14'
                                        />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                        <Link
                            className='mb-4  lg:mb-0 rounded-xl order-first lg:order-last '
                            href={externalUrl}
                            target='_blank'
                        >
                            <Image
                                className='rounded-xl'
                                src={polina_site_scrin}
                                alt={'...'}
                                width={500}
                                height={500}
                            ></Image>
                        </Link>
                    </div>
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default Project1
