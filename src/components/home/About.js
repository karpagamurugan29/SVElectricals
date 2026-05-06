import React from 'react'

export const About = () => {
    return (
        <div>
            <section className="si__about__five__area bg pt-120 pb-120" style={{ background: "url('assets/images/about/about-bg.jpg')" }}>
                <div className="container custom__container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="si__about__five__box">
                                <div className="si__about__five__thumb">
                                    <img src="assets/images/about/thumb-one.png" alt="" />
                                </div>
                                <div className="si__about__five__thumb__one">
                                    <img src="assets/images/about/thumb-two.png" alt="" />
                                </div>
                                <div className="si__about__five__thumb__two">
                                    <img src="assets/images/about/thumb-three.png" alt="" />
                                </div>
                                <div className="si__about__five__shape dance">
                                    <img src="assets/images/about/shape.png" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="si__about__five__right">
                                <div className=" si__three__section__title si__title__one mb-43">
                                    <h5>Welcome to</h5>
                                    <h1 className=" text-white text-anime-style-3">SVE Electricals</h1>
                                    <p>Based in Coimbatore, Tamil Nadu, India Circuit Engineering is an EA Grade Licensed turnkey
                                         contractor and consulting firm. Having an extensive working experience of over 30 years
                                          in the domain of Industrial Electrical installation and engineering, we have consistently
                                           outperformed expectations by delivering excellence. Our areas of expertise include,
                                            but are not limited to, high voltage substations, low voltage auxiliary systems,
                                             medium voltage systems diesel power plants, and metering and protection schemes,
                                              along with general contracting in commercial establishments such as hotels,
                                               hospitals, as well as high-end residential buildings.</p>

                                    <p>
                                     We are ISO 9001 Certified & ISO 14001 Certified to ensure the quality and safety of electrical installations. We're extremely professional and strive to provide uncompromised quality in our installations which have kept us above competition from our inception. For any electrical requirement that might arise, We're here to set it right and get your system up and running. We take pride in every size of work, and You're assured of the quality and safety that comes with a skillful and trusted team. All projects of ours are completed on time and within committed budgets in the most professional way. While keeping the overall safety and efficiency of your project primary.   
                                    </p>           
                                    <p>
                                        For any electrical needs that you have, do call us now and by making us your first choice, you choose a hassle-free and long-lasting, efficient electrical installation.
                                    </p>
                                </div>
                                <div className="si__about__five__btn">
                                    <a className="si__btn__two btn-five" href="#">Read More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="si__about__five__shape1">
                    <img src="assets/images/about/shape-one.png" alt="" />
                </div>
                <div className="si__about__five__shape2">
                    <img src="assets/images/about/shape-two.png" alt="" />
                </div>
            </section>
        </div>
    )
}
