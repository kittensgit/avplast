import { FC } from 'react';

import {
    buoyancyModulesHigh,
    buoyancyModulesStandart,
    polyethyleneBenefits,
    rotaryMoldingBenefits,
} from 'data/PontoonSystemsData';

import factIcon from 'assets/icons/fact.png';

import PontoonSystemsCards from './pontoonSystemsCards/PontoonSystemsCards';

import styles from './PontoonSystemsContent.module.css';
import PontoonSystemsExamples from './pontoonSystemsExamples/PontoonSystemsExamples';

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
            <h2 className={styles.caption}>Модули плавучести</h2>
            <PontoonSystemsCards buoyancyModules={buoyancyModulesStandart} />
            <h2 className={styles.caption}>
                Модули плавучести повышенной грузоподъемности
            </h2>
            <PontoonSystemsCards buoyancyModules={buoyancyModulesHigh} />
            <div className={styles.fact}>
                <img src={factIcon} alt="fact" />
                <p>
                    Благодаря специальным закладным элементам, заформованным в
                    тело модуля, достаточно набора основных бытовых
                    электроинструментов и пары человек, что бы собрать
                    практически любую платформу
                </p>
            </div>
            <h2 className={styles.caption}>
                Примеры типовых решений на базе плавучих модулей
            </h2>
            <PontoonSystemsExamples />
            <div className={styles.fact}>
                <img src={factIcon} alt="fact" />
                <p>
                    Форма, толщина стенки и особенности материала модулей
                    плавучести позволяют им выдерживать ледовые обжатия, что
                    дает возможность не вынимать конструкцию из воды на зимний
                    период
                </p>
            </div>
        </div>
    );
};

export default PontoonSystemsContent;
