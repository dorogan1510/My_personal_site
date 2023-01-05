import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import polina_site_scrin from '/src/img/polina_site_scrin.png'
import business_card_scrin from '/src/img/business_card_scrin.jpg'
import english_course_scrin from '/src/img/english_course_scrin.jpg'
import online_store_scrin from '/src/img/online_store_scrin.jpg'
import expense_tracker_scrin from '/src/img/expense_tracker_scrin.jpg'
import evil_calculator_scrin from '/src/img/evil_calculator_scrin.jpg'
import weather_scrin from '/src/img/weather_scrin.jpg'
import todo_scrin from '/src/img/todo_scrin.jpg'

const Projects = () => {
    return (
        <>
            <h2 className='mb-6 text-xl text-center flex justify-center font-bold text-zinc-800 dark:text-zinc-100 lg:text-3xl  lg:text-left'>
                Примеры моих работ
            </h2>
            <div className=' grid grid-cols-1 lg:grid-cols-3 gap-4 justify-items-center'>
                <Link className='flex justify-center  text-center ' href={''}>
                    <section className='p-4 bg-zinc-100 bg-opacity-0 transition duration-300 hover:bg-opacity-100 dark:bg-zinc-800 dark:bg-opacity-0 dark:hover:bg-opacity-100 sm:rounded-2xl flex flex-col items-center'>
                        <Image
                            src={polina_site_scrin}
                            alt={'image'}
                            width={250}
                            height={250}
                            className='mb-2 rounded-xl'
                        />
                        <h2 className='font-medium mb-2  text-zinc-800 dark:text-zinc-100 text-center '>
                            Website for English language school
                        </h2>
                        <p className='text-base text-zinc-500 text[#8b8b94] dark:text-zinc-400 text-center lg:text-left'>
                            You can choose your personal teacher and start to
                            study english
                        </p>
                    </section>
                </Link>
                <Link className='flex justify-center  text-center ' href={''}>
                    <section className='p-4 bg-zinc-100 bg-opacity-0 transition duration-300 hover:bg-opacity-100 dark:bg-zinc-800 dark:bg-opacity-0 dark:hover:bg-opacity-100 sm:rounded-2xl flex flex-col items-center'>
                        <Image
                            src={business_card_scrin}
                            alt={'image'}
                            width={250}
                            height={250}
                            className='mb-2 rounded-xl'
                        />
                        <h2 className='font-medium mb-2  text-zinc-800 dark:text-zinc-100 text-center '>
                            Website for English language school
                        </h2>
                        <p className='text-base text-zinc-500 text[#8b8b94] dark:text-zinc-400 text-center lg:text-left'>
                            You can choose your personal teacher and start to
                            study english
                        </p>
                    </section>
                </Link>
                <Link className='flex justify-center  text-center ' href={''}>
                    <section className='p-4 bg-zinc-100 bg-opacity-0 transition duration-300 hover:bg-opacity-100 dark:bg-zinc-800 dark:bg-opacity-0 dark:hover:bg-opacity-100 sm:rounded-2xl flex flex-col items-center'>
                        <Image
                            src={english_course_scrin}
                            alt={'image'}
                            width={250}
                            height={250}
                            className='mb-2 rounded-xl'
                        />
                        <h2 className='font-medium mb-2  text-zinc-800 dark:text-zinc-100 text-center '>
                            Website for English language school
                        </h2>
                        <p className='text-base text-zinc-500 text[#8b8b94] dark:text-zinc-400 text-center lg:text-left'>
                            You can choose your personal teacher and start to
                            study english
                        </p>
                    </section>
                </Link>
                <Link className='flex justify-center  text-center ' href={''}>
                    <section className='p-4 bg-zinc-100 bg-opacity-0 transition duration-300 hover:bg-opacity-100 dark:bg-zinc-800 dark:bg-opacity-0 dark:hover:bg-opacity-100 sm:rounded-2xl flex flex-col items-center'>
                        <Image
                            src={expense_tracker_scrin}
                            alt={'image'}
                            width={250}
                            height={250}
                            className='mb-2 rounded-xl'
                        />
                        <h2 className='font-medium mb-2  text-zinc-800 dark:text-zinc-100 text-center '>
                            Website for English language school
                        </h2>
                        <p className='text-base text-zinc-500 text[#8b8b94] dark:text-zinc-400 text-center lg:text-left'>
                            You can choose your personal teacher and start to
                            study english
                        </p>
                    </section>
                </Link>
                <Link className='flex justify-center  text-center ' href={''}>
                    <section className='p-4 bg-zinc-100 bg-opacity-0 transition duration-300 hover:bg-opacity-100 dark:bg-zinc-800 dark:bg-opacity-0 dark:hover:bg-opacity-100 sm:rounded-2xl flex flex-col items-center'>
                        <Image
                            src={evil_calculator_scrin}
                            alt={'image'}
                            width={250}
                            height={250}
                            className='mb-2 rounded-xl'
                        />
                        <h2 className='font-medium mb-2  text-zinc-800 dark:text-zinc-100 text-center '>
                            Website for English language school
                        </h2>
                        <p className='text-base text-zinc-500 text[#8b8b94] dark:text-zinc-400 text-center lg:text-left'>
                            You can choose your personal teacher and start to
                            study english
                        </p>
                    </section>
                </Link>
                <Link className='flex justify-center text-center ' href={''}>
                    <section className='p-4 bg-zinc-100 bg-opacity-0 transition duration-300 hover:bg-opacity-100 dark:bg-zinc-800 dark:bg-opacity-0 dark:hover:bg-opacity-100 sm:rounded-2xl flex flex-col items-center'>
                        <Image
                            src={weather_scrin}
                            alt={'image'}
                            width={250}
                            height={250}
                            className='mb-2 rounded-xl'
                        />
                        <h2 className='font-medium mb-2  text-zinc-800 dark:text-zinc-100 text-center '>
                            Website for English language school
                        </h2>
                        <p className='text-base text-zinc-500 text[#8b8b94] dark:text-zinc-400 text-center lg:text-left'>
                            You can choose your personal teacher and start to
                            study english
                        </p>
                    </section>
                </Link>
                <Link className='flex justify-center  text-center ' href={''}>
                    <section className='p-4 bg-zinc-100 bg-opacity-0 transition duration-300 hover:bg-opacity-100 dark:bg-zinc-800 dark:bg-opacity-0 dark:hover:bg-opacity-100 sm:rounded-2xl flex flex-col items-center'>
                        <Image
                            src={todo_scrin}
                            alt={'image'}
                            width={250}
                            height={250}
                            className='mb-2 rounded-xl'
                        />
                        <h2 className='font-medium mb-2  text-zinc-800 dark:text-zinc-100 text-center '>
                            Website for English language school
                        </h2>
                        <p className='text-base text-zinc-500 text[#8b8b94] dark:text-zinc-400 text-center lg:text-left'>
                            You can choose your personal teacher and start to
                            study english
                        </p>
                    </section>
                </Link>
                <Link className='flex justify-center  text-center ' href={''}>
                    <section className='p-4 bg-zinc-100 bg-opacity-0 transition duration-300 hover:bg-opacity-100 dark:bg-zinc-800 dark:bg-opacity-0 dark:hover:bg-opacity-100 sm:rounded-2xl flex flex-col items-center'>
                        <Image
                            src={online_store_scrin}
                            alt={'image'}
                            width={250}
                            height={250}
                            className='mb-2 rounded-xl'
                        />
                        <h2 className='font-medium mb-2  text-zinc-800 dark:text-zinc-100 text-center '>
                            Website for English language school
                        </h2>
                        <p className='text-base text-zinc-500 text[#8b8b94] dark:text-zinc-400 text-center lg:text-left'>
                            You can choose your personal teacher and start to
                            study english
                        </p>
                    </section>
                </Link>
            </div>
        </>
    )
}

export default Projects
