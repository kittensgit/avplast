import { FC, useState } from 'react';
import { Link } from 'react-router-dom';

import closeIcon from 'assets/icons/close.png';
import burgerMenuIcon from 'assets/icons/burger_menu.png';

import styles from './Header.module.css';

const Header: FC = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const handleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleCloseMenu = () => {
        setIsOpen(false);
    };

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
                        <ul
                            className={
                                isOpen
                                    ? [
                                          styles.category_list,
                                          styles.active,
                                      ].join(' ')
                                    : styles.category_list
                            }
                            onClick={handleCloseMenu}
                        >
                            <li>
                                <Link to={'/'}>Главная</Link>
                            </li>
                            <li>
                                <Link to={'/services'}>Услуги</Link>
                            </li>
                            <li>
                                <Link to={'/production'}>Продукция</Link>
                            </li>
                            <li>
                                <a href="!#">Блог</a>
                            </li>
                            <li>
                                <Link to={'contacts'}>Контакты</Link>
                            </li>
                        </ul>
                        <div onClick={handleMenu} className={styles.mobile_btn}>
                            {isOpen ? (
                                <img src={closeIcon} alt="close" />
                            ) : (
                                <img src={burgerMenuIcon} alt="menu" />
                            )}
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;
