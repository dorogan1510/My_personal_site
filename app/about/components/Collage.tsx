'use client'

import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import image_1 from '../../../src/img/collage/image_1.jpg'
import image_2 from '../../../src/img/collage/image_2.jpg'
import image_3 from '../../../src/img/collage/image_3.jpg'
import image_4 from '../../../src/img/collage/image_4.jpg'
import image_7 from '../../../src/img/collage/image_7.jpg'
import image_8 from '../../../src/img/collage/image_8.jpg'
import image_9 from '../../../src/img/collage/image_9.jpg'
import image_10 from '../../../src/img/collage/image_10.jpg'
import image_11 from '../../../src/img/collage/image_11.jpg'
import image_12 from '../../../src/img/collage/image_12.jpg'
import FMWrapperImage from '../../../components/FMWraperImage'

const Collage = () => {
    const [imageTrue, setImageTrue] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setImageTrue(!imageTrue)
            console.log('false')
        }, 10000)
    })

    return (
        <div className='mb-20'>
            {imageTrue ? (
                <div className=' -my-4 flex justify-center gap-5 overflow-hidden  sm:gap-8'>
                    <FMWrapperImage>
                        <div className=' relative w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl rotate-2'>
                            <Image
                                className='transition duration-200'
                                src={image_1}
                                alt={'image_1'}
                                width={300}
                                height={300}
                                priority={true}
                            />
                        </div>
                    </FMWrapperImage>

                    <FMWrapperImage>
                        <div className='relative w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl -rotate-2'>
                            <Image
                                src={image_2}
                                alt={'image_1'}
                                width={300}
                                height={300}
                                priority={true}
                            />
                        </div>
                    </FMWrapperImage>

                    <FMWrapperImage>
                        <div className='relative w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl rotate-2'>
                            <Image
                                src={image_3}
                                alt={'image_1'}
                                width={300}
                                height={300}
                                priority={true}
                            />
                        </div>
                    </FMWrapperImage>

                    <FMWrapperImage>
                        <div className='relative w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl rotate-2'>
                            <Image
                                src={image_4}
                                alt={'image_1'}
                                width={300}
                                height={300}
                                priority={true}
                            />
                        </div>
                    </FMWrapperImage>

                    <FMWrapperImage>
                        <div className='relative w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl rotate-2'>
                            <Image
                                src={image_11}
                                alt={'image_1'}
                                width={300}
                                height={300}
                                priority={true}
                            />
                        </div>
                    </FMWrapperImage>
                </div>
            ) : (
                <div className=' -my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8'>
                    <div className=' relative w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl -rotate-2'>
                        <FMWrapperImage>
                            <Image
                                className='transition duration-200'
                                src={image_12}
                                alt={'image_1'}
                                width={300}
                                height={300}
                                priority={true}
                            />
                        </FMWrapperImage>
                    </div>

                    <div className='relative w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl rotate-2'>
                        <FMWrapperImage>
                            <Image
                                src={image_7}
                                alt={'image_1'}
                                width={300}
                                height={300}
                                priority={true}
                            />
                        </FMWrapperImage>
                    </div>

                    <div className='relative w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl -rotate-2'>
                        <FMWrapperImage>
                            <Image
                                src={image_8}
                                alt={'image_1'}
                                width={300}
                                height={300}
                                priority={true}
                            />
                        </FMWrapperImage>
                    </div>
                    <div className='relative w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl -rotate-2'>
                        <FMWrapperImage>
                            <Image
                                src={image_9}
                                alt={'image_1'}
                                width={300}
                                height={300}
                                priority={true}
                            />
                        </FMWrapperImage>
                    </div>
                    <div className='relative w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl rotate-2'>
                        <FMWrapperImage>
                            <Image
                                src={image_10}
                                alt={'image_1'}
                                width={300}
                                height={300}
                                priority={true}
                            />
                        </FMWrapperImage>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Collage
