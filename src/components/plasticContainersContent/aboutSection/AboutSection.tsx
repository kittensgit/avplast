import { FC } from 'react';
import { motion } from 'framer-motion';

import { plasticContainersPrinciples } from 'data/PlasticContainers';

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
                Пластиковые емкости, баки, бочки
            </motion.h1>
            <motion.p
                custom={2}
                variants={textAnimation}
                className={styles.text}
            >
                На сегодняшний день пластиковые емкости, баки, бочки прочно
                вошли в обиход различных сфер хозяйственной деятельности
                человека. Это легкая и пищевая промышленность, сельское и
                приусадебное хозяйство хозяйство, бытовая сфера. Компания имеет
                большой опыт в сфере производства и эксплуатации пластиковых
                емкостей. Наши основные принципы таковы:
            </motion.p>
            <ul className={styles.list}>
                {plasticContainersPrinciples.map((item, index) => (
                    <motion.li
                        custom={index + 2}
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
