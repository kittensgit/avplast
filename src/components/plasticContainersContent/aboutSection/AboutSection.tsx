import { FC } from 'react';

import { plasticContainersPrinciples } from 'data/PlasticContainers';

import styles from './AboutSection.module.css';

const AboutSection: FC = () => {
    return (
        <div className={styles.about}>
            <h1 className={styles.title}>Пластиковые емкости, баки, бочки</h1>
            <p className={styles.text}>
                На сегодняшний день пластиковые емкости, баки, бочки прочно
                вошли в обиход различных сфер хозяйственной деятельности
                человека. Это легкая и пищевая промышленность, сельское и
                приусадебное хозяйство хозяйство, бытовая сфера. Компания имеет
                большой опыт в сфере производства и эксплуатации пластиковых
                емкостей. Наши основные принципы таковы:
            </p>
            <ul className={styles.list}>
                {plasticContainersPrinciples.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
};

export default AboutSection;
