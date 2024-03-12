import { FC } from 'react';

import Slider from './slider/Slider';
import Cards from './cards/Cards';

import styles from './HomeContent.module.css';

const HomeContent: FC = () => {
    return (
        <div>
            <div className="container">
                <Slider />
                <h1 className={styles.title}>
                    Доступные современные технологии производства и эксплутации
                    полимерных изделий
                </h1>
                <Cards />
            </div>
        </div>
    );
};

export default HomeContent;
