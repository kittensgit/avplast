import { FC } from 'react';

import {
    bunkerFeedersPigsBenefits,
    bunkerFeedersPigsImg,
} from 'data/AgricultureData';

import ImagesCollection from '../imagesCollection/ImagesCollection';

import styles from './BunkerFeedersPigsSection.module.css';

const BunkerFeedersPigsSection: FC = () => {
    return (
        <div>
            <h2 className={styles.title}>Бункерные кормушки для свиней</h2>
            <ImagesCollection
                images={bunkerFeedersPigsImg}
                title="Бункерные кормушки для свиней"
            />
            <h3 className={styles.caption}>
                Бункерные кормушки для свиней Б-20 (160 голов)
            </h3>
            <p className={styles.text}>
                Предназначены для кормления свиней, содержащихся по так
                называемой «канадской технологии». Суть технологии заключается в
                содержании свиней крупными однородными группами на глубокой
                несменяемой подстилке, кормлении вволю сухими сбалансированными
                комбикормами при свободном доступе к воде.
            </p>
            <h3 className={styles.caption}>Подробнее о принципе работы:</h3>
            <p className={styles.text}>
                Сухой корм подается через верхний люк либо по автоматическому
                трубопроводу, либо засыпается ковшом. Попадая на внутренний
                конус, корм равномерно распределяется по всему периметру к
                кормоместам. Дозирование корма осуществляется путем перемещения
                бункера относительно основания кормушки.
            </p>
            <h3 className={styles.caption}>
                Преимущества и особенности бункерных кормушек:
            </h3>
            <ul className={styles.list}>
                {bunkerFeedersPigsBenefits.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
};

export default BunkerFeedersPigsSection;
