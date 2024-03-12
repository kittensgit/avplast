import { FC } from 'react';
import { Link } from 'react-router-dom';

import homeData from 'data/HomeData';

import styles from './Cards.module.css';

const Cards: FC = () => {
    return (
        <div className={styles.wrapper}>
            {homeData.map((cardItem, index) => (
                <div key={index} className={styles.card}>
                    <img src={cardItem.image} alt={cardItem.title} />
                    <div className={styles.about}>
                        <h4 className={styles.name}>{cardItem.title}</h4>
                        <p className={styles.caption}>{cardItem.description}</p>
                        <Link className={styles.link} to={cardItem.link}>
                            Узнать больше
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Cards;
