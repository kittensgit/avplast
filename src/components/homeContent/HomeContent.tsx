import { FC } from 'react';
import { Link } from 'react-router-dom';

import remontPlastikovyhBakov from 'assets/home/remont-plastikovyh-bakov.jpg';
import izgotovlenieRezervuarovBassejnov from 'assets/home/izgotovlenie-rezervuarov-i-bassejnov.jpg';
import rotacionnogoFormovaniya from 'assets/home/proizvodstvo-metodom-rotacionnogo-formovaniya.jpg';
import pontonnyeSistemy from 'assets/home/pontonnye-sistemy-moduli-plavuchesti-poplavki.jpg';
import polimernayaProdukciya from 'assets/home/polimernaya-produkciya-dlya-selskogo-hozyajstva.jpg';
import plastikovyeEmkosti from 'assets/home/plastikovye-emkosti-baki-bochki.jpg';

import Slider from './Slider/Slider';

import styles from './HomeContent.module.css';

const HomeContent: FC = () => {
    return (
        <div>
            <div className="container">
                <Slider />
                <h1 className={styles.title}>
                    Доступные современные технологии производства и эксплутации
                    полимерных изделий
                </h1>
                <div className={styles.wrapper}>
                    <figure className={styles.card}>
                        <img
                            src={remontPlastikovyhBakov}
                            alt="Ремонт пластиковых баков"
                        />
                        <div className={styles.about}>
                            <strong className={styles.name}>
                                Ремонт пластиковых баков
                            </strong>
                            <figcaption className={styles.caption}>
                                Обследование, ремонт и реставрация пластиковых
                                баков, топливных баков, емкостей, резервуаров,
                                септиков. бассейнов, опрыскивателей как по
                                месту, так и с выездом на объект
                            </figcaption>
                            <Link className={styles.link} to={'/'}>
                                Узнать больше
                            </Link>
                        </div>
                    </figure>
                    <figure className={styles.card}>
                        <img
                            src={izgotovlenieRezervuarovBassejnov}
                            alt="Изготавление резервуаров и бассейнов"
                        />
                        <div className={styles.about}>
                            <figcaption className={styles.name}>
                                Изготавление резервуаров и бассейнов
                            </figcaption>
                            <figcaption className={styles.caption}>
                                Изготовление резервуаров, бассейнов,
                                гальванических ванн, емкостей для систем
                                водоподготовки, фильтрации, очистки сточных вод
                                — любых конфигураций и объемов
                            </figcaption>
                            <Link className={styles.link} to={'/'}>
                                Узнать больше
                            </Link>
                        </div>
                    </figure>
                    <figure className={styles.card}>
                        <img
                            src={rotacionnogoFormovaniya}
                            alt="Производство методом ротационного формования"
                        />
                        <div className={styles.about}>
                            <figcaption className={styles.name}>
                                Производство методом ротационного формования
                            </figcaption>
                            <figcaption className={styles.caption}>
                                Разработка чертежей, подбор материала,
                                производство форм и серийных изделий по
                                техзаданию заказчика методом ротационного
                                формования
                            </figcaption>
                            <Link className={styles.link} to={'/'}>
                                Узнать больше
                            </Link>
                        </div>
                    </figure>
                    <figure className={styles.card}>
                        <img
                            src={pontonnyeSistemy}
                            alt="Понтонные системы, модули плавучести, поплавки"
                        />
                        <div className={styles.about}>
                            <figcaption className={styles.name}>
                                Понтонные системы, модули плавучести, поплавки
                            </figcaption>
                            <figcaption className={styles.caption}>
                                Широкий спектр продукции для сельского хозяйства
                                из пластика: кормушки и поилки для свиней,
                                поилки для КРС опрыскиватели, поддоны, системы
                                вентиляции и ряд новых проектов.
                            </figcaption>
                            <Link className={styles.link} to={'/'}>
                                Узнать больше
                            </Link>
                        </div>
                    </figure>
                    <figure className={styles.card}>
                        <img
                            src={polimernayaProdukciya}
                            alt="Полимерная продукция для сельского хозяйства"
                        />
                        <div className={styles.about}>
                            <figcaption className={styles.name}>
                                Полимерная продукция для сельского хозяйства
                            </figcaption>
                            <figcaption className={styles.caption}>
                                Производство и реализация пластиковых емкостей,
                                баков, бочек вертикального и горизонтального
                                типа как для пищевых продуктов так и для
                                технических и агрессивных веществ.
                            </figcaption>
                            <Link className={styles.link} to={'/'}>
                                Узнать больше
                            </Link>
                        </div>
                    </figure>
                    <figure className={styles.card}>
                        <img
                            src={plastikovyeEmkosti}
                            alt="Пластиковые емкости, баки, бочки"
                        />
                        <div className={styles.about}>
                            <figcaption className={styles.name}>
                                Пластиковые емкости, баки, бочки
                            </figcaption>
                            <figcaption className={styles.caption}>
                                Разработка чертежей, подбор материала,
                                производство форм и серийных изделий по
                                техзаданию заказчика методом ротационного
                                формования
                            </figcaption>
                            <Link className={styles.link} to={'/'}>
                                Узнать больше
                            </Link>
                        </div>
                    </figure>
                </div>
            </div>
        </div>
    );
};

export default HomeContent;
