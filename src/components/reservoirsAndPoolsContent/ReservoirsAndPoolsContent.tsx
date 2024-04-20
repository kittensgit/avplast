import { FC } from 'react';
import { motion } from 'framer-motion';

import ReservoirsAndPoolsCards from './reservoirsAndPoolsCards/ReservoirsAndPoolsCards';
import AboutSection from './aboutSection/AboutSection';

import styles from './ReservoirsAndPoolsContent.module.css';

const ReservoirsAndPoolsContent: FC = () => {
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
            <ReservoirsAndPoolsCards />
        </motion.div>
    );
};

export default ReservoirsAndPoolsContent;
