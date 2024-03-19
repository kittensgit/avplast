import { FC } from 'react';

import { pigsWaterersBenefits, pigsWaterersImg } from 'data/AgricultureData';

import ImagesCollection from '../imagesCollection/ImagesCollection';

import styles from './PigsWaterersSection.module.css';

const PigsWaterersSection: FC = () => {
    return (
        <div>
            <h2 className={styles.title}>Поилки для свиней</h2>
            <ImagesCollection
                images={pigsWaterersImg}
                title="Поилки для свиней"
            />
            <h3 className={styles.caption}>
                Энергосберегающие поилки для свиней ПС-2 (80 голов) и ПС-4 (160
                голов)
            </h3>
            <p className={styles.text}>
                Предназначены для поения свиней, содержащихся по так называемой
                «канадской технологии». Суть технологии заключается в содержании
                свиней крупными однородными группами на глубокой несменяемой
                подстилке, кормлении вволю сухими сбалансированными комбикормами
                при свободном доступе к воде. Технология применима для откорма
                свиней, содержания хряков, холостых и супоросных свиноматок и
                даже подсосных свиноматок с приплодом.
            </p>
            <h3 className={styles.caption}>Преимущества технологии:</h3>
            <ul className={styles.list}>
                {pigsWaterersBenefits.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
};

export default PigsWaterersSection;
