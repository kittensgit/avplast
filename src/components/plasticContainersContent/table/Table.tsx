import { FC } from 'react';

import { IPlasticContainersTableItem } from 'types/types';

import styles from './Table.module.css';

interface TableProps {
    tableData: IPlasticContainersTableItem[];
}

const Table: FC<TableProps> = ({ tableData }) => {
    return (
        <table className={styles.table}>
            <thead>
                <tr>
                    <th>Наименование</th>
                    <th>Объем, л</th>
                    <th>Высота, мм</th>
                    <th>Ширина диаметр, мм</th>
                    <th>Длина, мм</th>
                    <th>Диаметр горловины, мм</th>
                    <th>Толщина стенки, мм</th>
                    <th>Вес, кг</th>
                </tr>
            </thead>
            <tbody>
                {tableData.map((item, index) => (
                    <tr key={index}>
                        <td>{item.name}</td>
                        <td>{item.volume}</td>
                        <td>{item.height}</td>
                        <td>{item.width}</td>
                        <td>{item.length}</td>
                        <td>{item.diametr}</td>
                        <td>{item.thickness}</td>
                        <td>{item.weigth}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default Table;
