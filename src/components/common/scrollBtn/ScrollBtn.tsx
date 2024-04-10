import { FC } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import styles from './ScrollBtn.module.css';

interface ScrollBtnProps {
    showScrollButton: boolean;
}

const ScrollBtn: FC<ScrollBtnProps> = ({ showScrollButton }) => {
    const scrollToTop = () => {
        window.scrollTo(0, 0);
    };
    const scrollBtnAnimation = {
        initial: {
            opacity: 0,
        },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.5,
            },
        },
    };
    return (
        <AnimatePresence>
            {showScrollButton && (
                <motion.div
                    className={styles.scroll}
                    onClick={scrollToTop}
                    variants={scrollBtnAnimation}
                    initial="initial"
                    animate="visible"
                    exit="initial"
                    key="scroll"
                ></motion.div>
            )}
        </AnimatePresence>
    );
};

export default ScrollBtn;
