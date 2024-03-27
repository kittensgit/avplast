import { FC } from 'react';
import { motion } from 'framer-motion';

import { rotaryMoldingSteps } from 'data/RotaryMoldingData';
import warning from 'assets/icons/exlamation_mark.png';

import styles from './RotaryMoldingProcess.module.css';

const RotaryMoldingProcess: FC = () => {
    const wrapperAnimation = {
        hidden: {
            y: 10,
            opacity: 0,
        },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                delay: 1.5,
                duration: 1,
                type: 'tween',
                ease: 'easeInOut',
            },
        },
    };

    const cardAnimation = {
        hidden: {
            y: 10,
            opacity: 0,
        },
        visible: (custom: number) => ({
            y: 0,
            opacity: 1,
            transition: {
                delay: custom * 0.125,
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
            variants={wrapperAnimation}
        >
            <h2 className={styles.caption}>
                Процесс от первого контакта до готового изделия
            </h2>
            {rotaryMoldingSteps.map((step, index) => (
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{
                        amount: 0.1,
                        once: true,
                    }}
                    variants={cardAnimation}
                    custom={index + 1}
                    key={index}
                    className={styles.block}
                >
                    <span className={styles.num}>0{index + 1}</span>
                    <ul className={styles.list}>
                        {step.lists.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                    <div className={styles.honeycomb}>
                        <div className={styles.honeycomb_row}>
                            {step.images.slice(0, 2).map((item, index) => (
                                <div
                                    key={index}
                                    className={styles.honeycomb_cell}
                                >
                                    <img
                                        src={item}
                                        alt="Производство методом ротационного формования"
                                    />
                                </div>
                            ))}
                        </div>
                        <div className={styles.honeycomb_row}>
                            {step.images.slice(2).map((item, index) => (
                                <div
                                    key={index}
                                    className={styles.honeycomb_cell}
                                >
                                    <img
                                        src={item}
                                        alt="Производство методом ротационного формования"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            ))}
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{
                    amount: 0.1,
                    once: true,
                }}
                variants={cardAnimation}
                custom={1}
                className={styles.warning}
            >
                <img src={warning} alt="warning" />
                <p>
                    Процесс, с момента первого контакта до готового к серийному
                    производству изделия, занимает от 40 до 200 дней
                </p>
            </motion.div>
        </motion.div>
    );
};

export default RotaryMoldingProcess;
