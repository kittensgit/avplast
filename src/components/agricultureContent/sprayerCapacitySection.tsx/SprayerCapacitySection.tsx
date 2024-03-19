import { FC } from 'react';

import { sprayerCapacityImg, sprayerCapacityInfo } from 'data/AgricultureData';

import ImagesCollection from '../imagesCollection/ImagesCollection';

import styles from './SprayerCapacitySection.module.css';

const SprayerCapacitySection: FC = () => {
    return (
        <div>
            <h2 className={styles.title}>Емкость на опрыскиватель ОП-1500</h2>
            <ImagesCollection
                images={sprayerCapacityImg}
                title="Емкость на опрыскиватель"
            />
            <h4 className={styles.caption}>
                Емкость на самоходный опрыскиватель на базе Т-16
            </h4>
            <ul className={styles.list}>
                {sprayerCapacityInfo.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
};

export default SprayerCapacitySection;
