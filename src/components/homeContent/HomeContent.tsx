import { FC } from 'react';
import { Link } from 'react-router-dom';

import bak from 'assets/bak1.jpg';
import bak1 from 'assets/bax2.jpg';
import bak2 from 'assets/3.jpg';
import bak3 from 'assets/pont.jpg';
import bak4 from 'assets/poli.jpg';
import bak5 from 'assets/pla.jpg';

import styles from './HomeContent.module.css';

const HomeContent: FC = () => {
    return (
        <div>
            <h1 className={styles.title}>
                Доступные современные технологии производства и эксплутации
                полимерных изделий
            </h1>
            <div className={styles.wrapper}>
                <figure className={styles.card}>
                    <img src={bak} alt="bak1" />
                    <div className={styles.about}>
                        <figcaption className={styles.name}>
                            Ремонт пластиковых баков
                        </figcaption>
                        <figcaption className={styles.caption}>
                            Обследование, ремонт и реставрация пластиковых
                            баков, топливных баков, емкостей, резервуаров,
                            септиков. бассейнов, опрыскивателей как по месту,
                            так и с выездом на объект
                        </figcaption>
                        <Link className={styles.link} to={'/'}>
                            Узнать больше
                        </Link>
                    </div>
                </figure>
                <figure className={styles.card}>
                    <img src={bak1} alt="bak1" />
                    <div className={styles.about}>
                        <figcaption className={styles.name}>
                            Изготавление резервуаров и бассейнов
                        </figcaption>
                        <figcaption className={styles.caption}>
                            Изготовление резервуаров, бассейнов, гальванических
                            ванн, емкостей для систем водоподготовки,
                            фильтрации, очистки сточных вод — любых конфигураций
                            и объемов
                        </figcaption>
                        <Link className={styles.link} to={'/'}>
                            Узнать больше
                        </Link>
                    </div>
                </figure>
                <figure className={styles.card}>
                    <img src={bak2} alt="bak1" />
                    <div className={styles.about}>
                        <figcaption className={styles.name}>
                            Производство методом ротационного формования
                        </figcaption>
                        <figcaption className={styles.caption}>
                            Разработка чертежей, подбор материала, производство
                            форм и серийных изделий по техзаданию заказчика
                            методом ротационного формования
                        </figcaption>
                        <Link className={styles.link} to={'/'}>
                            Узнать больше
                        </Link>
                    </div>
                </figure>
                <figure className={styles.card}>
                    <img src={bak3} alt="bak1" />
                    <div className={styles.about}>
                        <figcaption className={styles.name}>
                            Понтонные системы, модули плавучести, поплавки
                        </figcaption>
                        <figcaption className={styles.caption}>
                            Широкий спектр продукции для сельского хозяйства из
                            пластика: кормушки и поилки для свиней, поилки для
                            КРС опрыскиватели, поддоны, системы вентиляции и ряд
                            новых проектов.
                        </figcaption>
                        <Link className={styles.link} to={'/'}>
                            Узнать больше
                        </Link>
                    </div>
                </figure>
                <figure className={styles.card}>
                    <img src={bak4} alt="bak1" />
                    <div className={styles.about}>
                        <figcaption className={styles.name}>
                            Полимерная продукция для сельского хозяйства
                        </figcaption>
                        <figcaption className={styles.caption}>
                            Производство и реализация пластиковых емкостей,
                            баков, бочек вертикального и горизонтального типа
                            как для пищевых продуктов так и для технических и
                            агрессивных веществ.
                        </figcaption>
                        <Link className={styles.link} to={'/'}>
                            Узнать больше
                        </Link>
                    </div>
                </figure>
                <figure className={styles.card}>
                    <img src={bak5} alt="bak1" />
                    <div className={styles.about}>
                        <figcaption className={styles.name}>
                            Пластиковые емкости, баки, бочки
                        </figcaption>
                        <figcaption className={styles.caption}>
                            Разработка чертежей, подбор материала, производство
                            форм и серийных изделий по техзаданию заказчика
                            методом ротационного формования
                        </figcaption>
                        <Link className={styles.link} to={'/'}>
                            Узнать больше
                        </Link>
                    </div>
                </figure>
            </div>
        </div>
    );
};

export default HomeContent;
