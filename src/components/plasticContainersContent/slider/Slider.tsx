import { FC } from 'react';
import { motion } from 'framer-motion';

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
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
                once: true,
                amount: 0.1,
            }}
            variants={wrapperAnimation}
        >
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
        </motion.div>
    );
};

export default Slider;
