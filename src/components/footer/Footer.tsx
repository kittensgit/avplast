import { FC } from 'react';
import { Link } from 'react-router-dom';

import styles from './Footer.module.css';

const Footer: FC = () => {
    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.footer_content}>
                    <div className={styles.footer_item}>
                        <Link className={styles.footer_logo} to={'/'}>
                            <strong className={styles.logo}>
                                <span>AV</span>plast
                            </strong>
                            <p className={styles.caption}>available plastic</p>
                        </Link>
                    </div>
                    <div className={styles.footer_item}>
                        <h4>График работы:</h4>
                        <b>Производство:</b>
                        <p>Пн – Пт 9.00 – 17.00</p>
                        <hr />
                        <b>Ремонт и обслуживание:</b>
                        <p>Без перерывов и выходных </p>
                    </div>
                    <div className={styles.footer_item}>
                        <h4>По всем вопросам звоните, пишите:</h4>
                        <p>+38 095 003 44 67</p>
                        <p>+38 092 003 98 55</p>
                        <b>noname@gmail.com</b>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
