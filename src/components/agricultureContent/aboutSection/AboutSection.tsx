import { FC } from 'react';
import { motion } from 'framer-motion';

import { agricultureBenefits } from 'data/AgricultureData';

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
        <div className={styles.about}>
            <motion.h1
                custom={1}
                variants={textAnimation}
                className={styles.title}
            >
                Полимерная продукция для сельского хозяйства
            </motion.h1>
            <motion.p
                custom={2}
                variants={textAnimation}
                className={styles.text}
            >
                Производство полимерной продукции для различных отраслей
                сельского хозяйства является весомым направлением для нашей
                компании. Прежде всего — это замена существующих изделий на
                аналоги из пластика по ряду причин:
            </motion.p>
            <ul className={styles.list}>
                {agricultureBenefits.map((item, index) => (
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
                Так же, несколько проектов было реализовано с нуля, от чистой
                идеи до готового изделия. Мы всегда открыты для плодотворного и
                взаимовыгодного сотрудничества.
            </motion.p>
        </div>
    );
};

export default AboutSection;
