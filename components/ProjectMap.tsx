'use client'

import { Modal } from 'flowbite-react'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'
import business_card_screen from '/src/img/business_card_screen.webp'
import child_club_screen from '/src/img/child_club_screen.webp'
import english_course_screen from '/src/img/english_course_screen.webp'
import evil_calculator_screen from '/src/img/evil_calculator_screen.webp'
import expense_tracker_screen from '/src/img/expense_tracker_screen.webp'
import online_store_screen from '/src/img/online_store_screen.webp'
import polina_site_screen from '/src/img/polina_site_screen.webp'
import todo_screen from '/src/img/todo_screen.webp'
import weather_screen from '/src/img/weather_screen.webp'

interface IALL_PROJECTS_TEXT {
    id: number
    h2text: string
    p2text: string
    litext: Array<string>
    externalUrl: string
    image: StaticImageData
}

const ALL_PROJECTS_TEXT: IALL_PROJECTS_TEXT[] = [
    {
        id: 9,
        h2text: 'Сайт детского футбольного клуба',
        p2text: 'Лендинг детского футбольного клуба из Самарской области.',
        litext: ['Next.js 13', 'Typescript', 'MaterialUI'],
        externalUrl: 'https://www.dfk-bezenchuk.ru/',
        image: child_club_screen,
    },
    {
        id: 1,
        h2text: 'Сайт школы английского языка',
        p2text: 'Лендинг школы английского языка, где вы можете выбрать себе преподавателя и начать изучать английский язык.',
        litext: ['JS ES6+', 'SASS', 'Laravel Mix'],

        externalUrl: 'https://pollyglotiki.com/',
        image: polina_site_screen,
    },
    {
        id: 2,
        h2text: 'Сайт визитка',
        p2text: 'Лендинг для преподавателя иностранных языков. CSS анимации, адаптивная верстка, вся информация на одной странице.',
        litext: ['JS ES6+', 'SASS', 'Laravel Mix', 'CSS animations'],

        externalUrl: 'https://easyenglishyou.ru/morkoovochka',
        image: business_card_screen,
    },
    {
        id: 3,
        h2text: 'Сайт для продажи курса английского языка',
        p2text: 'Коммерческий лендинг для продажи онлайн курса английского языка.',
        litext: ['JS ES6+', 'SASS', 'Laravel Mix'],
        externalUrl: 'https://easyenglishyou.ru/',
        image: english_course_screen,
    },
    {
        id: 4,
        h2text: 'Приложение для учета финансов',
        p2text: 'Присутствует базовый функционал и статистика по вашим тратам.',
        litext: [
            'React.js/Redux toolkit',
            'Typescript',
            'Material UI',
            'Framer motion',
            'Chart.js',
        ],
        externalUrl: 'https://clever-kleicha-fffcdd.netlify.app/',
        image: expense_tracker_screen,
    },
    {
        id: 5,
        h2text: 'Злой калькулятор',
        p2text: 'Мини игра, где вам придется пройти небольшой квест, сыграть в "Виселицу" и наконец получить свой ответ.',
        litext: ['React.js', 'React-Bootstrap/SASS', 'useSound'],
        externalUrl: 'https://enchanting-eclair-59989f.netlify.app/',
        image: evil_calculator_screen,
    },
    {
        id: 6,
        h2text: 'Виджет погоды',
        p2text: 'Узнайте погоду в любой точке мира и наслаждайтесь лучшими фото этого места.',
        litext: ['JS ES6+', 'SASS', 'Laravel Mix', 'Fetch API'],
        externalUrl: 'https://dorogan1510.github.io/weather/',
        image: weather_screen,
    },
    {
        id: 7,
        h2text: 'Список задач',
        p2text: 'Минималистичный список задач с базовым фукционалом и плавными анимациями.',
        litext: ['React.js', 'Typescript', 'React transition group'],
        externalUrl: 'https://gorgeous-quokka-121d0f.netlify.app/',
        image: todo_screen,
    },
    {
        id: 8,
        h2text: 'Онлайн магазин в тестовом режиме',
        p2text: 'Онлайн магазин с фейковым API и базовым функционалом.',
        litext: ['React.js/Mobx', 'MaterialUI/SASS', 'Axios/Fuse.js'],
        externalUrl: 'https://vocal-donut-4e3013.netlify.app/',
        image: online_store_screen,
    },
]

const ProjectMap = () => {
    const [visible, setVisible] = useState<boolean>(false)
    const [modalData, setModalData] = useState<IALL_PROJECTS_TEXT>(
        ALL_PROJECTS_TEXT[0]
    )

    const modalRef = useRef() as React.MutableRefObject<HTMLDivElement>

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
        <>
            {ALL_PROJECTS_TEXT.map(data => (
                <div
                    key={data.id}
                    className='p-4 lg:bg-zinc-100 lg:bg-opacity-0 transition duration-300 lg:hover:bg-opacity-100 lg:dark:bg-zinc-800 lg:dark:bg-opacity-0 lg:dark:hover:bg-opacity-100 sm:rounded-2xl flex flex-col items-center'
                >
                    <button
                        onClick={() => {
                            setVisible(true)
                            setModalData(data)
                        }}
                        color='gray'
                        className=' transition'
                    >
                        <div className='flex justify-center  '>
                            <section className='flex flex-col items-center'>
                                <Image
                                    src={data.image}
                                    alt={'image'}
                                    width={250}
                                    height={250}
                                    className='mb-2 rounded-xl'
                                    priority={true}
                                />

                                <h2 className='font-medium mb-2  text-zinc-800 dark:text-zinc-100 text-center '>
                                    {data.h2text}
                                </h2>
                                <p className='text-base text-zinc-500 text[#8b8b94] dark:text-zinc-400 text-center '>
                                    {data.p2text}
                                </p>
                            </section>
                        </div>
                    </button>
                </div>
            ))}

            <Modal
                show={visible}
                position='center'
                size='5xl'
                className='bg-black h-screen '
            >
                <Modal.Body className=' rounded-xl bg-white p-8 ring-1 ring-zinc-900/5 dark:bg-zinc-900 dark:ring-zinc-800'>
                    <div ref={modalRef}>
                        <div className='mb-4 flex flex-row justify-between '>
                            <div></div>
                            <button
                                className='group'
                                onClick={() => setVisible(false)}
                            >
                                <svg
                                    className='fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300'
                                    aria-hidden='true'
                                    fill='currentColor'
                                    viewBox='0 0 24 24'
                                    xmlns='http://www.w3.org/2000/svg'
                                    width='30'
                                    height='30'
                                >
                                    <path
                                        clipRule='evenodd'
                                        d='M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z'
                                        fillRule='evenodd'
                                    ></path>
                                </svg>
                            </button>
                        </div>

                        <div className='flex flex-col md:flex-row justify-between gap-2'>
                            <div>
                                <h2 className=' mb-4 font-medium   text-zinc-800 dark:text-zinc-100'>
                                    {modalData.h2text}
                                </h2>
                                <p className='max-w-sm mb-6 text-base text-zinc-500 text[#8b8b94] dark:text-zinc-400'>
                                    {modalData.p2text}
                                </p>
                                <ul className='space-y-2 list-disc list-inside mb-10 text-base text-zinc-500 text[#8b8b94] dark:text-zinc-400'>
                                    {modalData.litext.map(
                                        (dataLi: string, index: number) => (
                                            <li key={index}>{dataLi}</li>
                                        )
                                    )}
                                </ul>

                                <div className='flex flex-row justify-start gap-2'>
                                    <Link
                                        href={modalData.externalUrl}
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
                                className='mb-4 order-first md:order-last md:mb-0 rounded-xl  '
                                href={modalData.externalUrl}
                                target='_blank'
                            >
                                <Image
                                    className='rounded-xl'
                                    src={modalData.image}
                                    alt={'...'}
                                    width={500}
                                    height={500}
                                    priority={true}
                                ></Image>
                            </Link>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default ProjectMap
