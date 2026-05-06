import React from 'react'

export const ContactForm = () => {
    return (
        <div>
            <section className="si__get__five__area bg pt-120 pb-120" style={{ background: "url('assets/images/get-in-touch/t-bg.jpg')" }}>
                <div className="container custom__width__six si__get__five__bg bg" style={{ background: "url('assets/images/get-in-touch/t-one-bg.jpg')" }}>
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="si__get__five__content">
                                <h1>Lets Get in<span>Touch!</span></h1>
                                <p>Have a question or need assistance? Reach out<br /> to us via email,
                                    phone, or the contact form below.<br /> We're eager to assist you.</p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="row">
                                <div className="col-lg-12 col-md-6">
                                    <div className="si__get__five__contact__from">
                                        <span>Full name:</span>
                                        <input type="text" placeholder="" />
                                    </div>
                                </div>
                                <div className="col-lg-12 col-md-6">
                                    <div className="si__get__five__contact__from">
                                        <span>Email:</span>
                                        <input type="text" placeholder="" />
                                    </div>
                                </div>
                                <div className="col-lg-12 col-md-6">
                                    <div className="si__get__five__contact__from">
                                        <span>Message:</span>
                                        <textarea placeholder=""></textarea>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="si__get__five__contact__from text-center mt-30">
                                        <button type="submit">Submit</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
