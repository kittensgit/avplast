import { FC } from 'react';
import { motion } from 'framer-motion';

import {
    slottedFloorPalletsBenefits,
    slottedFloorPalletsImg,
} from 'data/AgricultureData';

import ImagesCollection from '../imagesCollection/ImagesCollection';

import styles from './SlottedFloorPalletsSection.module.css';

const SlottedFloorPalletsSection: FC = () => {
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
            <h2 className={styles.title}>Поддоны под щелевые полы</h2>
            <ImagesCollection
                images={slottedFloorPalletsImg}
                title="Поддоны под щелевые полы"
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
                Пластиковые поддоны под станок для свиноматки
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
                Одним из важнейших мероприятий по снижению выбросов аммиака в
                местах содержания подсосных свиноматок является оборудование
                поддона под щелевым полом станка, который имеет специальную
                форму со стоком для навоза в самой нижней точке. Далее все
                поддоны могут быть объединены в единую систему навозоудаления
                свинарника.
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
                Основные преимущества и характеристики:
            </motion.h3>
            <ul className={styles.list}>
                {slottedFloorPalletsBenefits.map((item, index) => (
                    <motion.li
                        initial="hidden"
                        whileInView="visible"
                        viewport={{
                            amount: 0.1,
                            once: true,
                        }}
                        variants={textAnimation}
                        custom={index + 3}
                        key={index}
                    >
                        {item}
                    </motion.li>
                ))}
            </ul>
            <motion.b
                initial="hidden"
                whileInView="visible"
                viewport={{
                    amount: 0.1,
                    once: true,
                }}
                variants={textAnimation}
                custom={9}
                className={styles.important}
            >
                Имеем опыт установки систем удаления отходов и вентиляции на
                животноводческих комплексах под ключ.
            </motion.b>
        </motion.div>
    );
};

export default SlottedFloorPalletsSection;
