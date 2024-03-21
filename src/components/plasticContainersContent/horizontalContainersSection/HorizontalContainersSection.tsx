import { FC } from 'react';

import {
    horisontalContainersSliderData,
    horisontalContainersTableData,
} from 'data/PlasticContainers';

import Table from '../table/Table';
import Slider from '../slider/Slider';

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
            <Table tableData={horisontalContainersTableData} />
            <Slider
                sliderData={horisontalContainersSliderData}
                slidesCount={3}
            />
        </div>
    );
};

export default HorizontalContainersSection;
