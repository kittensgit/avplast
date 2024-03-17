import { FC } from 'react';

import { IBuoyancyModules } from 'types/types';

import styles from './PontoonSystemsCards.module.css';

interface PontoonSystemsCardsProps {
    buoyancyModules: IBuoyancyModules[];
}

const PontoonSystemsCards: FC<PontoonSystemsCardsProps> = ({
    buoyancyModules,
}) => {
    return (
        <div className={styles.cards}>
            {buoyancyModules.map((itemCard, indexCard) => (
                <div key={indexCard} className={styles.card}>
                    <img src={itemCard.image} alt={itemCard.title} />
                    <div className={styles.info}>
                        <h5>{itemCard.title}</h5>
                        <ul>
                            {itemCard.description.map((itemList, indexList) => (
                                <li key={indexList}>{itemList}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default PontoonSystemsCards;
