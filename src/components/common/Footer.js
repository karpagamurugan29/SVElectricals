import React from 'react'
import LogoImg from '../../assert/images/logo.jpg'

export const Footer = () => {
    return (
        <div className='mt-5'>
            <section className="si__fotter__area bg" style={{ background: "url('assets/images/fotter/Fotter.jpg')" }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-6 wow fadeInUp animated" data-wow-delay=".3s">
                            <div className="si__fotter__box">
                                <div className="si__fotter__box__icon">
                                    <a href="index-2.html"> <img className='footer_logo' src={LogoImg} alt="" /> </a>
                                    <p>It is a long established fact that a <br /> reader will be distracted</p>
                                </div>
                                <div className="si__fotter__box__social">
                                    <a href="#"><i className="fa-brands fa-instagram"></i></a>
                                    <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
                                    <a href="#"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                        <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" /></svg></a>
                                    <a href="#"><i className="fa-brands fa-linkedin-in"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6 wow fadeInUp animated" data-wow-delay=".6s">
                            <div className="si__fotter__text">
                                <h6>About Company</h6>
                                <ul>
                                    <li><a href="#">Service</a></li>
                                    <li><a href="#">FAQ</a></li>
                                    <li><a href="#">Testimonial</a></li>
                                    <li><a href="#">About Us</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6 wow fadeInUp animated" data-wow-delay=".9s">
                            <div className="si__fotter__link">
                                <h6>Our Office</h6>
                                <a href="mailto:svelectricalscbe12@gmail.com"><i className="fa-light fa-envelope"></i>  svelectricalscbe12@gmail.com</a>
                                <a href="tel:7845873218"><i class="fa-solid fa-phone"></i> 78458 73218</a>
                                <a href="#"><i className="fa-regular fa-location-dot"></i> Door No.:11 &12, Shop No.: 9, Second Floor
C.P Nayanar Balaji Complex, Kaleeswara Mill Road, Ram Nagar Post, Coimbatore - 641009.</a>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6 wow fadeInUp animated" data-wow-delay="1.2s">
                            <div className="si__fotter__content">
                                <h6>Stay Connected</h6>
                                <p>The generated is therefore always <br /> free from repetition is</p>
                                <div className="si__fotter__mailchimp__form">
                                    <form method="">
                                        <input name="email" type="email" placeholder="Your Email..." />
                                        <button type="submit"> <i className="fa-sharp fa-light fa-paper-plane"></i> </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="si__fotter__copyright">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="si__fotter__copyright__content">
                                    <p>© SVE Electricals 2026 | All Rights Reserved</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div id="scroll-percentage"><span id="scroll-percentage-value"></span></div>


            <div className="search-popup">
                <button className="close-search style-two"><i className="fa-sharp fa-light fa-xmark"></i></button>
                <button className="close-search"><i className="fa-sharp fa-regular fa-up"></i></button>
                <form method="post" action="#">
                    <div className="form-group">
                        <input type="search" name="search-field" value="" placeholder="Search Here" required="" />
                        <button type="submit"><i className="fa-sharp fa-solid fa-magnifying-glass"></i></button>
                    </div>
                </form>
            </div>
        </div>
    )
}
