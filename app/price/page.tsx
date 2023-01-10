import React from 'react'
import FMWrapperRight from './../../components/FMWrapperRight'
import PriceSection from './components/PriceSection'

const page = () => (
    <FMWrapperRight>
        <main className='px-6 sm:px-20 w-full sm:w-11/12 max-w-6xl mx-auto'>
            <div className='max-w-xl'>
                <h1 className='text-3xl font-bold text-zinc-800 dark:text-zinc-100 lg:text-5xl '>
                    Что по ценам?
                </h1>
                <p className='my-6 text-base text-zinc-500 text[#8b8b94] dark:text-zinc-400 '>
                    Ниже приведены цены за базовые проекты, чтобы вы могли
                    понимать на что расчитsdfnm
                </p>
            </div>
            <div className='space-y-4'>
                <PriceSection />
            </div>
        </main>
    </FMWrapperRight>
)

export default page
