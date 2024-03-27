import { FC } from 'react';
import { motion } from 'framer-motion';

import { benefitsRotaryMolding } from 'data/RotaryMoldingData';

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
            <div className={styles.about_wrapper}>
                <motion.h1
                    custom={1}
                    variants={textAnimation}
                    className={styles.title}
                >
                    Производство методом ротационного формования
                </motion.h1>
                <motion.p
                    custom={2}
                    variants={textAnimation}
                    className={styles.text}
                >
                    Особое внимание наша компания уделяет производству новых
                    изделий из полимеров или замене существующих на полимерные
                    аналоги, методом ротационного формования.
                </motion.p>
                <motion.p
                    custom={3}
                    variants={textAnimation}
                    className={styles.text}
                >
                    Преимуществами данной технологии являются:
                </motion.p>
                <ul className={styles.list}>
                    {benefitsRotaryMolding.map((item, index) => (
                        <motion.li
                            custom={index + 3}
                            variants={textAnimation}
                            key={index}
                        >
                            {item}
                        </motion.li>
                    ))}
                </ul>
            </div>
            <RotaryMoldingProcess />
        </motion.div>
    );
};

export default RotaryMoldingContent;
