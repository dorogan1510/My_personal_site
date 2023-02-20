/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        compiler: {
            styledComponents: true,
        },
        appDir: true,

        fontLoaders: [
            {
                loader: '@next/font/google',
                options: { subsets: ['latin'] },
            },
        ],
    },
    i18n: {
        locales: ['ru', 'en'],
        defaultLocale: 'ru',
    },
}

module.exports = nextConfig
