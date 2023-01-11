'use client'

import { Button, Modal } from 'flowbite-react'
import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'

const PriceSection = () => {
    const svgCheck = (
        <svg
            className='fill-green-500 transition '
            aria-hidden='true'
            fill='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
        >
            <path
                clipRule='evenodd'
                d='M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z'
                fillRule='evenodd'
            ></path>
        </svg>
    )
    const svgXMark = (
        <svg
            className='fill-red-600 transition '
            aria-hidden='true'
            fill='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
        >
            <path
                clipRule='evenodd'
                d='M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z'
                fillRule='evenodd'
            ></path>
        </svg>
    )

    const ALL_PRICES_TEXT_WITHOUT_DESIGN = [
        {
            id: 1,
            h2text: 'Лендинг с шаблонным дизайном',
            p2text: 'Данный вариант подойдет для того, кому нужен простой одностраничный сайт без уникального дизайна со всей информацией в одном месте.',
            h3text: 'Что включено',

            litext1: [
                'Адаптивный дизайн',
                'Настройка хостинга и домена',
                'Настройка безопасного SSL сертификата',
            ],

            litext2: [
                'Разработка индивидуального дизайна',
                'Эффекты и анимация',
                'Подключение оплаты через сайт',
            ],

            pricesum: '₽10000',
            termtext: 'Срок работы: от 3 дней',
            modalptext: '"Хочу заказать лендинг с шаблонным дизайном"',
        },
        {
            id: 2,
            h2text: 'Многостраничный сайт с шаблонным дизайном',
            p2text: 'Данный вариант подойдет если нужно, чтобы на сайте было больше, чем 2 страницы без уникального дизайна.',
            h3text: 'Что включено',

            litext1: [
                'Адаптивный дизайн',
                'Настройка хостинга и домена',
                'Настройка безопасного SSL сертификата',
            ],

            litext2: [
                'Разработка индивидуального дизайна',
                'Эффекты и анимация',
                'Подключение оплаты через сайт',
            ],

            pricesum: 'от ₽15000',
            termtext: 'Срок работы: от 7 дней',
            modalptext:
                '"Хочу заказать многостраничный сайт с шаблонным дизайном"',
        },
    ]
    const ALL_PRICES_TEXT_WITH_DESIGN = [
        {
            id: 1,
            h2text: 'Лендинг с уникальным дизайном',
            p2text: 'Данный вариант подойдет для того, кому нужен одностраничный сайт с авторским дизайном и всей информацией в одном месте.',
            h3text: 'Что включено',

            litext1: [
                'Адаптивный дизайн',
                'Настройка хостинга и домена',
                'Настройка безопасного SSL сертификата',
            ],

            litext2: [
                'Разработка индивидуального дизайна',
                'Эффекты и анимация',
                'Подключение оплаты через сайт',
            ],

            pricesum: '₽15000',
            termtext: 'Срок работы: от 7 дней',
            modalptext: '"Хочу заказать лендинг с уникальным дизайном"',
        },
        {
            id: 2,
            h2text: 'Многостраничный сайт с уникальным дизайном',
            p2text: 'Данный вариант подойдет если нужно, чтобы на сайте было больше, чем 2 страницы с уникальным дизайном.',
            h3text: 'Что включено',

            litext1: [
                'Адаптивный дизайн',
                'Настройка хостинга и домена',
                'Настройка безопасного SSL сертификата',
            ],

            litext2: [
                'Разработка индивидуального дизайна',
                'Эффекты и анимация',
                'Подключение оплаты через сайт',
            ],

            pricesum: 'от ₽25000',
            termtext: 'Срок работы: от 10 дней',
            modalptext:
                '"Хочу заказать многостраничный сайт с уникальным дизайном"',
        },
    ]

    const [visible, setVisible] = useState(false)
    const [modalDataWithoutDesign, setModalDataWithoutDesign] = useState<any>(
        ALL_PRICES_TEXT_WITHOUT_DESIGN[0]
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
            {ALL_PRICES_TEXT_WITHOUT_DESIGN.map(data => (
                <div
                    key={data.id}
                    className='p-6 rounded-xl border border-zinc-100 dark:border-zinc-700/40 flex flex-col lg:flex-row justify-between items-center gap-4 shadow dark:shadow-[0_1px_3px_0_rgba(255, 255, 255, 0.2)]'
                >
                    <div className='max-w-lg flex-2'>
                        <h2 className='text-xl lg:text-3xl font-bold text-zinc-800 dark:text-zinc-100'>
                            {data.h2text}
                        </h2>
                        <p className='my-6 text-base text-zinc-500 text[#8b8b94] dark:text-zinc-400'>
                            {data.p2text}
                        </p>
                        <div className='mb-4'>
                            <h3 className='mb-4 text-zinc-800 dark:text-zinc-100'>
                                {data.h3text}
                            </h3>
                            <div className='flex flex-col sm:flex-row flex-wrap justify-between items-start gap-4'>
                                <div>
                                    {data.litext1.map((litext1, index) => (
                                        <div
                                            key={index}
                                            className='flex flex-row justify-start items-center gap-2'
                                        >
                                            <div className='flex-2'>
                                                {svgCheck}
                                            </div>
                                            <p className='text-base text-zinc-500 text[#8b8b94] dark:text-zinc-400 '>
                                                {litext1}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                                <div>
                                    {data.litext2.map((litext2, index) => (
                                        <div
                                            key={index}
                                            className='flex flex-row justify-start items-center gap-2'
                                        >
                                            <div className='flex-2'>
                                                {svgXMark}
                                            </div>
                                            <p className='text-base text-zinc-500 text[#8b8b94] dark:text-zinc-400 '>
                                                {litext2}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col flex-1 justify-between items-center gap-4'>
                        <div className='text-3xl lg:text-5xl font-bold text-zinc-800 dark:text-zinc-100'>
                            {data.pricesum}
                        </div>
                        <Button
                            size='xl'
                            outline={true}
                            gradientDuoTone='cyanToBlue'
                            pill={true}
                            onClick={() => {
                                setVisible(true)
                                setModalDataWithoutDesign(data)
                            }}
                        >
                            Заказать сайт
                        </Button>
                        <p className='text-base text-zinc-500 text[#8b8b94] dark:text-zinc-400'>
                            {data.termtext}
                        </p>
                    </div>
                </div>
            ))}
            {ALL_PRICES_TEXT_WITH_DESIGN.map(data => (
                <div
                    key={data.id}
                    className='p-6 rounded-xl border border-zinc-100 dark:border-zinc-700/40 flex flex-col lg:flex-row justify-between items-center gap-4 shadow dark:shadow-[0_1px_3px_0_rgba(255, 255, 255, 0.2)]'
                >
                    <div className='max-w-lg flex-2'>
                        <h2 className='text-xl lg:text-3xl font-bold text-zinc-800 dark:text-zinc-100'>
                            {data.h2text}
                        </h2>
                        <p className='my-6 text-base text-zinc-500 text[#8b8b94] dark:text-zinc-400'>
                            {data.p2text}
                        </p>
                        <div className='mb-4'>
                            <h3 className='mb-4 text-zinc-800 dark:text-zinc-100'>
                                {data.h3text}
                            </h3>
                            <div className='flex flex-col sm:flex-row flex-wrap justify-between items-start gap-4'>
                                <div>
                                    {data.litext1.map((litext1, index) => (
                                        <div
                                            key={index}
                                            className='flex flex-row justify-start items-center gap-2'
                                        >
                                            <div className='flex-2'>
                                                {svgCheck}
                                            </div>
                                            <p className=' text-base text-zinc-500 text[#8b8b94] dark:text-zinc-400 '>
                                                {litext1}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                                <div>
                                    {data.litext2.map((litext2, index) => (
                                        <div
                                            key={index}
                                            className='flex flex-row justify-start items-center gap-2'
                                        >
                                            <div className='flex-2'>
                                                {svgCheck}
                                            </div>
                                            <p className='text-base text-zinc-500 text[#8b8b94] dark:text-zinc-400 '>
                                                {litext2}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col flex-1 justify-between items-center gap-4'>
                        <div className='text-3xl lg:text-5xl text-center font-bold text-zinc-800 dark:text-zinc-100'>
                            {data.pricesum}
                        </div>
                        <Button
                            size='xl'
                            outline={true}
                            gradientDuoTone='cyanToBlue'
                            pill={true}
                            onClick={() => {
                                setVisible(true)
                                setModalDataWithoutDesign(data)
                            }}
                        >
                            Заказать сайт
                        </Button>
                        <p className='text-base text-zinc-500 text[#8b8b94] dark:text-zinc-400'>
                            {data.termtext}
                        </p>
                    </div>
                </div>
            ))}
            <Modal
                show={visible}
                position='center'
                size='lg'
                className='bg-black h-screen '
            >
                <Modal.Body className=' rounded-xl bg-white p-8 ring-1 ring-zinc-900/5 dark:bg-zinc-900 dark:ring-zinc-800'>
                    <div className='text-left' ref={modalRef}>
                        <h3 className='mb-2 text-xl font-bold text-zinc-800 dark:text-zinc-100 '>
                            Выберите удобный для вас способ связи
                        </h3>
                        <p className='mb-6 text-base   text-zinc-500 text[#8b8b94] dark:text-zinc-400'>
                            Отправьте мне сообщение: <br />
                            <b>{modalDataWithoutDesign.modalptext}</b> <br />и
                            мы обсудим с вами все детали
                        </p>
                        <div className='flex flex-row justify-start gap-6'>
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
                                href={
                                    'https://api.whatsapp.com/send?phone=79093817368'
                                }
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
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default PriceSection
