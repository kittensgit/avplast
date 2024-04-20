import { FC } from 'react';
import { motion } from 'framer-motion';

import AboutSection from './aboutSection/AboutSection';
import RotaryMoldingProcess from './rotaryMoldingProcess/RotaryMoldingProcess';

import styles from './RotaryMoldingContent.module.css';

const RotaryMoldingContent: FC = () => {
    const textAnimation = {
        hidden: {
            y: -10,
            opacity: 0,
        },
        visible: (custom: number) => ({
            y: 0,
            opacity: 1,
            transition: {
                delay: custom * 0.1,
                duration: 1,
                type: 'tween',
                ease: 'easeInOut',
            },
        }),
    };
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            custom={1}
            variants={textAnimation}
            className={styles.wrapper}
        >
            <AboutSection />
            <RotaryMoldingProcess />
        </motion.div>
    );
};

export default RotaryMoldingContent;
