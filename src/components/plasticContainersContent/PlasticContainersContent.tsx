import { FC } from 'react';

import AboutSection from './aboutSection/AboutSection';

import styles from './PlasticContainersContent.module.css';

const PlasticContainersContent: FC = () => {
    return (
        <div className={styles.wrapper}>
            <AboutSection />
        </div>
    );
};

export default PlasticContainersContent;
