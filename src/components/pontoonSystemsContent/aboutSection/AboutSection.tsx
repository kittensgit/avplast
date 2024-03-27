import { FC } from 'react';
import { motion } from 'framer-motion';

import {
    polyethyleneBenefits,
    rotaryMoldingBenefits,
} from 'data/PontoonSystemsData';

import styles from './AboutSection.module.css';

const AboutSection: FC = () => {
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
        <div className={styles.about_wrapper}>
            <h1 className={styles.title}>
                Понтонные системы, модули плавучести, поплавки
            </h1>
            <motion.p
                custom={1}
                variants={textAnimation}
                className={styles.text}
            >
                С 2012 года наша компания производит и реализует ряд пластиковых
                изделий для речной и морской отрасли: модули плавучести,
                понтоны, поплавки и буи. На базе наших модулей плавучести можно
                собирать практически любые конструкции на воде: причальные
                пальцы, причалы, понтонные переходы и мостики, садки для
                разведения рыбы, платформы под земснаряды, прогулочные
                платформы, плавдачи, хаусботы, марины, стоянки для катеров.
            </motion.p>
            <motion.p
                custom={2}
                variants={textAnimation}
                className={styles.text}
            >
                Изделия производятся оптимальным для их специфики способом —
                методом ротационного формования (центробежного литья).
                Преимущества данного метода:
            </motion.p>
            <ul className={styles.list}>
                {rotaryMoldingBenefits.map((item, index) => (
                    <motion.li
                        custom={index + 3}
                        variants={textAnimation}
                        key={index}
                    >
                        {item}
                    </motion.li>
                ))}
            </ul>
            <motion.p
                custom={5}
                variants={textAnimation}
                className={styles.text}
            >
                Основной материал — первичный пищевой полиэтилен. Преимущества
                использования полиэтилена:
            </motion.p>
            <ul className={styles.list}>
                {polyethyleneBenefits.map((item, index) => (
                    <motion.li
                        custom={index + 5}
                        variants={textAnimation}
                        key={index}
                    >
                        {item}
                    </motion.li>
                ))}
            </ul>
        </div>
    );
};

export default AboutSection;
