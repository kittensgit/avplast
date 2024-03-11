import { FC } from 'react';

import styles from './Header.module.css';
import { Link } from 'react-router-dom';

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
