import { FC, useState } from 'react';
import { motion } from 'framer-motion';

import phoneIcon from 'assets/icons/phone.png';
import emailIcon from 'assets/icons/email.png';
import locationIcon from 'assets/icons/location.png';
import downloadIcon from 'assets/icons/download.png';

import styles from './ContactsContent.module.css';

const ContactsContent: FC = () => {
    const [userData, setUserData] = useState({
        name: '',
        email: '',
        number: '',
        message: '',
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setUserData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        console.log(userData);
        setUserData({
            name: '',
            email: '',
            number: '',
            message: '',
        });
    };

    const wrapperAnimation = {
        hidden: {
            y: -10,
            opacity: 0,
        },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 1,
                type: 'tween',
                ease: 'easeInOut',
            },
        },
    };

    const textAnimation = {
        hidden: {
            opacity: 0,
        },
        visible: (custom: number) => ({
            opacity: 1,
            transition: {
                delay: custom * 0.1,
                duration: 1,
                type: 'tween',
                ease: 'easeIn',
            },
        }),
    };

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            variants={wrapperAnimation}
            className={styles.wrapper}
        >
            <div className={styles.contact_info}>
                <div className={styles.contact_item}>
                    <img src={locationIcon} alt="" />
                    <h3>Адрес</h3>
                    <p>Пр. Богдана Хмельницкого 156а, г.Днепр</p>
                </div>
                <div className={styles.contact_item}>
                    <img src={phoneIcon} alt="" />
                    <h3>Телефон</h3>
                    <p>+38 089 809 47 78</p>
                    <p>+38 089 787 89 78</p>
                </div>
                <div className={styles.contact_item}>
                    <img src={emailIcon} alt="" />
                    <h3>E-mail</h3>
                    <p>nn@gmail.com</p>
                </div>
                <div className={styles.contact_item}>
                    <img src={downloadIcon} alt="" />
                    <h3>Скачать прайс</h3>
                    <a href="!#">Емкости</a>
                    <a href="!#">Модули плавучести</a>
                    <a href="!#">СХ</a>
                </div>
            </div>
            <div className={styles.cta}>
                <div className={styles.cta_form}>
                    <motion.h2 custom={1} variants={textAnimation}>
                        Напишите нам
                    </motion.h2>
                    <form>
                        <motion.input
                            custom={2}
                            variants={textAnimation}
                            type="text"
                            name="name"
                            value={userData.name}
                            onChange={handleChange}
                            placeholder="Введите свое имя"
                        />
                        <motion.input
                            custom={3}
                            variants={textAnimation}
                            type="email"
                            name="email"
                            value={userData.email}
                            onChange={handleChange}
                            placeholder="Введите свой email"
                        />
                        <motion.input
                            custom={4}
                            variants={textAnimation}
                            type="tel"
                            name="number"
                            value={userData.number}
                            onChange={handleChange}
                            placeholder="Введите свой телефонный номер"
                        />
                        <motion.textarea
                            custom={5}
                            variants={textAnimation}
                            name="message"
                            value={userData.message}
                            onChange={handleChange}
                            placeholder="Введите сообщение"
                        ></motion.textarea>
                        <motion.button
                            custom={6}
                            variants={textAnimation}
                            type="button"
                            onClick={handleSubmit}
                        >
                            Отправить
                        </motion.button>
                    </form>
                </div>
                <motion.div
                    custom={2}
                    variants={textAnimation}
                    className={styles.map}
                >
                    <iframe
                        title="Google Map"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d662.3933842191892!2d34.9983349285757!3d48.38792798880297!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40dbfb2f5b99dc79%3A0x5f79a248b53d477a!2z0L_RgNC-0YHQv9C10LrRgiDQkdC-0LPQtNCw0L3QsCDQpdC80LXQu9GM0L3QuNGG0YzQutC-0LPQviwgMTU20JAsINCU0L3RltC_0YDQviwg0JTQvdGW0L_RgNC-0L_QtdGC0YDQvtCy0YHRjNC60LAg0L7QsdC70LDRgdGC0YwsIDQ5MDAw!5e0!3m2!1suk!2sua!4v1711110978234!5m2!1suk!2sua"
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default ContactsContent;
