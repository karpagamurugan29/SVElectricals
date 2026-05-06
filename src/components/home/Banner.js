import React from 'react'

export const Banner = () => {
    return (
        <div>
            <section className="si__slider__five__area bg pt-120 pb-120" style={{
                backgroundImage: "url('assets/images/slider/slider-five.jpg')"
            }}>
                <div className="container custom__container">
                    <div className="row">
                        <div className="col-lg-7">
                            <div className="si__slider__five__content">
                                <h1><strong>SVE Electricals</strong><br /> Lift Insurance & License Services</h1>
                                <p>Trusted lift insurance, license approval, and renewal services<br />
  ensuring safety, compliance, and reliability.</p>
                            </div>
                            <div className="si__slider__five__box">
                                <div className="si__slider__five__btn">
                                    <a className="si__btn btn-one btn-five" href="/about">About us</a>
                                </div>
                                <div className="si__slider__five__icon">
                                    <a className="si__slider__vdo my-video-links" data-autoplay="true" data-vbtype="video" href="#">
                                        <i className="fa-sharp fa-solid fa-play"></i>
                                    </a>
                                </div>
                                <div className="si__slider__five__text">
                                    <span>See How It Works</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="si__slider__five__thumb__box">
                                <div className="si__slider__five__thumb">
                                    <img src="assets/images/slider/thumb-one.png" alt="" />
                                </div>
                                <div className="si__slider__five__thumb__two">
                                    <img src="assets/images/slider/thumb-two.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="si__slider__five__shape1 scale2">
                    <img src="assets/images/slider/shape1.png" alt="" />
                </div>
            </section>
        </div>
    )
}
