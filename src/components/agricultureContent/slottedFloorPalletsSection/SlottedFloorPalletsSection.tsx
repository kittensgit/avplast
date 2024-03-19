import { FC } from 'react';

import {
    slottedFloorPalletsBenefits,
    slottedFloorPalletsImg,
} from 'data/AgricultureData';

import ImagesCollection from '../imagesCollection/ImagesCollection';

import styles from './SlottedFloorPalletsSection.module.css';

const SlottedFloorPalletsSection: FC = () => {
    return (
        <div>
            <h2 className={styles.title}>Поддоны под щелевые полы</h2>
            <ImagesCollection
                images={slottedFloorPalletsImg}
                title="Поддоны под щелевые полы"
            />
            <h3 className={styles.caption}>
                Пластиковые поддоны под станок для свиноматки
            </h3>
            <p className={styles.text}>
                Одним из важнейших мероприятий по снижению выбросов аммиака в
                местах содержания подсосных свиноматок является оборудование
                поддона под щелевым полом станка, который имеет специальную
                форму со стоком для навоза в самой нижней точке. Далее все
                поддоны могут быть объединены в единую систему навозоудаления
                свинарника.
            </p>
            <h3 className={styles.caption}>
                Основные преимущества и характеристики:
            </h3>
            <ul className={styles.list}>
                {slottedFloorPalletsBenefits.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
            <b className={styles.important}>
                Имеем опыт установки систем удаления отходов и вентиляции на
                животноводческих комплексах под ключ.
            </b>
        </div>
    );
};

export default SlottedFloorPalletsSection;
