import { FC } from 'react';

import {
    polyethyleneBenefits,
    rotaryMoldingBenefits,
} from 'data/PontoonSystemsData';

import styles from './PontoonSystemsContent.module.css';

const PontoonSystemsContent: FC = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.about_wrapper}>
                <h1 className={styles.title}>
                    Понтонные системы, модули плавучести, поплавки
                </h1>
                <p className={styles.text}>
                    С 2012 года наша компания производит и реализует ряд
                    пластиковых изделий для речной и морской отрасли: модули
                    плавучести, понтоны, поплавки и буи. На базе наших модулей
                    плавучести можно собирать практически любые конструкции на
                    воде: причальные пальцы, причалы, понтонные переходы и
                    мостики, садки для разведения рыбы, платформы под
                    земснаряды, прогулочные платформы, плавдачи, хаусботы,
                    марины, стоянки для катеров.
                </p>
                <p className={styles.text}>
                    Изделия производятся оптимальным для их специфики способом —
                    методом ротационного формования (центробежного литья).
                    Преимущества данного метода:
                </p>
                <ul className={styles.list}>
                    {rotaryMoldingBenefits.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
                <p className={styles.text}>
                    Основной материал — первичный пищевой полиэтилен.
                    Преимущества использования полиэтилена:
                </p>
                <ul className={styles.list}>
                    {polyethyleneBenefits.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default PontoonSystemsContent;
