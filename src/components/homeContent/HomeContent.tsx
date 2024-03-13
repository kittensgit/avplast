import { FC } from 'react';

import Slider from './slider/Slider';
import Cards from './cards/Cards';

import styles from './HomeContent.module.css';
import Benefits from './benefits/Benefits';

const HomeContent: FC = () => {
    return (
        <div className="container">
            <div className={styles.wrapper}>
                <Slider />
                <h1 className={styles.title}>
                    Доступные современные технологии производства и эксплутации
                    полимерных изделий
                </h1>
                <Cards />
                <h2 className={styles.benefits_title}>
                    Преумущества работы с нами
                </h2>
                <Benefits />
            </div>
        </div>
    );
};

export default HomeContent;
