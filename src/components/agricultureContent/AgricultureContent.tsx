import { FC } from 'react';

import AboutSection from './aboutSection/AboutSection';
import SprayerCapacitySection from './sprayerCapacitySection.tsx/SprayerCapacitySection';
import PigsWaterersSection from './pigsWaterersSection/PigsWaterersSection';
import BunkerFeedersPigsSection from './bunkerFeedersPigsSection/BunkerFeedersPigsSection';
import CattleWaterersSection from './cattleWaterersSection/CattleWaterersSection';

import styles from './AgricultureContent.module.css';

const AgricultureContent: FC = () => {
    return (
        <div className={styles.wrapper}>
            <AboutSection />
            <SprayerCapacitySection />
            <PigsWaterersSection />
            <BunkerFeedersPigsSection />
            <CattleWaterersSection />
        </div>
    );
};

export default AgricultureContent;
