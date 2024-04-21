import { FC } from 'react';
import { motion } from 'framer-motion';

import AboutSection from './aboutSection/AboutSection';
import SprayerCapacitySection from './sprayerCapacitySection.tsx/SprayerCapacitySection';
import PigsWaterersSection from './pigsWaterersSection/PigsWaterersSection';
import BunkerFeedersPigsSection from './bunkerFeedersPigsSection/BunkerFeedersPigsSection';
import CattleWaterersSection from './cattleWaterersSection/CattleWaterersSection';
import SlottedFloorPalletsSection from './slottedFloorPalletsSection/SlottedFloorPalletsSection';
import SlottedFloorsSection from './slottedFloorsSection/SlottedFloorsSection';

import styles from './AgricultureContent.module.css';

const AgricultureContent: FC = () => {
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
            <SprayerCapacitySection />
            {/* <PigsWaterersSection />
            <BunkerFeedersPigsSection />
            <CattleWaterersSection />
            <SlottedFloorPalletsSection />
            <SlottedFloorsSection />
            <motion.a
                initial="hidden"
                whileInView="visible"
                viewport={{
                    amount: 0.3,
                    once: true,
                }}
                variants={textAnimation}
                custom={5}
                className={styles.link}
                href="#!"
            >
                Посмотреть или скачать прайс
            </motion.a> */}
        </motion.div>
    );
};

export default AgricultureContent;
