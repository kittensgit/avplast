import { FC } from 'react';
import { motion } from 'framer-motion';

import { floatsImage } from 'data/PontoonSystemsData';

import styles from './FloatsSection.module.css';

const FloatsSection: FC = () => {
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
            variants={textAnimation}
            viewport={{
                once: true,
                amount: 0.1,
            }}
        >
            <h2 className={styles.caption}>Поплавки и поплавковые системы</h2>
            <motion.p
                custom={1}
                variants={textAnimation}
                className={styles.text}
            >
                Для решения нестандартных задач нами разработана серия
                пластиковых поплавков различных длин и диаметров.
            </motion.p>
            <motion.p
                custom={2}
                variants={textAnimation}
                className={styles.text}
            >
                В некоторых случаях, использование поплавков более удобно, чем
                использование модулей плавучести.
            </motion.p>
            <div className={styles.floats}>
                {floatsImage.map((item, index) => (
                    <motion.img
                        custom={index + 2}
                        variants={textAnimation}
                        key={index}
                        src={item}
                        alt="поплавки"
                    />
                ))}
            </div>
        </motion.div>
    );
};

export default FloatsSection;
