import { FC } from 'react';
import { motion } from 'framer-motion';

import factIcon from 'assets/icons/fact.png';
import { floatsTableData } from 'data/PontoonSystemsData';

import AboutSection from './aboutSection/AboutSection';
import BuoyancyModulesSection from './buoyancyModulesSection/BuoyancyModulesSection';
import FloatsSection from './floatsSection/FloatsSection';
import Examples from './examples/Examples';

import styles from './PontoonSystemsContent.module.css';

const PontoonSystemsContent: FC = () => {
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
        <motion.div
            initial="hidden"
            whileInView="visible"
            custom={1}
            variants={textAnimation}
            className={styles.wrapper}
        >
            <AboutSection />
            <BuoyancyModulesSection />
            <motion.div
                initial="hidden"
                whileInView="visible"
                custom={1}
                variants={textAnimation}
                className={styles.fact}
                viewport={{
                    once: true,
                    amount: 0.1,
                }}
            >
                <img src={factIcon} alt="факт" />
                <p>
                    Благодаря специальным закладным элементам, заформованным в
                    тело модуля, достаточно набора основных бытовых
                    электроинструментов и пары человек, что бы собрать
                    практически любую платформу
                </p>
            </motion.div>
            <motion.h2
                initial="hidden"
                whileInView="visible"
                custom={1}
                variants={textAnimation}
                viewport={{
                    once: true,
                    amount: 0.1,
                }}
                className={styles.caption}
            >
                Примеры типовых решений на базе плавучих модулей
            </motion.h2>
            <Examples />
            <motion.div
                initial="hidden"
                whileInView="visible"
                custom={1}
                variants={textAnimation}
                className={styles.fact}
                viewport={{
                    once: true,
                    amount: 0.1,
                }}
            >
                <img src={factIcon} alt="факт" />
                <p>
                    Форма, толщина стенки и особенности материала модулей
                    плавучести позволяют им выдерживать ледовые обжатия, что
                    дает возможность не вынимать конструкцию из воды на зимний
                    период
                </p>
            </motion.div>
            <FloatsSection />
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
                            <td>{item.displacement}</td>
                            <td>{item.load}</td>
                            <td>{item.thickness}</td>
                            <td>{item.weight}</td>
                            <td>{item.diametr}</td>
                            <td>{item.length}</td>
                        </motion.tr>
                    ))}
                </tbody>
            </motion.table>
            <motion.a
                className={styles.link}
                initial="hidden"
                whileInView="visible"
                custom={1}
                variants={textAnimation}
                viewport={{
                    once: true,
                    amount: 0.1,
                }}
                href="!#"
            >
                Посмотреть или скачать прайс
            </motion.a>
        </motion.div>
    );
};

export default PontoonSystemsContent;
