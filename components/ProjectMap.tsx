'use client'

import Link from 'next/link'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import { Modal } from 'flowbite-react'
import business_card_scrin from '/src/img/business_card_scrin.jpg'
import polina_site_scrin from '/src/img/polina_site_scrin.png'
import english_course_scrin from '/src/img/english_course_scrin.jpg'
import expense_tracker_scrin from '/src/img/expense_tracker_scrin.jpg'
import evil_calculator_scrin from '/src/img/evil_calculator_scrin.jpg'
import weather_scrin from '/src/img/weather_scrin.jpg'
import todo_scrin from '/src/img/todo_scrin.jpg'
import online_store_scrin from '/src/img/online_store_scrin.jpg'

const ALL_PROJECTS_TEXT = [
    {
        id: 1,
        h2text: 'Сайт школы английского языка',
        p2text: 'Вы можете выбрать себе преподавателя и начать изучать английский язык',
        litext: ['JS ES6+', 'SASS', 'Laravel Mix'],
        githubUrl: 'https://github.com/dorogan1510/englishSchoolSite',
        externalUrl: 'https://pollyglotiki.com/',
        image: polina_site_scrin,
    },
    {
        id: 2,
        h2text: 'Сайт визитка',
        p2text: 'Лендинг для преподавателя иностранных языков. CSS анимации, адаптивная верстка, вся важная информация на одной странице',
        litext: ['JS ES6+', 'SASS', 'Laravel Mix', 'CSS animations'],
        githubUrl: 'https://github.com/dorogan1510/web_card',
        externalUrl: 'https://easyenglishyou.ru/morkoovochka',
        image: business_card_scrin,
    },
    {
        id: 3,
        h2text: 'Сайт для продажи курса английского языка',
        p2text: 'Коммерческий лендинг для продажи онлайн курса. Адаптивная и кроссбраузерная верстка.',
        litext: ['JS ES6+', 'SASS', 'Laravel Mix'],
        githubUrl: 'https://github.com/dorogan1510/English_course',
        externalUrl: 'https://easyenglishyou.ru/',
        image: english_course_scrin,
    },
    {
        id: 4,
        h2text: 'Приложение для учета финансов',
        p2text: 'Ты всегда будешь оставаться в курсе своих ежедневных трат',
        litext: [
            'React.js/Redux toolkit',
            'Typescript',
            'Material UI',
            'Framer motion',
            'Chart.js',
        ],
        githubUrl: 'https://github.com/dorogan1510/react_ts_expense_tracker',
        externalUrl: 'https://clever-kleicha-fffcdd.netlify.app/',
        image: expense_tracker_scrin,
    },
    {
        id: 5,
        h2text: 'Злой калькулятор',
        p2text: 'Мини игра, где тебе придется пройти небольшой квест, сыграть в игру "Виселица" и наконец получить свой ответ',
        litext: ['React.js', 'React-Bootstrap/SASS', 'useSound'],
        githubUrl: 'https://github.com/dorogan1510/evil_calculator',
        externalUrl: 'https://enchanting-eclair-59989f.netlify.app/',
        image: evil_calculator_scrin,
    },
    {
        id: 6,
        h2text: 'Виджет погоды',
        p2text: 'Узнай погоду в любой точке мира и посмотри лучшие фото того места, которое ты ввел.',
        litext: ['JS ES6+', 'SASS', 'Laravel Mix', 'Fetch API'],
        githubUrl: 'https://github.com/dorogan1510/weather',
        externalUrl: 'https://dorogan1510.github.io/weather/',
        image: weather_scrin,
    },
    {
        id: 7,
        h2text: 'Список задач',
        p2text: 'Минималистичный список задач с базовым фукционалом и плавными анимациями',
        litext: ['React.js', 'Typescript', 'React transition group'],
        githubUrl: 'https://github.com/dorogan1510/React_todoList',
        externalUrl: 'https://gorgeous-quokka-121d0f.netlify.app/',
        image: todo_scrin,
    },
    {
        id: 8,
        h2text: 'Онлайн магазин в тестовом режиме',
        p2text: 'Онлайн магазин с фейковым API и базовым функционалом.',
        litext: ['React.js/Mobx', 'MaterialUI/SASS', 'Axios/Fuse.js'],
        githubUrl: 'https://github.com/dorogan1510/New_online_store',
        externalUrl: 'https://vocal-donut-4e3013.netlify.app/',
        image: online_store_scrin,
    },
]

const ProjectMap = () => {
    const [visible, setVisible] = useState(false)
    const [modalData, setModalData] = useState<any>(ALL_PROJECTS_TEXT[1])

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
                                        (dataLi: any, index: any) => (
                                            <li key={index}>{dataLi}</li>
                                        )
                                    )}
                                </ul>

                                <div className='flex flex-row justify-start gap-2'>
                                    <Link
                                        href={modalData.githubUrl}
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
