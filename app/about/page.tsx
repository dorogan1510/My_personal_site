import React from 'react'
import Sections from './Sections'
import FMWrapperRight from '../../components/FMWrapperRight'
import Collage from './components/Collage'

const page = () => {
    return (
        <FMWrapperRight>
            <main className='mx-auto'>
                <div className='px-6 sm:px-20 w-full sm:w-11/12  mx-auto max-w-6xl mb-14 flex flex-col lg:flex-row justify-between gap-10'>
                    <div className='max-w-2xl '>
                        <h1 className='text-3xl font-bold  text-zinc-800 dark:text-zinc-100 lg:text-5xl  lg:text-left'>
                            Фронтенд разработчик, фрилансер и немного
                            путешественник
                        </h1>

                        <p className='my-6 text-base text-zinc-500 text[#8b8b94] dark:text-zinc-400  lg:text-left'>
                            Я перфекционист, путешествую и в процессе работаю.
                            Мой любимый стиль - минимализм (вы можете понять это
                            по моему сайту 🙂)
                        </p>
                        <p className='my-6 text-base text-zinc-500 text[#8b8b94] dark:text-zinc-400  lg:text-left'>
                            Нам с женой было интересно посмотреть жизнь других
                            стран и культур, поэтому мы решили начать жить по
                            2-3 месяца в разных местах и знакомиться с местным
                            бытом. На данный момент мы живем уже в нашей пятой
                            стране и не думаем останавливаться.
                        </p>
                    </div>
                </div>

                <Collage />
                <Sections />
            </main>
        </FMWrapperRight>
    )
}

export default page
