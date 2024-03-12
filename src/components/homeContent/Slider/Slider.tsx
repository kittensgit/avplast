import { FC } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';

import sliderData from 'data/SliderData';

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
                {sliderData.map((sliderItem, index) => (
                    <SwiperSlide key={index}>
                        <figure className={styles.swiper_slide}>
                            <img
                                src={sliderItem.image}
                                alt={sliderItem.description}
                            />
                            <figcaption>{sliderItem.description}</figcaption>
                        </figure>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Slider;
