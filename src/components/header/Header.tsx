import { FC } from 'react';

import styles from './Header.module.css';
import { Link } from 'react-router-dom';

const Header: FC = () => {
    return (
        <header>
            <div className="container">
                <div className={styles.header}>
                    <div>
                        <Link to={'/'}>
                            <strong className={styles.logo}>AVplast</strong>
                            <p className={styles.caption}>available plastic</p>
                        </Link>
                    </div>
                    <p className={styles.number}>09X XXX XX XX</p>
                    <nav className={styles.header_nav}>
                        <ul>
                            <li>
                                <Link to={'/'}>Главная</Link>
                            </li>
                            <li>
                                <a href="!#">Услуги</a>
                            </li>
                            <li>
                                <a href="!#">Продукция</a>
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
