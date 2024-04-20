import { FC } from 'react';
import { motion } from 'framer-motion';

import { reservoirsAndPoolsProperty } from 'data/ReservoirsPoolsData';

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
            <motion.h1
                custom={1}
                variants={textAnimation}
                className={styles.title}
            >
                Изготовление резервуаров и бассейнов
            </motion.h1>
            <motion.p
                custom={2}
                variants={textAnimation}
                className={styles.text}
            >
                Компания занимается разработкой и производством емкостей,
                резервуаров и бассейнов практически любых форм и объемов. В
                данном случае, за основу берется метод экструзионной сварки
                листовых полимеров — полиэтилена и полипропилена, благодаря
                наличию у них таких уникальных свойств как:
            </motion.p>
            <ul className={styles.list}>
                {reservoirsAndPoolsProperty.map((item, index) => (
                    <motion.li
                        custom={index + 2}
                        variants={textAnimation}
                        key={index}
                    >
                        {item}
                    </motion.li>
                ))}
            </ul>
            <motion.p
                custom={8}
                variants={textAnimation}
                className={styles.text}
            >
                Все изделия могут производиться из специального конструктивного
                пластика, из обычного листового пластика, усиленного
                металлической обрешеткой, из готовых блочных элементов,
                произведенных методом ротационного формования.
            </motion.p>
            <motion.p
                custom={9}
                variants={textAnimation}
                className={styles.text}
            >
                В ряде случаев, наиболее целесообразным, а то единственным
                решением, является защита уже готового металлического изделия
                полимерным покрытием (футеровка).
            </motion.p>
            <motion.p
                custom={10}
                variants={textAnimation}
                className={styles.text}
            >
                Возможно выполнения проектов как под ключ, так и по чертежам
                заказчика.
            </motion.p>
        </div>
    );
};

export default AboutSection;
