import React from 'react'
import { motion } from 'framer-motion'

const variants = {
    initial: { opacity: 0, y: 30 }, // bắt đầu mờ và lệch xuống
    animate: { opacity: 1, y: 0, transition: { duration: 0.5 } }, // hiệu ứng trượt lên + hiện dần
    exit: { opacity: 0, y: -30, transition: { duration: 0.3 } }, // khi thoát ra
}

// Zoom in
//initial: { scale: 0.95, opacity: 0 }
//animate: { scale: 1, opacity: 1, transition: { duration: 0.5 } }
//exit: { scale: 0.95, opacity: 0, transition: { duration: 0.3 } }

// Slide từ phải sang
//initial: { x: 100, opacity: 0 }
//animate: { x: 0, opacity: 1 }
//exit: { x: -100, opacity: 0 }

const PageTransitionWrapper = ({ children }) => {
    return (
        <motion.div
            initial="initial"
            animate="animate"
            exit="exit"
            variants={variants}
        >
            {children}
        </motion.div>
    )
}

export default PageTransitionWrapper
