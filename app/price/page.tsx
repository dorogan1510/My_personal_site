import React from 'react'
import FMWrapperRight from './../../components/FMWrapperRight'
import LandingPrice from './components/LandingPrice'
import MultipagePrice from './components/MultipagePrice'

const page = () => (
    <FMWrapperRight>
        <main className='mb-20'>
            <div className='max-w-xl'>
                <h1 className='text-3xl font-bold text-zinc-800 dark:text-zinc-100 lg:text-5xl text-center lg:text-left'>
                    Что по ценам?
                </h1>
                <p className='my-6 text-base text-zinc-500 text[#8b8b94] dark:text-zinc-400 text-center lg:text-left'>
                    Каждый проект крайне индивидуален.
                </p>
            </div>
            <div className='space-y-4'>
                <LandingPrice />
                <MultipagePrice />
            </div>
        </main>
    </FMWrapperRight>
)

export default page
