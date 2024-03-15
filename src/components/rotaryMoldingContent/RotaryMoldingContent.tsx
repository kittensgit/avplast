import { FC } from 'react';

import { benefitsRotaryMolding } from 'data/RotaryMoldingData';

import warning from 'assets/icons/exlamation_mark.png';

import RotaryMoldingProcess from './rotaryMoldingProcess/RotaryMoldingProcess';

import styles from './RotaryMoldingContent.module.css';

const RotaryMoldingContent: FC = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.about_wrapper}>
                <h1 className={styles.title}>
                    Производство методом ротационного формования
                </h1>
                <p className={styles.text}>
                    Особое внимание наша компания уделяет производству новых
                    изделий из полимеров или замене существующих на полимерные
                    аналоги, методом ротационного формования.
                </p>
                <p className={styles.text}>
                    Преимуществами данной технологии являются:
                </p>
                <ul className={styles.list}>
                    {benefitsRotaryMolding.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>
            <RotaryMoldingProcess />
            <div className={styles.warning}>
                <img src={warning} alt="warning" />
                <p>
                    Процесс, с момента первого контакта до готового к серийному
                    производству изделия, занимает от 40 до 200 дней
                </p>
            </div>
        </div>
    );
};

export default RotaryMoldingContent;
