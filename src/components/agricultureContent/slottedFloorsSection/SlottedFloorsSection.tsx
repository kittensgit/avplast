import { FC } from 'react';

import { slottedFloorsBenefits, slottedFloorsImg } from 'data/AgricultureData';

import ImagesCollection from '../imagesCollection/ImagesCollection';

import styles from './SlottedFloorsSection.module.css';

const SlottedFloorsSection: FC = () => {
    return (
        <div>
            <h2 className={styles.title}>Щелевые полы</h2>
            <ImagesCollection images={slottedFloorsImg} title="Щелевые полы" />
            <h3 className={styles.caption}>Пластиковые щелевые полы</h3>
            <p className={styles.text}>
                Щелевой пол — это двухуровневое покрытие, через которое
                осуществляется самосплавная система забора навоза, что в разы
                повышает показатели чистоты животноводческой фермы. По ряду
                причин, последнее время, все большую популярность набирают
                пластиковые щелевые полы.
            </p>
            <h3 className={styles.caption}>
                Основные преимущества и характеристики:
            </h3>
            <ul className={styles.list}>
                {slottedFloorsBenefits.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
};

export default SlottedFloorsSection;
