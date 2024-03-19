import { FC } from 'react';

import factIcon from 'assets/icons/fact.png';
import table from 'assets/production/pontoonSystems/table.png';

import AboutSection from './aboutSection/AboutSection';
import BuoyancyModulesSection from './buoyancyModulesSection/BuoyancyModulesSection';
import FloatsSection from './floatsSection/FloatsSection';
import Examples from './examples/Examples';

import styles from './PontoonSystemsContent.module.css';

const PontoonSystemsContent: FC = () => {
    return (
        <div className={styles.wrapper}>
            <AboutSection />
            <BuoyancyModulesSection />
            <div className={styles.fact}>
                <img src={factIcon} alt="факт" />
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
            <Examples />
            <div className={styles.fact}>
                <img src={factIcon} alt="факт" />
                <p>
                    Форма, толщина стенки и особенности материала модулей
                    плавучести позволяют им выдерживать ледовые обжатия, что
                    дает возможность не вынимать конструкцию из воды на зимний
                    период
                </p>
            </div>
            <FloatsSection />
            <img className={styles.table} src={table} alt="таблица" />
            <a className={styles.link} href="!#">
                Посмотреть или скачать прайс
            </a>
        </div>
    );
};

export default PontoonSystemsContent;
