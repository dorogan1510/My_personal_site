'use client'

import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const FMWrapperDown = ({ children }: any) => {
    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 100 }}
            >
                {children}
            </motion.div>
        </AnimatePresence>
    )
}

export default FMWrapperDown
