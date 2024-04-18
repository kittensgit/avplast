import { FC } from 'react';
import { motion } from 'framer-motion';

import {
    bunkerFeedersPigsBenefits,
    bunkerFeedersPigsImg,
} from 'data/AgricultureData';

import ImagesCollection from '../imagesCollection/ImagesCollection';

import styles from './BunkerFeedersPigsSection.module.css';

const BunkerFeedersPigsSection: FC = () => {
    const wrapperAnimation = {
        hidden: {
            y: -10,
            opacity: 0,
        },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
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
            viewport={{
                amount: 0.2,
                once: true,
            }}
            variants={wrapperAnimation}
        >
            <h2 className={styles.title}>Бункерные кормушки для свиней</h2>
            <ImagesCollection
                images={bunkerFeedersPigsImg}
                title="Бункерные кормушки для свиней"
            />
            <motion.h3
                initial="hidden"
                whileInView="visible"
                viewport={{
                    amount: 0.1,
                    once: true,
                }}
                variants={textAnimation}
                custom={1}
                className={styles.caption}
            >
                Бункерные кормушки для свиней Б-20 (160 голов)
            </motion.h3>
            <motion.p
                initial="hidden"
                whileInView="visible"
                viewport={{
                    amount: 0.1,
                    once: true,
                }}
                variants={textAnimation}
                custom={2}
                className={styles.text}
            >
                Предназначены для кормления свиней, содержащихся по так
                называемой «канадской технологии». Суть технологии заключается в
                содержании свиней крупными однородными группами на глубокой
                несменяемой подстилке, кормлении вволю сухими сбалансированными
                комбикормами при свободном доступе к воде.
            </motion.p>
            <motion.h3
                initial="hidden"
                whileInView="visible"
                viewport={{
                    amount: 0.1,
                    once: true,
                }}
                variants={textAnimation}
                custom={3}
                className={styles.caption}
            >
                Подробнее о принципе работы:
            </motion.h3>
            <motion.p
                initial="hidden"
                whileInView="visible"
                viewport={{
                    amount: 0.1,
                    once: true,
                }}
                variants={textAnimation}
                custom={4}
                className={styles.text}
            >
                Сухой корм подается через верхний люк либо по автоматическому
                трубопроводу, либо засыпается ковшом. Попадая на внутренний
                конус, корм равномерно распределяется по всему периметру к
                кормоместам. Дозирование корма осуществляется путем перемещения
                бункера относительно основания кормушки.
            </motion.p>
            <motion.h3
                initial="hidden"
                whileInView="visible"
                viewport={{
                    amount: 0.1,
                    once: true,
                }}
                variants={textAnimation}
                custom={5}
                className={styles.caption}
            >
                Преимущества и особенности бункерных кормушек:
            </motion.h3>
            <ul className={styles.list}>
                {bunkerFeedersPigsBenefits.map((item, index) => (
                    <motion.li
                        initial="hidden"
                        whileInView="visible"
                        viewport={{
                            amount: 0.1,
                            once: true,
                        }}
                        variants={textAnimation}
                        custom={index + 5}
                        key={index}
                    >
                        {item}
                    </motion.li>
                ))}
            </ul>
        </motion.div>
    );
};

export default BunkerFeedersPigsSection;
