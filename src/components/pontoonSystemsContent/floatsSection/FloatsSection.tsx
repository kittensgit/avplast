import { FC } from 'react';

import { floatsImage } from 'data/PontoonSystemsData';

import styles from './FloatsSection.module.css';

const FloatsSection: FC = () => {
    return (
        <div>
            <h2 className={styles.caption}>Поплавки и поплавковые системы</h2>
            <p className={styles.text}>
                Для решения нестандартных задач нами разработана серия
                пластиковых поплавков различных длин и диаметров.
            </p>
            <p className={styles.text}>
                В некоторых случаях, использование поплавков более удобно, чем
                использование модулей плавучести.
            </p>
            <div className={styles.floats}>
                {floatsImage.map((item, index) => (
                    <img key={index} src={item} alt="поплавки" />
                ))}
            </div>
        </div>
    );
};

export default FloatsSection;
