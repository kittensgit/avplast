import { FC } from 'react';
import { motion } from 'framer-motion';

import {
    buoyancyModulesHigh,
    buoyancyModulesStandart,
} from 'data/PontoonSystemsData';

import PontoonSystemsCards from './cards/PontoonSystemsCards';

import styles from './BuoyancyModulesSection.module.css';

const BuoyancyModulesSection: FC = () => {
    const wrapperAnimation = {
        hidden: {
            y: 10,
            opacity: 0,
        },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                delay: 1.1,
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
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
                amount: 0.1,
                once: true,
            }}
            variants={wrapperAnimation}
        >
            <h2 className={styles.caption}>Модули плавучести</h2>
            <PontoonSystemsCards buoyancyModules={buoyancyModulesStandart} />
            <motion.h2
                initial="hidden"
                whileInView="visible"
                viewport={{
                    amount: 0.1,
                    once: true,
                }}
                variants={textAnimation}
                className={styles.caption}
            >
                Модули плавучести повышенной грузоподъемности
            </motion.h2>
            <PontoonSystemsCards buoyancyModules={buoyancyModulesHigh} />
        </motion.div>
    );
};

export default BuoyancyModulesSection;
