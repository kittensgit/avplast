import { FC } from 'react';

import tabHorCont from 'assets/production/plasticContainers/tab-gor-emk.png';

import styles from './HorizontalContainersSection.module.css';

const HorizontalContainersSection: FC = () => {
    return (
        <div>
            <h2 className={styles.title}>Емкости горизонтальные</h2>
            <p className={styles.text}>
                <strong>Горизонтальные емкости, баки, бочки</strong>
                предназначены, как и вертикальные, для стационарного хранения
                пищевых продуктов и различных химических и агрессивных веществ.
                Как правило, имеют более устойчивую форму и, в некоторых
                случаях, могут быть использованы для перевозки.
            </p>
            <img
                className={styles.image}
                src={tabHorCont}
                alt="Емкости горизонтальные"
            />
        </div>
    );
};

export default HorizontalContainersSection;
