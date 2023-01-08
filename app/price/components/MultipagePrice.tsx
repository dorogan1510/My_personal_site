'use client'

import { Button } from 'flowbite-react'
import React from 'react'

const MultipagePrice = () => {
    return (
        <div className='p-6 rounded-xl flex flex-col gap-4 lg:flex-row justify-between items-center border border-zinc-100 dark:border-zinc-700/40   shadow dark:shadow-[0_1px_3px_0_rgba(255, 255, 255, 0.2)]'>
            <div className='max-w-lg flex-2'>
                <h2 className='text-3xl font-bold text-zinc-800 dark:text-zinc-100'>
                    Многостраничный сайт
                </h2>
                <p className='my-6 text-base text-zinc-500 text[#8b8b94] dark:text-zinc-400'>
                    Данный вариант подойдет если нужно, чтобы на сайте было
                    больше, чем 2 страницы.
                </p>
                <div className='mb-4'>
                    <h3 className='mb-4 text-zinc-800 dark:text-zinc-100'>
                        Что включено
                    </h3>
                    <div className='flex flex-col sm:flex-row justify-between items-start gap-4'>
                        <div>
                            <div className='flex flex-row justify-between gap-2'>
                                <svg
                                    className='fill-zinc-500 transition  dark:fill-zinc-400 '
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
                                <p className='text-base text-zinc-500 text[#8b8b94] dark:text-zinc-400 text-center lg:text-left'>
                                    первое
                                </p>
                            </div>
                            <div className='flex flex-row justify-between gap-2'>
                                <svg
                                    className='fill-zinc-500 transition  dark:fill-zinc-400 '
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
                                <p className='text-base text-zinc-500 text[#8b8b94] dark:text-zinc-400 text-center lg:text-left'>
                                    первое
                                </p>
                            </div>
                        </div>
                        <div>
                            <div className='flex flex-row justify-between gap-2'>
                                <svg
                                    className='fill-zinc-500 transition  dark:fill-zinc-400 '
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
                                <p className='text-base text-zinc-500 text[#8b8b94] dark:text-zinc-400 text-center lg:text-left'>
                                    первое
                                </p>
                            </div>
                            <div className='flex flex-row justify-between gap-2'>
                                <svg
                                    className='fill-zinc-500 transition  dark:fill-zinc-400 '
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
                                <p className='text-base text-zinc-500 text[#8b8b94] dark:text-zinc-400 text-center lg:text-left'>
                                    первое
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex flex-col flex-1 justify-between items-center gap-4'>
                <div className='text-5xl font-bold text-zinc-800 dark:text-zinc-100 text-center'>
                    от ₽15000
                </div>
                <Button
                    size='xl'
                    outline={true}
                    gradientDuoTone='cyanToBlue'
                    pill={true}
                >
                    Заказать сайт
                </Button>
                <p className='text-base text-zinc-500 text[#8b8b94] dark:text-zinc-400'>
                    Срок работы: от 7 дней
                </p>
            </div>
        </div>
    )
}

export default MultipagePrice
