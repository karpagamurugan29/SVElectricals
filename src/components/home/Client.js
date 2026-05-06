import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

export const Client = () => {
    return (
        <section className="si__brand__five__area pt-120 pb-120">
            <div className="container">
                <Swiper
                    modules={[Navigation, Autoplay]}
                    slidesPerView={5}
                    spaceBetween={30}
                    loop
                    autoplay={true}
                    breakpoints={{
                        0: { slidesPerView: 2 },
                        576: { slidesPerView: 3 },
                        768: { slidesPerView: 4 },
                        992: { slidesPerView: 5 },
                    }}
                >
                    <SwiperSlide>
                        <div className="si__brand__five__thumb">
                            <img src="assets/images/brand/b-one.png" alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="si__brand__five__thumb">
                            <img src="assets/images/brand/b-three.png" alt="" />
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="si__brand__five__thumb">
                            <img src="assets/images/brand/b-four.png" alt="" />
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="si__brand__five__thumb">
                            <img src="assets/images/brand/b-five.png" alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="si__brand__five__thumb">
                            <img src="assets/images/brand/b-two.png" alt="" />
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="si__brand__five__thumb">
                            <img src="assets/images/brand/b-three.png" alt="" />
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="si__brand__five__thumb">
                            <img src="assets/images/brand/b-four.png" alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="si__brand__five__thumb">
                            <img src="assets/images/brand/b-one.png" alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="si__brand__five__thumb">
                            <img src="assets/images/brand/b-three.png" alt="" />
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="si__brand__five__thumb">
                            <img src="assets/images/brand/b-four.png" alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="si__brand__five__thumb">
                            <img src="assets/images/brand/b-five.png" alt="" />
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    );
};
