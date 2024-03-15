import { FC } from 'react';

import { reservoirsAndPoolsProperty } from 'data/ReservoirsPoolsData';

import ReservoirsAndPoolsCards from './reservoirsAndPoolsCards/ReservoirsAndPoolsCards';

import styles from './ReservoirsAndPoolsContent.module.css';

const ReservoirsAndPoolsContent: FC = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.about_wrapper}>
                <h1 className={styles.title}>
                    Изготовление резервуаров и бассейнов
                </h1>
                <p className={styles.text}>
                    Компания занимается разработкой и производством емкостей,
                    резервуаров и бассейнов практически любых форм и объемов. В
                    данном случае, за основу берется метод экструзионной сварки
                    листовых полимеров — полиэтилена и полипропилена, благодаря
                    наличию у них таких уникальных свойств как:
                </p>
                <ul className={styles.list}>
                    {reservoirsAndPoolsProperty.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
                <p className={styles.text}>
                    Все изделия могут производиться из специального
                    конструктивного пластика, из обычного листового пластика,
                    усиленного металлической обрешеткой, из готовых блочных
                    элементов, произведенных методом ротационного формования.
                </p>
                <p className={styles.text}>
                    В ряде случаев, наиболее целесообразным, а то единственным
                    решением, является защита уже готового металлического
                    изделия полимерным покрытием (футеровка).
                </p>
                <p className={styles.text}>
                    Возможно выполнения проектов как под ключ, так и по чертежам
                    заказчика.
                </p>
            </div>
            <ReservoirsAndPoolsCards />
        </div>
    );
};

export default ReservoirsAndPoolsContent;
