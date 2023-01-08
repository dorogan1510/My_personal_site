import React from 'react'

const Sections = () => {
    return (
        <div className='space-y-20'>
            <section className='sm:border-l sm:border-zinc-200 sm:pl-6 sm:dark:border-zinc-700/40'>
                <div className='grid gap-x-14 grid-cols-1 items-baseline gap-y-8 lg:grid-cols-5'>
                    <h2 className=' lg:col-span-2  text-zinc-800 dark:text-zinc-100'>
                        Языки програмирования, библиотеки и фреймворки
                    </h2>

                    <div className='lg:col-span-3'>
                        <ul className='space-y-16'>
                            <li>
                                <h3 className='text-base  tracking-tight text-zinc-800 dark:text-zinc-100'>
                                    JavaScript
                                </h3>
                                <p className='relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400'>
                                    ES5, ES6+
                                </p>
                            </li>
                            <li>
                                <h3 className='text-base  tracking-tight text-zinc-800 dark:text-zinc-100'>
                                    Typescript
                                </h3>
                            </li>
                            <li>
                                <h3 className='text-base  tracking-tight text-zinc-800 dark:text-zinc-100'>
                                    React.js
                                </h3>
                                <p className='relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400'>
                                    Next.js 13, Redux Toolkit, MobX
                                </p>
                            </li>
                            <li>
                                <h3 className='text-base  tracking-tight text-zinc-800 dark:text-zinc-100'>
                                    CSS библиотеки и препроцессоры
                                </h3>
                                <p className='relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400'>
                                    SCSS/SASS, CSS modules, Tailwind,
                                    MaterialUI, Bootstrap
                                </p>
                            </li>
                            <li>
                                <h3 className='text-base  tracking-tight text-zinc-800 dark:text-zinc-100'>
                                    Анимации
                                </h3>
                                <p className='relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400'>
                                    Framer-motion, React Transition Group
                                </p>
                            </li>
                            <li>
                                <h3 className='text-base  tracking-tight text-zinc-800 dark:text-zinc-100'>
                                    Система контроля версий
                                </h3>
                                <p className='relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400'>
                                    Git, Github
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            <hr className='border-zinc-200  dark:border-zinc-700/40 sm:hidden' />

            <section className='sm:border-l sm:border-zinc-200 sm:pl-6 sm:dark:border-zinc-700/40'>
                <div className='grid gap-x-14  grid-cols-1 items-baseline gap-y-8 lg:grid-cols-5'>
                    <h2 className=' lg:col-span-2  text-zinc-800 dark:text-zinc-100'>
                        Сборщики и упаковщики
                    </h2>
                    <div className='lg:col-span-3'>
                        <ul className='space-y-16'>
                            <li>
                                <h3 className='text-base  tracking-tight text-zinc-800 dark:text-zinc-100'>
                                    Laravel mix
                                </h3>
                                <p className='relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400'>
                                    Использую в том случае, если я пишу сайт на
                                    чистом html/css/javascript без
                                    дополнительных библиотек и фреймворков
                                </p>
                            </li>
                            <li>
                                <h3 className='text-base  tracking-tight text-zinc-800 dark:text-zinc-100'>
                                    Turbopack
                                </h3>
                                <p className='relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400'>
                                    Используется по умолчанию начиная с версии
                                    NEXT.js 13
                                </p>
                            </li>
                            <li>
                                <h3 className='text-base  tracking-tight text-zinc-800 dark:text-zinc-100'>
                                    Webpack
                                </h3>
                                <p className='relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400'>
                                    Используется по умолчанию в библиотеке
                                    React.js
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            <hr className='border-zinc-200  dark:border-zinc-700/40 sm:hidden' />

            <section className='sm:border-l sm:border-zinc-200 sm:pl-6 sm:dark:border-zinc-700/40'>
                <div className='grid gap-x-14  grid-cols-1 items-baseline gap-y-8 lg:grid-cols-5'>
                    <h2 className=' lg:col-span-2  text-zinc-800 dark:text-zinc-100'>
                        Дизайн
                    </h2>
                    <div className='lg:col-span-3'>
                        <ul className='space-y-16'>
                            <li>
                                <h3 className='text-base  tracking-tight text-zinc-800 dark:text-zinc-100'>
                                    Figma
                                </h3>
                                <p className='relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400'>
                                    Использую в работе чаще всего
                                </p>
                            </li>
                            <li>
                                <h3 className='text-base  tracking-tight text-zinc-800 dark:text-zinc-100'>
                                    Adobe
                                </h3>
                                <p className='relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400'>
                                    Photoshop, XD, After Effects
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Sections
