import { FC } from 'react';
import { motion } from 'framer-motion';

import benefitsData from 'data/BenefitsData';

import styles from './Benefits.module.css';

const Benefits: FC = () => {
    const benefitsAnimation = {
        hidden: {
            y: -10,
            opacity: 0,
        },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                delay: 1,
                duration: 1,
            },
        },
    };
    const benefitAnimation = {
        hidden: { y: -30, opacity: 0 },
        visible: (custom: number) => ({
            y: 0,
            opacity: 1,
            transition: {
                delay: custom * 0.2,
            },
        }),
    };

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            variants={benefitsAnimation}
            className={styles.benefits}
        >
            <div className={styles.benefits_content}>
                {benefitsData.slice(0, 2).map((benefitsItem, index) => (
                    <motion.div
                        variants={benefitAnimation}
                        custom={index + 1}
                        viewport={{
                            amount: 0.1,
                            once: true,
                        }}
                        className={styles.benefits_item}
                        key={index}
                    >
                        <img
                            src={benefitsItem.image}
                            alt={benefitsItem.title}
                        />
                        <div className={styles.benefits_item_info}>
                            <h3>{benefitsItem.title}</h3>
                            <p>{benefitsItem.description}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
            <div className={styles.benefits_content}>
                {benefitsData.slice(2).map((benefitsItem, index) => (
                    <motion.div
                        viewport={{
                            amount: 0.1,
                            once: true,
                        }}
                        variants={benefitAnimation}
                        custom={index + 1}
                        className={styles.benefits_item}
                        key={index}
                    >
                        <img
                            src={benefitsItem.image}
                            alt={benefitsItem.title}
                        />
                        <div className={styles.benefits_item_info}>
                            <h3>{benefitsItem.title}</h3>
                            <p>{benefitsItem.description}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
};

export default Benefits;
