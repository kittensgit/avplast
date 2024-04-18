import { FC } from 'react';
import { motion } from 'framer-motion';

import { slottedFloorsBenefits, slottedFloorsImg } from 'data/AgricultureData';

import ImagesCollection from '../imagesCollection/ImagesCollection';

import styles from './SlottedFloorsSection.module.css';

const SlottedFloorsSection: FC = () => {
    const wrapperAnimation = {
        hidden: {
            y: -10,
            opacity: 0,
        },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 1,
                type: 'tween',
                ease: 'easeInOut',
            },
        },
    };
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
            viewport={{
                amount: 0.2,
                once: true,
            }}
            variants={wrapperAnimation}
        >
            <h2 className={styles.title}>Щелевые полы</h2>
            <ImagesCollection images={slottedFloorsImg} title="Щелевые полы" />
            <motion.h3
                initial="hidden"
                whileInView="visible"
                viewport={{
                    amount: 0.1,
                    once: true,
                }}
                variants={textAnimation}
                custom={1}
                className={styles.caption}
            >
                Пластиковые щелевые полы
            </motion.h3>
            <motion.p
                initial="hidden"
                whileInView="visible"
                viewport={{
                    amount: 0.1,
                    once: true,
                }}
                variants={textAnimation}
                custom={2}
                className={styles.text}
            >
                Щелевой пол — это двухуровневое покрытие, через которое
                осуществляется самосплавная система забора навоза, что в разы
                повышает показатели чистоты животноводческой фермы. По ряду
                причин, последнее время, все большую популярность набирают
                пластиковые щелевые полы.
            </motion.p>
            <motion.h3
                initial="hidden"
                whileInView="visible"
                viewport={{
                    amount: 0.1,
                    once: true,
                }}
                variants={textAnimation}
                custom={3}
                className={styles.caption}
            >
                Основные преимущества и характеристики:
            </motion.h3>
            <ul className={styles.list}>
                {slottedFloorsBenefits.map((item, index) => (
                    <motion.li
                        initial="hidden"
                        whileInView="visible"
                        viewport={{
                            amount: 0.1,
                            once: true,
                        }}
                        variants={textAnimation}
                        custom={index + 3}
                        key={index}
                    >
                        {item}
                    </motion.li>
                ))}
            </ul>
        </motion.div>
    );
};

export default SlottedFloorsSection;
