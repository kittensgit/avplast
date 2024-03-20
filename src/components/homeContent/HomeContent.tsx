import { FC } from 'react';

import cardsData from 'data/CardsData';

import Cards from '../common/cards/Cards';

import Slider from './slider/Slider';
import Benefits from './benefits/Benefits';

import styles from './HomeContent.module.css';

const HomeContent: FC = () => {
    return (
        <div className="container">
            <div className={styles.wrapper}>
                <Slider />
                <h1 className={styles.title}>
                    Доступные современные технологии производства и эксплутации
                    полимерных изделий
                </h1>
                <Cards cardsData={cardsData} />
                <h2 className={styles.benefits_title}>
                    Преумущества работы с нами
                </h2>
                <Benefits />
            </div>
        </div>
    );
};

export default HomeContent;
