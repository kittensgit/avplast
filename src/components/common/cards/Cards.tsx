import { FC } from 'react';
import { Link } from 'react-router-dom';

import { ICardData } from 'types/types';

import styles from './Cards.module.css';

interface CardsProps {
    cardsData: ICardData[];
}

const Cards: FC<CardsProps> = ({ cardsData }) => {
    const scrollToTop = () => {
        window.scrollTo(0, 0);
    };
    return (
        <div className={styles.wrapper}>
            {cardsData.map((cardItem, index) => (
                <div key={index} className={styles.card}>
                    <img src={cardItem.image} alt={cardItem.title} />
                    <div className={styles.about}>
                        <h4 className={styles.name}>{cardItem.title}</h4>
                        <p className={styles.caption}>{cardItem.description}</p>
                        <Link
                            className={styles.link}
                            to={cardItem.link}
                            onClick={scrollToTop}
                        >
                            Узнать больше
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Cards;
