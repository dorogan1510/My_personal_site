import React from 'react'
import Sections from './Sections'
import FMWrapperRight from '../../components/FMWrapperRight'

const page = () => {
    return (
        <FMWrapperRight>
            <main>
                <div className='mb-20 flex flex-col lg:flex-row justify-between gap-10'>
                    <div className='max-w-2xl '>
                        <h1 className='text-3xl font-bold  text-zinc-800 dark:text-zinc-100 lg:text-5xl  lg:text-left'>
                            Мой стек технологий, который я использую в своей
                            работе
                        </h1>

                        <p className='my-6 text-base text-zinc-500 text[#8b8b94] dark:text-zinc-400  lg:text-left'>
                            Здесь вы можете посмотреть инструменты и технологии,
                            которые я использую во frontend разработке.
                        </p>
                    </div>
                </div>
                <Sections />
            </main>
        </FMWrapperRight>
    )
}

export default page
