import { FC } from 'react';
import { motion } from 'framer-motion';

import { pontoonSystemsExamples } from 'data/PontoonSystemsData';

import styles from './Examples.module.css';

const Examples: FC = () => {
    const cardAnimation = {
        hidden: {
            y: 10,
            opacity: 0,
        },
        visible: (custom: number) => ({
            y: 0,
            opacity: 1,
            transition: {
                delay: custom * 0.125,
                duration: 1,
                type: 'tween',
                ease: 'easeInOut',
            },
        }),
    };

    return (
        <div className={styles.examples}>
            {pontoonSystemsExamples.map((example, exampleIndex) => (
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{
                        amount: 0.1,
                        once: true,
                    }}
                    variants={cardAnimation}
                    custom={exampleIndex + 1}
                    key={exampleIndex}
                    className={styles.example}
                >
                    <img src={example.images[0]} alt={example.title} />
                    <div className={styles.info}>
                        <h3>{example.title}</h3>
                        <ul>
                            {example.description.map((itemList, indexList) => (
                                <li key={indexList}>{itemList}</li>
                            ))}
                        </ul>
                    </div>
                    <img src={example.images[1]} alt={example.title} />
                </motion.div>
            ))}
        </div>
    );
};

export default Examples;
