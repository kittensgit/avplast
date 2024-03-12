import { FC } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';

import kormushki from 'assets/home/slider/bunkernye-kormushki-dlya-svinej.jpg';
import opryskivateli from 'assets/home/slider/emkosti-na-opryskivateli.jpg';
import pogreba from 'assets/home/slider/plastikovye-pogreba.jpg';
import emkosti from 'assets/home/slider/plastikovye-emkosti-ot-100-do-10000-litrov.jpg';
import rotoformy from 'assets/home/slider/ehskiz-rotoformy.jpg';
import bassejny from 'assets/home/slider/plastikovye-bassejny.jpg';
import moduli from 'assets/home/slider/plavuchie-doma-moduli-plavuchesti.jpg';
import remontTopliv from 'assets/home/slider/remont-plastikovyh-toplivnyh-bakov.jpg';
import remontEmkostej from 'assets/home/slider/remont-plastikovyh-emkostej-lyuboj-slozhnosti.jpg';
import poilki from 'assets/home/slider/poilki-dlya-svinej.jpg';
import poddony from 'assets/home/slider/poddony-dlya-svinomatok.jpg';
import prichaly from 'assets/home/slider/pontonnye-sistemy-prichaly.jpg';

import styles from './Slider.module.css';

const Slider: FC = () => {
    return (
        <div className={styles.wrapper}>
            <Swiper
                className={styles.swiper}
                slidesPerView={1}
                spaceBetween={20}
                autoplay={{
                    delay: 4500,
                    disableOnInteraction: false,
                }}
                loop={true}
                modules={[Pagination, Navigation, Autoplay]}
            >
                <SwiperSlide className={styles.swiper_slide}>
                    <img src={kormushki} alt="Кормушки для свиней" />
                    <p>Кормушки для свиней</p>
                </SwiperSlide>
                <SwiperSlide className={styles.swiper_slide}>
                    <img src={opryskivateli} alt="Емкости на опрыскиватели" />
                    <p>Емкости на опрыскиватели</p>
                </SwiperSlide>
                <SwiperSlide className={styles.swiper_slide}>
                    <img src={pogreba} alt="Пластиковые погреба" />
                    <p>Пластиковые погреба</p>
                </SwiperSlide>
                <SwiperSlide className={styles.swiper_slide}>
                    <img src={emkosti} alt="Пластиковые емкости" />
                    <p>Пластиковые емкости от 100 до 10000 литров</p>
                </SwiperSlide>
                <SwiperSlide className={styles.swiper_slide}>
                    <img src={rotoformy} alt="Эскиз ротоформы" />
                    <p>Эскиз ротоформы</p>
                </SwiperSlide>
                <SwiperSlide className={styles.swiper_slide}>
                    <img src={bassejny} alt="Пластиковые бассейны" />
                    <p>Пластиковые бассейны</p>
                </SwiperSlide>
                <SwiperSlide className={styles.swiper_slide}>
                    <img src={moduli} alt="Плавучие дома, модули плавучести" />
                    <p>Плавучие дома, модули плавучести</p>
                </SwiperSlide>
                <SwiperSlide className={styles.swiper_slide}>
                    <img
                        src={remontTopliv}
                        alt="Ремонт пластиковых топливных баков"
                    />
                    <p>Ремонт пластиковых топливных баков</p>
                </SwiperSlide>
                <SwiperSlide className={styles.swiper_slide}>
                    <img
                        src={remontEmkostej}
                        alt="Ремонт пластиковых емкостей любой сложности"
                    />
                    <p>Ремонт пластиковых емкостей любой сложности</p>
                </SwiperSlide>
                <SwiperSlide className={styles.swiper_slide}>
                    <img src={poilki} alt="Поилки для свиней" />
                    <p>Поилки для свиней</p>
                </SwiperSlide>
                <SwiperSlide className={styles.swiper_slide}>
                    <img src={poddony} alt="Поддоны для свиноматок" />
                    <p>Поддоны для свиноматок</p>
                </SwiperSlide>
                <SwiperSlide className={styles.swiper_slide}>
                    <img
                        src={prichaly}
                        alt="Понтонные системы, причалы, поплавки"
                    />
                    <p>Понтонные системы, причалы, поплавки</p>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Slider;
