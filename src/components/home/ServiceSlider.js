import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation,Autoplay } from "swiper/modules";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";
import service1 from '../../assert/images/our-service/service1.jpg'
import service2 from '../../assert/images/our-service/service2.jpg'
import service3 from '../../assert/images/our-service/service3.jpg'
import service4 from '../../assert/images/our-service/service4.jpg'
import service5 from '../../assert/images/our-service/service5.jpg'
import service6 from '../../assert/images/our-service/service6.jpg'
import service7 from '../../assert/images/our-service/service7.jpg'
import service8 from '../../assert/images/our-service/service8.jpg'
import service9 from '../../assert/images/our-service/service9.jpg'
import service10 from '../../assert/images/our-service/service10.jpg'
import { Link } from "react-router-dom";


export const ServiceSlider = () => {
  return (
    <div>
      <section className="si__our__blog__two__area pt-120 pb-120">
        <div className="container custom__container__two">

          {/* Title */}
          <div className="row">
            <div className="col-lg-6">
              <div className="si__section__title pb-40">
                <h5>Our Services</h5>

                <h1 className="text-anime-style-3">
                  Our Services
                </h1>
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="col-lg-6">
              <div className="si__testimonial__navigation d-flex justify-content-end gap-3">

                <button className="si-button-prev">
                    <FaArrowLeft />
                </button>

                <button className="si-button-next">
                    <FaArrowRight />
                </button>

              </div>
            </div>
          </div>

          {/* Swiper Slider */}
          <div className="row">
            <div className="col-lg-12">

              <Swiper
                modules={[Navigation,Autoplay]}
                spaceBetween={30}
                slidesPerView={3}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                loop={true}
                navigation={{
                  nextEl: ".si-button-next",
                  prevEl: ".si-button-prev",
                }}
                breakpoints={{
                  320: {
                    slidesPerView: 1,
                  },
                  768: {
                    slidesPerView: 2,
                  },
                  1200: {
                    slidesPerView: 3,
                  },
                }}
              >

                {/* Slide 1 */}
                <SwiperSlide>
                  <div className="si__our__blog__two__thumb">
                    <Link>
                      <img src={service1} alt="" />
                    </Link>

                    <div className="si__our__blog__two__inner">
                      <div className="si__our__blog__two__content">
                        <Link
                          className="si__our__blog__two__content__text"
                          
                        >
                         Design & Installation of HV Substations & Transformers
                        </Link>

                        <Link
                          className="si__our__blog__two__content__btn"
                        >
                          Read More{" "}
                          <i className="fa-sharp fa-regular fa-arrow-right"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>

                {/* Slide 2 */}
                <SwiperSlide>
                  <div className="si__our__blog__two__thumb">
                    <Link>
                      <img src={service2} alt="" />
                    </Link>

                    <div className="si__our__blog__two__inner">
                      <div className="si__our__blog__two__content">
                        <Link
                          className="si__our__blog__two__content__text"
                          
                        >
                          Industrial Electrical Solutions
                        </Link>

                        <Link
                          className="si__our__blog__two__content__btn"
                          
                        >
                          Read More{" "}
                          <i className="fa-sharp fa-regular fa-arrow-right"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>

                {/* Slide 3 */}
                <SwiperSlide>
                  <div className="si__our__blog__two__thumb">
                    <Link>
                      <img src={service3} alt="" />
                    </Link>

                    <div className="si__our__blog__two__inner">
                      <div className="si__our__blog__two__content">
                        <Link
                          className="si__our__blog__two__content__text"
                          
                        >
                         Tea Factory Electrical Solutions
                        </Link>

                        <Link
                          className="si__our__blog__two__content__btn"
                          
                        >
                          Read More{" "}
                          <i className="fa-sharp fa-regular fa-arrow-right"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
               
               {/* Slide 4 */}
                <SwiperSlide>
                  <div className="si__our__blog__two__thumb">
                    <Link>
                      <img src={service4} alt="" />
                    </Link>

                    <div className="si__our__blog__two__inner">
                      <div className="si__our__blog__two__content">
                        <Link
                          className="si__our__blog__two__content__text"
                          
                        >
                         Hotels, Hospitals & High Rises
                        </Link>

                        <Link
                          className="si__our__blog__two__content__btn"
                          
                        >
                          Read More{" "}
                          <i className="fa-sharp fa-regular fa-arrow-right"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>

                 {/* Slide 5 */}
                <SwiperSlide>
                  <div className="si__our__blog__two__thumb">
                    <Link>
                      <img src={service5} alt="" />
                    </Link>

                    <div className="si__our__blog__two__inner">
                      <div className="si__our__blog__two__content">
                        <Link
                          className="si__our__blog__two__content__text"
                          
                        >
                        Hotels & Resorts
                        </Link>

                        <Link
                          className="si__our__blog__two__content__btn"
                          
                        >
                          Read More{" "}
                          <i className="fa-sharp fa-regular fa-arrow-right"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                 {/* Slide 6 */}
                <SwiperSlide>
                  <div className="si__our__blog__two__thumb">
                    <Link>
                      <img src={service6} alt="" />
                    </Link>

                    <div className="si__our__blog__two__inner">
                      <div className="si__our__blog__two__content">
                        <Link
                          className="si__our__blog__two__content__text"
                          
                        >
                         Commercial Spaces & Offices
                        </Link>

                        <Link
                          className="si__our__blog__two__content__btn"
                          
                        >
                          Read More{" "}
                          <i className="fa-sharp fa-regular fa-arrow-right"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                 {/* Slide 7 */}
                <SwiperSlide>
                  <div className="si__our__blog__two__thumb">
                    <Link>
                      <img src={service7} alt="" />
                    </Link>

                    <div className="si__our__blog__two__inner">
                      <div className="si__our__blog__two__content">
                        <Link
                          className="si__our__blog__two__content__text"
                          
                        >
                         Electric Vehicle Charging Infrastructure
                        </Link>

                        <Link
                          className="si__our__blog__two__content__btn"
                          
                        >
                          Read More{" "}
                          <i className="fa-sharp fa-regular fa-arrow-right"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                 {/* Slide 8 */}
                <SwiperSlide>
                  <div className="si__our__blog__two__thumb">
                    <Link>
                      <img src={service8} alt="" />
                    </Link>

                    <div className="si__our__blog__two__inner">
                      <div className="si__our__blog__two__content">
                        <Link
                          className="si__our__blog__two__content__text"
                          
                        >
                         Aviation Lighting & Equipment Installation
                        </Link>

                        <Link
                          className="si__our__blog__two__content__btn"
                          
                        >
                          Read More{" "}
                          <i className="fa-sharp fa-regular fa-arrow-right"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                 {/* Slide 9 */}
                <SwiperSlide>
                  <div className="si__our__blog__two__thumb">
                    <Link>
                      <img src={service9} alt="" />
                    </Link>

                    <div className="si__our__blog__two__inner">
                      <div className="si__our__blog__two__content">
                        <Link
                          className="si__our__blog__two__content__text"
                          
                        >
                         ELECTRICAL PANEL BOARDS FABRICATION & INSTALLATION
                        </Link>

                        <Link
                          className="si__our__blog__two__content__btn"
                          
                        >
                          Read More{" "}
                          <i className="fa-sharp fa-regular fa-arrow-right"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                 {/* Slide 10 */}
                <SwiperSlide>
                  <div className="si__our__blog__two__thumb">
                    <Link>
                      <img src={service10} alt="" />
                    </Link>

                    <div className="si__our__blog__two__inner">
                      <div className="si__our__blog__two__content">
                        <Link
                          className="si__our__blog__two__content__text"
                          
                        >
                         LIGHTING DESIGN & INSTALLATION
                        </Link>

                        <Link
                          className="si__our__blog__two__content__btn"
                          
                        >
                          Read More{" "}
                          <i className="fa-sharp fa-regular fa-arrow-right"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>

            </div>
          </div>

        </div>
      </section>
      <section className="si__about__three__area pt-120 pb-120">
      <div className="container custom__width__three">

        <div className="row">

          {/* Left Image */}
          <div className="col-lg-6">
            <div className="si__about__three__right">

              <div className="si__about__three__thumb">
                <img
                  src="assets/images/about/thumb.png"
                  alt="About"
                />
              </div>

            </div>
          </div>

          {/* Right Content */}
          <div className="col-lg-6">

            {/* Section Title */}
            <div className="si__three__section__title si__title mb-52">

              <h5>Our Services</h5>

              <h1 className="text-anime-style-3">
                Complete Electrical <span>Solutions</span> for Modern
                <br />
                 Infrastructure
              </h1>

              <p>
                We strive to implement intricate and well-thought-out solutions that are crafted to be energy-efficient and utility-based so that people can make the most of all the electrical services and equipment provided by us, and use them to enhance their work and living spaces. We intend to enrich the experience of the people who would be working in these industrial/commercial/residential spaces, by minimising complexity and maximising ease and performance. Providing end-to-end turnkey solutions, we are the go-to electrical contractors and consultants for any organisation that is looking to hire an exceptional team of highly qualified and immensely skilled electrical engineers.
              </p>

            </div>
            {/* Bottom Section */}
            <div className="si__about__three__box__two">

              {/* Button */}
              <div className="si__about__three__btn">
                <Link className="si__btn2" >
                  Read More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
};