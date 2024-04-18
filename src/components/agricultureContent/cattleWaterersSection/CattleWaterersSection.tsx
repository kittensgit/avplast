import { FC } from 'react';
import { motion } from 'framer-motion';

import {
    cattleWaterersBenefits,
    cattleWaterersImg,
    cattleWaterersOptionalEquipment,
} from 'data/AgricultureData';

import ImagesCollection from '../imagesCollection/ImagesCollection';

import styles from './CattleWaterersSection.module.css';

const CattleWaterersSection: FC = () => {
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
            <h2 className={styles.title}>Поилки для КРС</h2>
            <ImagesCollection
                images={cattleWaterersImg}
                title="Поилки для КРС"
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
                Поилки для беспривязного содержания КРС (25-30 голов)
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
                Предназначены для поения скота, находящегося в необогреваемых
                помещениях или на дворе (коровники беспривязной системы
                содержания скота, навесы стойловые беспривязного содержания),
                где температура может понизиться ниже 0°C.Они обеспечивают
                животным свободный доступ к воде, достаточное количество и
                быстрое пополнение ее из водопроводной сети, а так же постоянную
                температуру воды свыше 0°C в течение всего зимнего периода, при
                наружной температуре до -30°C.Защита поилки от замерзания
                обеспечивается электрическим подогревом.
            </motion.p>
            <motion.p
                initial="hidden"
                whileInView="visible"
                viewport={{
                    amount: 0.1,
                    once: true,
                }}
                variants={textAnimation}
                custom={3}
                className={styles.text}
            >
                При содержании скота необходимо правильно организовать процесс
                поения. Если корова испытывает нехватку воды, то уменьшается
                потребление корма, следовательно, падает молочная
                продуктивность. Чтобы животные много пили, вода в поилках должна
                быть чистой и без запахов. Для этого в конструкции нашей поилки
                предусмотрен слив, что значительно упрощает и качественно
                улучшает процесс ее чистки.
            </motion.p>
            <motion.h3
                initial="hidden"
                whileInView="visible"
                viewport={{
                    amount: 0.1,
                    once: true,
                }}
                variants={textAnimation}
                custom={4}
                className={styles.caption}
            >
                Основные преимущества и характеристики:
            </motion.h3>
            <ul className={styles.list}>
                {cattleWaterersBenefits.map((benefitItem, benefitIndex) => (
                    <motion.li
                        initial="hidden"
                        whileInView="visible"
                        viewport={{
                            amount: 0.1,
                            once: true,
                        }}
                        variants={textAnimation}
                        custom={benefitIndex + 4}
                        key={benefitIndex}
                    >
                        {benefitItem}
                    </motion.li>
                ))}
            </ul>
            <motion.h3
                initial="hidden"
                whileInView="visible"
                viewport={{
                    amount: 0.1,
                    once: true,
                }}
                variants={textAnimation}
                custom={12}
                className={styles.caption}
            >
                Дополнительное оборудование:
            </motion.h3>
            <ul className={styles.list}>
                {cattleWaterersOptionalEquipment
                    .slice(0, 2)
                    .map((item, index) => (
                        <motion.li
                            initial="hidden"
                            whileInView="visible"
                            viewport={{
                                amount: 0.1,
                                once: true,
                            }}
                            variants={textAnimation}
                            custom={index + 12}
                            key={index}
                        >
                            {item}
                        </motion.li>
                    ))}
            </ul>
            <motion.h3
                initial="hidden"
                whileInView="visible"
                viewport={{
                    amount: 0.1,
                    once: true,
                }}
                variants={textAnimation}
                custom={14}
                className={styles.caption}
            >
                Дополнительное оборудование для морозостойкости до -30°C:
            </motion.h3>
            <ul className={styles.list}>
                {cattleWaterersOptionalEquipment.slice(2).map((item, index) => (
                    <motion.li
                        initial="hidden"
                        whileInView="visible"
                        viewport={{
                            amount: 0.1,
                            once: true,
                        }}
                        variants={textAnimation}
                        custom={index + 14}
                        key={index}
                    >
                        {item}
                    </motion.li>
                ))}
            </ul>
        </motion.div>
    );
};

export default CattleWaterersSection;
