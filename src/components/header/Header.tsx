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
                                        <Link to="/remont-plastikovykh-bakov">
                                            Ремонт пластиковых баков
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to={
                                                '/izgotavlenie-rezervuarov-i-basseinov'
                                            }
                                        >
                                            Изготавление резервуаров и бассейнов
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to={
                                                '/proizvodstvo-metodom-rotacionnogo-formovaniya'
                                            }
                                        >
                                            Производство методом ротационного
                                            формования
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="!#">Продукция</a>
                                <ul>
                                    <li>
                                        <Link to={''}>
                                            Понтонные системы, модули
                                            плавучести, поплавки
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to={''}>
                                            Полимерная продукция для сельского
                                            хозяйства
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to={''}>
                                            Пластиковые емкости, баки, бочки
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="!#">Блог</a>
                            </li>
                            <li>
                                <a href="!#">Контакты</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;
