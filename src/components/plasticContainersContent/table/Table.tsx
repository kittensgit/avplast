import { FC } from 'react';
import { motion } from 'framer-motion';

import { IPlasticContainersTableItem } from 'types/types';

import styles from './Table.module.css';

interface TableProps {
    tableData: IPlasticContainersTableItem[];
}

const Table: FC<TableProps> = ({ tableData }) => {
    const tableAnimation = {
        hidden: {
            y: -10,
            opacity: 0,
        },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                delay: 1,
                duration: 1,
                type: 'tween',
                ease: 'easeInOut',
            },
        },
    };
    const textAnimation = {
        hidden: {
            opacity: 0,
        },
        visible: (custom: number) => ({
            opacity: 1,
            transition: {
                delay: custom * 0.05,
                duration: 1,
                type: 'tween',
                ease: 'easeInOut',
            },
        }),
    };
    return (
        <motion.table variants={tableAnimation} className={styles.table}>
            <thead>
                <motion.tr custom={1} variants={textAnimation}>
                    <th>Наименование</th>
                    <th>Объем, л</th>
                    <th>Высота, мм</th>
                    <th>Ширина диаметр, мм</th>
                    <th>Длина, мм</th>
                    <th>Диаметр горловины, мм</th>
                    <th>Толщина стенки, мм</th>
                    <th>Вес, кг</th>
                </motion.tr>
            </thead>
            <tbody>
                {tableData.map((item, index) => (
                    <motion.tr
                        initial="hidden"
                        whileInView="visible"
                        viewport={{
                            once: true,
                            amount: 0.05,
                        }}
                        variants={textAnimation}
                        custom={index + 1}
                        key={index}
                    >
                        <td data-title="Наименование">{item.name}</td>
                        <td data-title="Объем, л">{item.volume}</td>
                        <td data-title="Высота, мм">{item.height}</td>
                        <td data-title="Ширина диаметр, мм">{item.width}</td>
                        <td data-title="Длина, мм">{item.length}</td>
                        <td data-title="Диаметр горловины, мм">
                            {item.diametr}
                        </td>
                        <td data-title="Толщина стенки, мм">
                            {item.thickness}
                        </td>
                        <td data-title="Вес, кг">{item.weigth}</td>
                    </motion.tr>
                ))}
            </tbody>
        </motion.table>
    );
};

export default Table;
