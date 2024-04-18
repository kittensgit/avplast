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
                delay: custom * 0.075,
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
                        <td>{item.name}</td>
                        <td>{item.volume}</td>
                        <td>{item.height}</td>
                        <td>{item.width}</td>
                        <td>{item.length}</td>
                        <td>{item.diametr}</td>
                        <td>{item.thickness}</td>
                        <td>{item.weigth}</td>
                    </motion.tr>
                ))}
            </tbody>
        </motion.table>
    );
};

export default Table;
