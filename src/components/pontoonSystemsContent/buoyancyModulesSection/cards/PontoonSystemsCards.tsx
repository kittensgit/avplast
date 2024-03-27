import { FC } from 'react';
import { motion } from 'framer-motion';

import { IBuoyancyModules } from 'types/types';

import styles from './PontoonSystemsCards.module.css';

interface PontoonSystemsCardsProps {
    buoyancyModules: IBuoyancyModules[];
}

const PontoonSystemsCards: FC<PontoonSystemsCardsProps> = ({
    buoyancyModules,
}) => {
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
        <div className={styles.cards}>
            {buoyancyModules.map((itemCard, indexCard) => (
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{
                        amount: 0.1,
                        once: true,
                    }}
                    variants={cardAnimation}
                    custom={indexCard + 1}
                    key={indexCard}
                    className={styles.card}
                >
                    <img
                        className={styles.cardImg}
                        src={itemCard.image}
                        alt={itemCard.title}
                    />
                    <div className={styles.info}>
                        <h5>{itemCard.title}</h5>
                        <ul>
                            {itemCard.description.map((itemList, indexList) => (
                                <li key={indexList}>{itemList}</li>
                            ))}
                        </ul>
                    </div>
                    <img
                        className={styles.decor}
                        src={itemCard.decorImg}
                        alt="decor"
                    />
                </motion.div>
            ))}
        </div>
    );
};

export default PontoonSystemsCards;
