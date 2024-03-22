import { FC } from 'react';
import { Link } from 'react-router-dom';

import styles from './Header.module.css';

const Header: FC = () => {
    return (
        <header>
            <div className="container">
                <div className={styles.header}>
                    <Link className={styles.header_logo} to={'/'}>
                        <strong className={styles.logo}>
                            <span>AV</span>plast
                        </strong>
                        <p className={styles.caption}>available plastic</p>
                    </Link>
                    <p className={styles.number}>092 788 90 22</p>
                    <nav className={styles.header_nav}>
                        <ul>
                            <li>
                                <Link to={'/'}>Главная</Link>
                            </li>
                            <li>
                                <Link to={'/services'}>Услуги</Link>
                                <ul>
                                    <li>
                                        <Link to="/services/remont-plastikovykh-bakov">
                                            Ремонт пластиковых баков
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to={
                                                '/services/izgotavlenie-rezervuarov-i-basseinov'
                                            }
                                        >
                                            Изготавление резервуаров и бассейнов
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to={
                                                '/services/proizvodstvo-metodom-rotacionnogo-formovaniya'
                                            }
                                        >
                                            Производство методом ротационного
                                            формования
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <Link to={'/production'}>Продукция</Link>
                                <ul>
                                    <li>
                                        <Link
                                            to={
                                                '/production/pontonnye-sistemy-moduli-plavuchesti-poplavki'
                                            }
                                        >
                                            Понтонные системы, модули
                                            плавучести, поплавки
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to={
                                                '/production/polymer-products-agriculture'
                                            }
                                        >
                                            Полимерная продукция для сельского
                                            хозяйства
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to={
                                                '/production/plastikovye-emkosti-baki-bochki'
                                            }
                                        >
                                            Пластиковые емкости, баки, бочки
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="!#">Блог</a>
                            </li>
                            <li>
                                <Link to={'contacts'}>Контакты</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;
