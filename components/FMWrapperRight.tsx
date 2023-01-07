'use client'

import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const FMWrapperRight = ({ children }: any) => {
    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 100 }}
            >
                {children}
            </motion.div>
        </AnimatePresence>
    )
}

export default FMWrapperRight
