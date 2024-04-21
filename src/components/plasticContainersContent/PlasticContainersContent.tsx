import { FC } from 'react';
import { motion } from 'framer-motion';

import AboutSection from './aboutSection/AboutSection';
import VerticalContainersSection from './verticalContainersSection/VerticalContainersSection';
import HorizontalContainersSection from './horizontalContainersSection/HorizontalContainersSection';
import TransportationContainersSection from './transportationContainersSection/TransportationContainersSection';

import styles from './PlasticContainersContent.module.css';

const PlasticContainersContent: FC = () => {
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
            {/* <AboutSection /> */}
            {/* <VerticalContainersSection /> */}
            {/* <HorizontalContainersSection /> */}
            <TransportationContainersSection />
            {/* <motion.a
                initial="hidden"
                whileInView="visible"
                viewport={{
                    amount: 0.3,
                    once: true,
                }}
                variants={textAnimation}
                custom={2}
                className={styles.link}
                href="#!"
            >
                Посмотреть или скачать прайс
            </motion.a> */}
        </motion.div>
    );
};

export default PlasticContainersContent;
