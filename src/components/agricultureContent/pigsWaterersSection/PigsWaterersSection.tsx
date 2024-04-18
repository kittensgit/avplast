import { FC } from 'react';
import { motion } from 'framer-motion';

import {
    pigsWaterersBenefits,
    pigsWaterersBenefitsTechnology,
    pigsWaterersImg,
} from 'data/AgricultureData';

import ImagesCollection from '../imagesCollection/ImagesCollection';

import styles from './PigsWaterersSection.module.css';

const PigsWaterersSection: FC = () => {
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
                amount: 0.1,
                once: true,
            }}
            variants={wrapperAnimation}
        >
            <h2 className={styles.title}>Поилки для свиней</h2>
            <ImagesCollection
                images={pigsWaterersImg}
                title="Поилки для свиней"
            />
            <motion.h3
                variants={textAnimation}
                custom={1}
                initial="hidden"
                whileInView="visible"
                viewport={{
                    amount: 0.1,
                    once: true,
                }}
                className={styles.caption}
            >
                Энергосберегающие поилки для свиней ПС-2 (80 голов) и ПС-4 (160
                голов)
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
                Предназначены для поения свиней, содержащихся по так называемой
                «канадской технологии». Суть технологии заключается в содержании
                свиней крупными однородными группами на глубокой несменяемой
                подстилке, кормлении вволю сухими сбалансированными комбикормами
                при свободном доступе к воде. Технология применима для откорма
                свиней, содержания хряков, холостых и супоросных свиноматок и
                даже подсосных свиноматок с приплодом.
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
                Преимущества технологии:
            </motion.h3>
            <ul className={styles.list}>
                {pigsWaterersBenefitsTechnology.map((item, index) => (
                    <motion.li
                        initial="hidden"
                        whileInView="visible"
                        viewport={{
                            amount: 0.01,
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
            <motion.h3
                initial="hidden"
                whileInView="visible"
                viewport={{
                    amount: 0.1,
                    once: true,
                }}
                variants={textAnimation}
                custom={10}
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
                custom={11}
                className={styles.text}
            >
                Через заливную арматуру вода попадает во внутреннюю емкость
                поилки, а через переливные отверстия в места для поения. Свинье
                достаточно 1 раз показать, как открывается крышка, закрывающая
                место для поения, после чего она сама, мордой, открывает крышку
                и пьет, тем самым, обучает других. По мере выпивания воды, через
                арматуру пополняется ее уровень. Основной бункер снабжен сливным
                отверстием в самой нижней точке, для его опорожнения с целью
                чистки и обслуживания.
            </motion.p>
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
                Преимущества поилок:
            </motion.h3>
            <ul className={styles.list}>
                {pigsWaterersBenefits.map((item, index) => (
                    <motion.li
                        initial="hidden"
                        whileInView="visible"
                        viewport={{
                            amount: 0.05,
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
        </motion.div>
    );
};

export default PigsWaterersSection;
