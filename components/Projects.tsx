import React from 'react'
import ProjectMap from './ProjectMap'

const Projects = () => {
    return (
        <main>
            <h2 className='mb-6 text-xl text-center flex justify-center font-bold text-zinc-800 dark:text-zinc-100 lg:text-3xl  lg:text-left'>
                Примеры моих работ
            </h2>
            <div className=' grid grid-cols-1 lg:grid-cols-3 gap-4 justify-items-center'>
                <ProjectMap />
            </div>
        </main>
    )
}

export default Projects
