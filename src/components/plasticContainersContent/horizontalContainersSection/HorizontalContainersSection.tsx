import { FC } from 'react';
import { motion } from 'framer-motion';

import {
    horisontalContainersSliderData,
    horisontalContainersTableData,
} from 'data/PlasticContainers';

import Table from '../table/Table';
import Slider from '../slider/Slider';

import styles from './HorizontalContainersSection.module.css';

const HorizontalContainersSection: FC = () => {
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
                Емкости горизонтальные
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
                <strong>Горизонтальные емкости, баки, бочки</strong>
                предназначены, как и вертикальные, для стационарного хранения
                пищевых продуктов и различных химических и агрессивных веществ.
                Как правило, имеют более устойчивую форму и, в некоторых
                случаях, могут быть использованы для перевозки.
            </motion.p>
            <Table tableData={horisontalContainersTableData} />
            <Slider
                sliderData={horisontalContainersSliderData}
                slidesCount={3}
            />
        </motion.div>
    );
};

export default HorizontalContainersSection;
