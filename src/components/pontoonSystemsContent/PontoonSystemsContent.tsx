import { FC } from 'react';
import { motion } from 'framer-motion';

import factIcon from 'assets/icons/fact.png';

import AboutSection from './aboutSection/AboutSection';
import BuoyancyModulesSection from './buoyancyModulesSection/BuoyancyModulesSection';
import FloatsSection from './floatsSection/FloatsSection';
import Examples from './examples/Examples';
import Table from './table/Table';

import styles from './PontoonSystemsContent.module.css';

const PontoonSystemsContent: FC = () => {
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
            <Table />
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
