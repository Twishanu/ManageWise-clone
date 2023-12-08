import './Testimonials.css';
import emily from '../Images/emily.webp'
import happyusers from '../Images/dashboard.webp'
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './styles.css';

// import required modules
import { Pagination, Autoplay, Navigation } from 'swiper/modules';
function Testimonials() {
    return (
        <>
            <div id='Testimonials-main' data-aos="fade-right" data-aos-duration="1000">
                <div id='Testimonials-main-one'><p>TESTIMONIALS</p></div>
                <div id='Testimonials-main-two'><p>Hear from our <span>Satisfied</span> clients</p></div>
                <div id='Testimonials-main-three'><p>Discover why our clients love working with us. Read their testimonials and learn how we has helped businesses.</p></div>
                <div id='Testimonials-main-four'>
                    <Swiper
                        slidesPerView={3}
                        spaceBetween={30}
                        autoplay={{
                            delay: 1000,
                            disableOnInteraction: false,
                        }}
                        speed={5000}
                        loop={true}
                        // pagination={{
                        //     clickable: true,
                        // }}
                        navigation={true}
                        modules={[Autoplay, Pagination, Navigation]}
                    >
                        <SwiperSlide>
                            <div className='Testimonial-down-card'>
                                <p>"Manage Wise transformed our team's productivity. The intuitive interface and powerful features have made a significant impact on our daily operations"</p>
                                <b><p><div><img src={emily} alt="" /></div>Emily</p></b>
                                <p>Art Director</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='Testimonial-down-card'>
                                <p>"Manage Wise transformed our team's productivity. The intuitive interface and powerful features have made a significant impact on our daily operations"</p>
                                <b><p><div><img src={emily} alt="" /></div>Emily</p></b>
                                <p>Art Director</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='Testimonial-down-card'>
                                <p>"Manage Wise transformed our team's productivity. The intuitive interface and powerful features have made a significant impact on our daily operations"</p>
                                <b><p><div><img src={emily} alt="" /></div>Emily</p></b>
                                <p>Art Director</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='Testimonial-down-card'>
                                <p>"Manage Wise transformed our team's productivity. The intuitive interface and powerful features have made a significant impact on our daily operations"</p>
                                <b><p><div><img src={emily} alt="" /></div>Emily</p></b>
                                <p>Art Director</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='Testimonial-down-card'>
                                <p>"Manage Wise transformed our team's productivity. The intuitive interface and powerful features have made a significant impact on our daily operations"</p>
                                <b><p><div><img src={emily} alt="" /></div>Emily</p></b>
                                <p>Art Director</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='Testimonial-down-card'>
                                <p>"Manage Wise transformed our team's productivity. The intuitive interface and powerful features have made a significant impact on our daily operations"</p>
                                <b><p><div><img src={emily} alt="" /></div>Emily</p></b>
                                <p>Art Director</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='Testimonial-down-card'>
                                <p>"Manage Wise transformed our team's productivity. The intuitive interface and powerful features have made a significant impact on our daily operations"</p>
                                <b><p><div><img src={emily} alt="" /></div>Emily</p></b>
                                <p>Art Director</p>
                            </div>
                        </SwiperSlide >
                        <SwiperSlide>
                            <div className='Testimonial-down-card'>
                                <p>"Manage Wise transformed our team's productivity. The intuitive interface and powerful features have made a significant impact on our daily operations"</p>
                                <b><p><div><img src={emily} alt="" /></div>Emily</p></b>
                                <p>Art Director</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='Testimonial-down-card'>
                                <p>"Manage Wise transformed our team's productivity. The intuitive interface and powerful features have made a significant impact on our daily operations"</p>
                                <b><p><div><img src={emily} alt="" /></div>Emily</p></b>
                                <p>Art Director</p>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
                <div id='Testimonials-main-five' data-aos="fade-up" data-aos-duration="1000">
                    <div id='Testimonials-main-five-left'>
                        <div id='Testimonials-main-five-left-one'><p>DON'T MISS OUT</p></div>
                        <div id='Testimonials-main-five-left-two'><p>Unleash your <span>Potential</span> with us</p></div>
                        <div id='Testimonials-main-five-left-three'><p>Join our community of ambitious individuals and organizations eager to make a difference.</p></div>
                        <div id='Testimonials-main-five-left-four'><button>Try Out Now</button></div>
                    </div>
                    <div id='Testimonials-main-five-right'><img src={happyusers} alt="" /></div>
                </div>
            </div>
        </>
    );
}
export default Testimonials;