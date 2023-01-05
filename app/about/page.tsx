import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import me_photo from '../../src/img/me_photo.jpg'
import Sections from './Sections'

const page = () => {
    return (
        <>
            <main>
                <div className='mb-20 flex flex-col lg:flex-row justify-between gap-10'>
                    <div className='max-w-2xl '>
                        <h1 className='text-3xl font-bold  text-zinc-800 dark:text-zinc-100 lg:text-5xl  lg:text-left'>
                            Мой стек, который я использую в своей работе
                        </h1>
                        <p className='my-6 text-base text-zinc-500 text[#8b8b94] dark:text-zinc-400  lg:text-left'>
                            Здесь вы можете посмотреть инструменты и технологии,
                            которые я использую во frontend разработке.
                        </p>
                    </div>
                    {/* <div className='mx-auto max-w-xs order-first lg:order-last mb-10 sm:mb-0'>
                        <Image
                            className='rounded-3xl  '
                            src={me_photo}
                            alt='Picture of the author'
                            width={500}
                            height={500}
                        />
                    </div> */}
                </div>
                <Sections />
            </main>
        </>
    )
}

export default page
