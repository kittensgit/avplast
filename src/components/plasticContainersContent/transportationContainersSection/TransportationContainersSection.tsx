import { FC } from 'react';
import { motion } from 'framer-motion';

import {
    transportationContainersBenefits,
    transportationContainersSliderData,
    transportationContainersTableData,
} from 'data/PlasticContainers';

import Table from '../table/Table';
import Slider from '../slider/Slider';

import styles from './TransportationContainersSection.module.css';

const TransportationContainersSection: FC = () => {
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
                once: true,
                amount: 0.1,
            }}
            variants={wrapperAnimation}
        >
            <motion.h2
                initial="hidden"
                whileInView="visible"
                viewport={{
                    once: true,
                    amount: 0.1,
                }}
                custom={1}
                variants={textAnimation}
                className={styles.title}
            >
                Емкости для траспортировки
            </motion.h2>
            <motion.p
                initial="hidden"
                whileInView="visible"
                viewport={{
                    once: true,
                    amount: 0.1,
                }}
                custom={2}
                variants={textAnimation}
                className={styles.text}
            >
                <strong>Емкости, баки, бочки для транспортировки</strong> — это
                специальные изделия, разработанные на базе самых устойчивых и
                прочных емкостей из всего ассортимента компании.
            </motion.p>
            <ul className={styles.list}>
                {transportationContainersBenefits.map((item, index) => (
                    <motion.li
                        initial="hidden"
                        whileInView="visible"
                        viewport={{
                            once: true,
                            amount: 0.1,
                        }}
                        custom={index + 2}
                        variants={textAnimation}
                        key={index}
                    >
                        {item}
                    </motion.li>
                ))}
            </ul>
            <Table tableData={transportationContainersTableData} />
            <Slider
                sliderData={transportationContainersSliderData}
                slidesCount={3}
            />
        </motion.div>
    );
};

export default TransportationContainersSection;
