import { FC } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import 'swiper/css';

import { ISliderItem } from 'types/types';

import styles from './Slider.module.css';

interface SliderProps {
    sliderData: ISliderItem[];
    slidesCount: number;
}

const Slider: FC<SliderProps> = ({ sliderData, slidesCount }) => {
    return (
        <Swiper
            className={styles.swiper}
            slidesPerView={slidesCount}
            spaceBetween={20}
            autoplay={{
                delay: 4500,
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
