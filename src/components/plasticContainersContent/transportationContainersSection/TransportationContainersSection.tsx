import { FC } from 'react';

import {
    transportationContainersBenefits,
    transportationContainersTableData,
} from 'data/PlasticContainers';

import Table from '../table/Table';

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
        </div>
    );
};

export default TransportationContainersSection;
