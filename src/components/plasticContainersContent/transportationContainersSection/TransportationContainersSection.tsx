import { FC } from 'react';

import {
    transportationContainersBenefits,
    transportationContainersSliderData,
    transportationContainersTableData,
} from 'data/PlasticContainers';

import Table from '../table/Table';
import Slider from '../slider/Slider';

import styles from './TransportationContainersSection.module.css';

const TransportationContainersSection: FC = () => {
    return (
        <div>
            <h2 className={styles.title}>Емкости для траспортировки</h2>
            <p className={styles.text}>
                <strong>Емкости, баки, бочки для транспортировки</strong> — это
                специальные изделия, разработанные на базе самых устойчивых и
                прочных емкостей из всего ассортимента компании.
            </p>
            <ul className={styles.list}>
                {transportationContainersBenefits.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
            <Table tableData={transportationContainersTableData} />
            <Slider
                sliderData={transportationContainersSliderData}
                slidesCount={3}
            />
        </div>
    );
};

export default TransportationContainersSection;
