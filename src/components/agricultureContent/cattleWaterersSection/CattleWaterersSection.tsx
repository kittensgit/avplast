import { FC } from 'react';

import {
    cattleWaterersBenefits,
    cattleWaterersImg,
    cattleWaterersOptionalEquipment,
} from 'data/AgricultureData';

import ImagesCollection from '../imagesCollection/ImagesCollection';

import styles from './CattleWaterersSection.module.css';

const CattleWaterersSection: FC = () => {
    return (
        <div>
            <h2 className={styles.title}>Поилки для КРС</h2>
            <ImagesCollection
                images={cattleWaterersImg}
                title="Поилки для КРС"
            />
            <h3 className={styles.caption}>
                Поилки для беспривязного содержания КРС (25-30 голов)
            </h3>
            <p className={styles.text}>
                Предназначены для поения скота, находящегося в необогреваемых
                помещениях или на дворе (коровники беспривязной системы
                содержания скота, навесы стойловые беспривязного содержания),
                где температура может понизиться ниже 0°C.Они обеспечивают
                животным свободный доступ к воде, достаточное количество и
                быстрое пополнение ее из водопроводной сети, а так же постоянную
                температуру воды свыше 0°C в течение всего зимнего периода, при
                наружной температуре до -30°C.Защита поилки от замерзания
                обеспечивается электрическим подогревом.
            </p>
            <p className={styles.text}>
                При содержании скота необходимо правильно организовать процесс
                поения. Если корова испытывает нехватку воды, то уменьшается
                потребление корма, следовательно, падает молочная
                продуктивность. Чтобы животные много пили, вода в поилках должна
                быть чистой и без запахов. Для этого в конструкции нашей поилки
                предусмотрен слив, что значительно упрощает и качественно
                улучшает процесс ее чистки.
            </p>
            <h3 className={styles.caption}>
                Основные преимущества и характеристики:
            </h3>
            <ul className={styles.list}>
                {cattleWaterersBenefits.map((benefitItem, benefitIndex) => (
                    <li key={benefitIndex}>{benefitItem}</li>
                ))}
            </ul>
            <h3 className={styles.caption}>Дополнительное оборудование:</h3>
            <ul className={styles.list}>
                {cattleWaterersOptionalEquipment
                    .slice(0, 2)
                    .map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
            </ul>
            <h3 className={styles.caption}>
                Дополнительное оборудование для морозостойкости до -30°C:
            </h3>
            <ul className={styles.list}>
                {cattleWaterersOptionalEquipment.slice(2).map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
};

export default CattleWaterersSection;
