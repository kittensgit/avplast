import { FC } from 'react';

import {
    pigsWaterersBenefits,
    pigsWaterersBenefitsTechnology,
    pigsWaterersImg,
} from 'data/AgricultureData';

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
                {pigsWaterersBenefitsTechnology.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
            <h3 className={styles.caption}>Подробнее о принципе работы:</h3>
            <p className={styles.text}>
                Через заливную арматуру вода попадает во внутреннюю емкость
                поилки, а через переливные отверстия в места для поения. Свинье
                достаточно 1 раз показать, как открывается крышка, закрывающая
                место для поения, после чего она сама, мордой, открывает крышку
                и пьет, тем самым, обучает других. По мере выпивания воды, через
                арматуру пополняется ее уровень. Основной бункер снабжен сливным
                отверстием в самой нижней точке, для его опорожнения с целью
                чистки и обслуживания.
            </p>
            <h3 className={styles.caption}>Преимущества поилок:</h3>
            <ul className={styles.list}>
                {pigsWaterersBenefits.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
};

export default PigsWaterersSection;
