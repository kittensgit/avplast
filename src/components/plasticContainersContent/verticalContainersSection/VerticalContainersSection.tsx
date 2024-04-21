import { FC } from 'react';
import { motion } from 'framer-motion';

import {
    verticalContainersSliderData,
    verticalContainersTableData,
} from 'data/PlasticContainers';

import Slider from '../slider/Slider';
import Table from '../table/Table';

import styles from './VerticalContainersSection.module.css';

const VerticalContainersSection: FC = () => {
    const wrapperAnimation = {
        hidden: {
            y: -10,
            opacity: 0,
        },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                delay: 1.2,
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
        <motion.div variants={wrapperAnimation}>
            <motion.h2
                custom={1}
                variants={textAnimation}
                className={styles.title}
            >
                Емкости вертикальные
            </motion.h2>
            <motion.p
                custom={2}
                variants={textAnimation}
                className={styles.text}
            >
                <strong>Вертикальные емкости, баки, бочки</strong> предназначены
                преимущественно для стационарного хранения как пищевых
                продуктов, так и различных химических и агрессивных веществ.
                Емкости можно устанавливать как внутри помещений, так и на
                открытой поверхности, а также закапывать в грунт, соблюдая
                определенные технические условия. Комплектуются крышкой
                смотрового люка и резьбовыми отверстиями различных диаметров, в
                зависимости от конфигурации.
            </motion.p>
            <Table tableData={verticalContainersTableData} />
            {/* <Slider sliderData={verticalContainersSliderData} slidesCount={4} /> */}
        </motion.div>
    );
};

export default VerticalContainersSection;
