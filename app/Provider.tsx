'use client'

import { ThemeProvider } from 'next-themes'
import { ScriptProps } from 'next/script'

export function Provider({ children }: ScriptProps) {
    return (
        <ThemeProvider attribute='class' defaultTheme='system'>
            {children}
        </ThemeProvider>
    )
}
