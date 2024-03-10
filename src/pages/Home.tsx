import { FC } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import img from 'assets/img.jpeg';
import img1 from 'assets/img1.jpg';
import img2 from 'assets/img2.jpg';

const Home: FC = () => {
    // skethes of slider
    return (
        <div className="container">
            <div className="s">
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 5500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <img src={img} alt="random" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={img1} alt="random" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={img2} alt="random" />
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default Home;
