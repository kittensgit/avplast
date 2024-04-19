import { FC } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

import sliderData from 'data/SliderData';

import styles from './Slider.module.css';

const Slider: FC = () => {
    return (
        <Swiper
            className={styles.swiper}
            slidesPerView={1}
            autoplay={{
                delay: 5500,
                disableOnInteraction: false,
            }}
            grabCursor
            loop
            modules={[Autoplay]}
        >
            {sliderData.map((sliderItem, index) => (
                <SwiperSlide key={index} className={styles.swiper_slide}>
                    <figure>
                        <img
                            src={sliderItem.image}
                            alt={sliderItem.description}
                        />
                        <figcaption>{sliderItem.description}</figcaption>
                    </figure>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default Slider;
