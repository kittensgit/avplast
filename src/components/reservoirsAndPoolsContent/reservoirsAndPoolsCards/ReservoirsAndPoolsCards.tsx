import { FC } from 'react';

import { reservoirsAndPoolsData } from 'data/ReservoirsPoolsData';

import ReservoirsAndPoolsCard from './reservoirsAndPoolsCards/ReservoirsAndPoolsCard';

import styles from './ReservoirsAndPoolsCards.module.css';

const ReservoirsAndPoolsCards: FC = () => {
    return (
        <div className={styles.wrapper}>
            {reservoirsAndPoolsData.map((item, index) => (
                <ReservoirsAndPoolsCard
                    key={index}
                    title={item.title}
                    images={item.images}
                    list={item.list}
                />
            ))}
        </div>
    );
};

export default ReservoirsAndPoolsCards;
