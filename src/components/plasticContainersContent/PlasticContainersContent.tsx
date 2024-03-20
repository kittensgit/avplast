import { FC } from 'react';

import AboutSection from './aboutSection/AboutSection';
import VerticalContainersSection from './verticalContainersSection/VerticalContainersSection';
import HorizontalContainersSection from './horizontalContainersSection/HorizontalContainersSection';
import TransportationContainersSection from './transportationContainersSection/TransportationContainersSection';

import styles from './PlasticContainersContent.module.css';

const PlasticContainersContent: FC = () => {
    return (
        <div className={styles.wrapper}>
            <AboutSection />
            <VerticalContainersSection />
            <HorizontalContainersSection />
            <TransportationContainersSection />
        </div>
    );
};

export default PlasticContainersContent;
