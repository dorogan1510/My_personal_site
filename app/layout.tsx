import localFont from '@next/font/local'
import Footer from '../components/Footer'
import Header from '../components/Header'
import '../styles/globals.css'
import { Provider } from '../styles/Provider'

const roboto = localFont({
    src: [
        {
            path: './fonts/Roboto-Regular.ttf',
            weight: '400',
            style: 'normal',
        },
        {
            path: './fonts/Roboto-Medium.ttf',
            weight: '500',
            style: 'normal',
        },
        {
            path: './fonts/Roboto-Bold.ttf',
            weight: '700',
            style: 'normal',
        },
    ],
})

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang='en' className={roboto.className}>
            <head />
            <body className='bg-zinc-50 dark:bg-black text-white transition duration-300 '>
                <Provider>
                    <div className='fixed inset-0 flex justify-center sm:px-8'>
                        <div className='flex w-full max-w-7xl lg:px-8'>
                            <div className='w-full bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20'></div>
                        </div>
                    </div>
                    <div className='relative lg:space-y-16 space-y-8 py-10'>
                        <Header />
                        {children}
                        <Footer />
                    </div>
                </Provider>
            </body>
        </html>
    )
}
