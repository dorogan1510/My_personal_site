'use client'

import { Carousel } from 'flowbite-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import business_card_scrin from '../../../src/img/business_card_scrin.jpg'

const page = () => {
    return (
        <main>
            <div className='grid grid-flow-row lg:grid-cols-2'>
                <div>
                    <h2>Online store</h2>
                    <p>
                        This is a pet project. Online store with fake api from
                        here
                        <a href='https://fakestoreapi.com/'>fakestoreapi.com</a>
                        <br />
                        Please take a look at the readme file in github
                    </p>
                    <ul>
                        <li>React.js/Mobx</li>
                        <li>MaterialUI/SASS</li>
                        <li>Axios/Fuse.js</li>
                    </ul>
                    <div>
                        <Link
                            href='https://github.com/dorogan1510/New_online_store'
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
                            href='https://vocal-donut-4e3013.netlify.app/'
                            target='_blank'
                            rel='noreferrer'
                            className='group'
                        >
                            <svg
                                className='w-6 h-6 stroke-zinc-500 transition group-hover:stroke-zinc-600 dark:stroke-zinc-400 dark:group-hover:stroke-zinc-300'
                                fill='none'
                                stroke='currentColor'
                                viewBox='0 0 24 24'
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
                <div className='order-first lg:order-last h-56 lg:h-64 '>
                    <Carousel>
                        <Image
                            src={business_card_scrin}
                            alt='...'
                            width={0}
                            height={0}
                        />
                        <Image
                            src='https://flowbite.com/docs/images/carousel/carousel-2.svg'
                            alt='...'
                            width={0}
                            height={0}
                        />
                        <Image
                            src='https://flowbite.com/docs/images/carousel/carousel-3.svg'
                            alt='...'
                            width={0}
                            height={0}
                        />
                        <Image
                            src='https://flowbite.com/docs/images/carousel/carousel-4.svg'
                            alt='...'
                            width={0}
                            height={0}
                        />
                        <Image
                            src='https://flowbite.com/docs/images/carousel/carousel-5.svg'
                            alt='...'
                            width={0}
                            height={0}
                        />
                    </Carousel>
                </div>
            </div>
        </main>
    )
}

export default page
