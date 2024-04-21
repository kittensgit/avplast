import { FC } from 'react';
import { motion } from 'framer-motion';

import { floatsTableData } from 'data/PontoonSystemsData';

import styles from './Table.module.css';

const Table: FC = () => {
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
            y: -10,
            opacity: 0,
        },
        visible: (custom: number) => ({
            y: 0,
            opacity: 1,
            transition: {
                delay: custom * 0.1,
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
                    <th>Водоизмещение, л</th>
                    <th>Нагрузка, кг</th>
                    <th>Толщина стенки, мм</th>
                    <th>Вес, кг</th>
                    <th>Диаметр, мм</th>
                    <th>Длина, мм</th>
                </motion.tr>
            </thead>
            <tbody>
                {floatsTableData.map((item, index) => (
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
                        <td data-title="Водоизмещение, л">
                            {item.displacement}
                        </td>
                        <td data-title="Нагрузка, кг">{item.load}</td>
                        <td data-title="Толщина стенки, мм">
                            {item.thickness}
                        </td>
                        <td data-title="Вес, кг">{item.weight}</td>
                        <td data-title="Диаметр, мм">{item.diametr}</td>
                        <td data-title="Длина, мм">{item.length}</td>
                    </motion.tr>
                ))}
            </tbody>
        </motion.table>
    );
};

export default Table;
