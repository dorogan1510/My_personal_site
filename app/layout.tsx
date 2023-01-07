import './globals.css'
import Header from './Header'
import Footer from './Footer'
import localFont from '@next/font/local'
import { Provider } from './Provider'

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
            <body className='bg-[#fafafa] dark:bg-black text-white transition duration-300 '>
                <Provider>
                    <div className='bg-white drop-shadow-[0_1px_1px_rgba(0,0,0,0.05)] transition duration-300 max-w-6xl p-6 sm:px-20  bg:white dark:bg-[#18181B]  w-full sm:w-11/12  border-gray-700 h-full mx-auto'>
                        <Header />
                        {children}
                        <Footer />
                    </div>
                </Provider>
            </body>
        </html>
    )
}
