'use client'

import React from 'react'
import Project1 from './Project1'
import Project2 from './Project2'
import Project3 from './Project3'
import Project4 from './Project4'
import Project5 from './Project5'
import Project6 from './Project6'
import Project7 from './Project7'
import Project8 from './Project8'

const Projects = () => {
    return (
        <main>
            <h2 className='mb-6 text-xl text-center flex justify-center font-bold text-zinc-800 dark:text-zinc-100 lg:text-3xl  lg:text-left'>
                Примеры моих работ
            </h2>
            <div className=' grid grid-cols-1 lg:grid-cols-3 gap-4 justify-items-center'>
                <Project1 />
                <Project2 />
                <Project3 />
                <Project4 />
                <Project5 />
                <Project6 />
                <Project7 />
                <Project8 />
            </div>
        </main>
    )
}

export default Projects
