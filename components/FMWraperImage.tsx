'use client'

import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const FMWrapperImage = ({ children }: any) => {
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
