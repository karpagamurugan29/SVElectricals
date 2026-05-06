import React from 'react'

export const Management = () => {
    return (
        <div>
            <section className="si__team__five__area pt-120 pb-120">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className=" si__three__section__title text-center mb-43">
                                <h5>Our Team</h5>
                                <h1 className="text-anime-style-3">Meet Our Coaches</h1>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="si__team__five__thumb">
                                <img src="assets/images/team/thumb-one.png" alt="" />
                            </div>
                            <div className="si__team__five__box text-center">
                                <div className="si__team__five__content">
                                    <h5>Marvin Joner</h5>
                                    <span>Instructor</span>
                                </div>
                                <div className="si__team__five__icon">
                                    <a ><i className="fa-brands fa-facebook-f"></i></a>
                                    <a ><i className="fa-brands fa-instagram"></i></a>
                                    <a ><i className="fa-brands fa-linkedin-in"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="si__team__five__thumb">
                                <img src="assets/images/team/thumb-two.png" alt="" />
                            </div>
                            <div className="si__team__five__box text-center">
                                <div className="si__team__five__content">
                                    <h5>Abu Talha</h5>
                                    <span>Instructor</span>
                                </div>
                                <div className="si__team__five__icon">
                                    <a ><i className="fa-brands fa-facebook-f"></i></a>
                                    <a ><i className="fa-brands fa-instagram"></i></a>
                                    <a ><i className="fa-brands fa-linkedin-in"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="si__team__five__thumb">
                                <img src="assets/images/team/thumb-three.png" alt="" />
                            </div>
                            <div className="si__team__five__box text-center">
                                <div className="si__team__five__content">
                                    <h5>Maysha</h5>
                                    <span>Instructor</span>
                                </div>
                                <div className="si__team__five__icon">
                                    <a ><i className="fa-brands fa-facebook-f"></i></a>
                                    <a ><i className="fa-brands fa-instagram"></i></a>
                                    <a ><i className="fa-brands fa-linkedin-in"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="si__call__do__action__area ">
                <div className="container">
                    <div className="row align-items-center si__call__do__action__bg bg" style={{ background: "url('assets/images/call-do-action/call-bg.jpg')" }}>
                        <div className="col-lg-6">
                            <div className="si__call__do__action__right">
                                <div className="si__call__do__action__content">
                                    <h2>Get your FREE account<br /> now,50 monitors included!</h2>
                                </div>
                                <div className="si__call__do__action__btn">
                                    <a className="si__btn__two btn-six" >Sign Up Now</a>
                                </div>
                                <div className="si__call__do__action__text">
                                    <p>No credit card required!</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="si__call__do__action__thumb">
                                <img src="assets/images/call-do-action/thumb.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
