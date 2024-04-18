import { FC } from 'react';
import { motion } from 'framer-motion';

import { sprayerCapacityImg, sprayerCapacityInfo } from 'data/AgricultureData';

import ImagesCollection from '../imagesCollection/ImagesCollection';

import styles from './SprayerCapacitySection.module.css';

const SprayerCapacitySection: FC = () => {
    const wrapperAnimation = {
        hidden: {
            y: -10,
            opacity: 0,
        },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                delay: 1.2,
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
                delay: custom * 0.3,
                duration: 1,
                type: 'tween',
                ease: 'easeInOut',
            },
        }),
    };
    return (
        <motion.div variants={wrapperAnimation}>
            <h2 className={styles.title}>Емкость на опрыскиватель ОП-1500</h2>
            <ImagesCollection
                images={sprayerCapacityImg}
                title="Емкость на опрыскиватель"
            />
            <motion.h4
                custom={1}
                variants={textAnimation}
                className={styles.caption}
            >
                Емкость на самоходный опрыскиватель на базе Т-16
            </motion.h4>
            <ul className={styles.list}>
                {sprayerCapacityInfo.map((item, index) => (
                    <motion.li
                        custom={index + 2}
                        variants={textAnimation}
                        key={index}
                    >
                        {item}
                    </motion.li>
                ))}
            </ul>
        </motion.div>
    );
};

export default SprayerCapacitySection;
