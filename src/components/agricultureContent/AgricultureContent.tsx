import { FC } from 'react';

import AboutSection from './aboutSection/AboutSection';
import SprayerCapacitySection from './sprayerCapacitySection.tsx/SprayerCapacitySection';
import PigsWaterersSection from './pigsWaterersSection/PigsWaterersSection';
import BunkerFeedersPigsSection from './bunkerFeedersPigsSection/BunkerFeedersPigsSection';
import CattleWaterersSection from './cattleWaterersSection/CattleWaterersSection';
import SlottedFloorPalletsSection from './slottedFloorPalletsSection/SlottedFloorPalletsSection';
import SlottedFloorsSection from './slottedFloorsSection/SlottedFloorsSection';

import styles from './AgricultureContent.module.css';

const AgricultureContent: FC = () => {
    return (
        <div className={styles.wrapper}>
            <AboutSection />
            <SprayerCapacitySection />
            <PigsWaterersSection />
            <BunkerFeedersPigsSection />
            <CattleWaterersSection />
            <SlottedFloorPalletsSection />
            <SlottedFloorsSection />
            <a className={styles.link} href="#!">
                Посмотреть или скачать прайс
            </a>
        </div>
    );
};

export default AgricultureContent;