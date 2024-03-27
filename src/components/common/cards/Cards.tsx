import { FC } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import { ICardData } from 'types/types';

import styles from './Cards.module.css';

interface CardsProps {
    cardsData: ICardData[];
}

const Cards: FC<CardsProps> = ({ cardsData }) => {
    const scrollToTop = () => {
        window.scrollTo(0, 0);
    };

    const cardsAnimation = {
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
    const cardAnimation = {
        hidden: { y: -20, opacity: 0 },
        visible: (custom: number) => ({
            y: 0,
            opacity: 1,
            transition: {
                delay: custom * 0.2,
            },
        }),
    };

    return (
        <motion.div variants={cardsAnimation} className={styles.wrapper}>
            {cardsData.map((cardItem, index) => (
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{
                        amount: 0.1,
                        once: true,
                    }}
                    variants={cardAnimation}
                    custom={index + 1}
                    key={index}
                    className={styles.card}
                >
                    <Link to={cardItem.link} onClick={scrollToTop}>
                        <img src={cardItem.image} alt={cardItem.title} />
                        <div className={styles.about}>
                            <h4 className={styles.name}>{cardItem.title}</h4>
                            <p className={styles.caption}>
                                {cardItem.description}
                            </p>
                        </div>
                    </Link>
                </motion.div>
            ))}
        </motion.div>
    );
};

export default Cards;
