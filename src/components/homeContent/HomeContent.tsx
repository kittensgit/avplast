import { FC } from 'react';
import { motion } from 'framer-motion';

import cardsData from 'data/CardsData';

import Cards from '../common/cards/Cards';

import Slider from './slider/Slider';
import Benefits from './benefits/Benefits';

import styles from './HomeContent.module.css';

const HomeContent: FC = () => {
    const textAnimation = {
        hidden: {
            y: -10,
            opacity: 0,
        },
        visible: (custom: number) => ({
            y: 0,
            opacity: 1,
            transition: {
                delay: custom * 0.2,
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
            className={styles.wrapper}
        >
            <motion.div
                animate={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                transition={{ duration: 1 }}
            >
                <Slider />
            </motion.div>
            <motion.h1
                variants={textAnimation}
                custom={1}
                className={styles.title}
            >
                Доступные современные технологии производства и эксплутации
                полимерных изделий
            </motion.h1>
            <Cards cardsData={cardsData} />
            <motion.h2
                initial="hidden"
                whileInView="visible"
                variants={textAnimation}
                custom={1}
                className={styles.benefits_title}
            >
                Преумущества работы с нами
            </motion.h2>
            <Benefits />
        </motion.div>
    );
};

export default HomeContent;
