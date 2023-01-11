'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ScriptProps } from 'next/script'

const FMWrapperImage = ({ children }: ScriptProps) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            transition={{ duration: 0.7 }}
            animate={{ opacity: 1 }}
        >
            {children}
        </motion.div>
    )
}

export default FMWrapperImage
