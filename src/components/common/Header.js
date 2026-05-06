import React from 'react'
import { Link } from 'react-router-dom'
import LogoImg from '../../assert/images/logo.jpg'

export const Header = () => {
    return (
        <div>
            <section id="header-sticky" className="si__header__area si__header__three__area">
                <div className="container custom__container">
                    <div className="row">
                        <div className="col-lg-3">
                            <div className="si__header__logo">
                                <a ><img className='header_logo' src={LogoImg} alt="logo" /></a>
                            </div>
                        </div>
                        <div className="col-lg-9">
                            <div className="si__header__content">
                                <div className="si__header__menubar">
                                    <div className="si__header__menu">
                                        <ul>
                                            <li><Link to='/'>Home</Link></li>
                                            <li><Link to='/about'>About Us</Link></li>
                                            <li><Link to='/team'>Team</Link></li>
                                            <li><Link to='/services'>Services</Link></li>
                                            <li><Link to='/projects'>Projects</Link></li>
                                            <li><Link to='/contact'>Contact</Link></li>
                                        </ul>
                                    </div>
                                </div>
                                {/* <div className="si__header__right">
                                    <div className="search-box-btn search-box-outer"><i className="fa-sharp fa-solid fa-magnifying-glass"></i></div>
                                    <div className="nav-btn navSidebar-button si__header__offcanvas__bar">
                                        <div className="si__header__offcanvas__bar__inner">
                                            <span className="line-one"></span>
                                            <span className="line-two"></span>
                                            <span className="line-three"></span>
                                        </div>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="xs-sidebar-group info-group">
                <div className="dt-overlay bt-black"></div>
                <div className="dt-sidebar-widget">
                    <div className="sidebar-container">
                        <div className="widget-top">
                            <a href="#" className="close">
                                X
                            </a>
                        </div>
                        <div className="sidebar-textwidget">
                            <section className="sidebar-info-contents">
                                <div className="content-inner">
                                    <div className="logo">
                                        <a href="index-2.html"><img src="assets/images/logo/logo__white.png" alt="" /></a>
                                    </div>
                                    <div className="content-text">
                                        <h2>About Us</h2>
                                        <p className="text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud nisi ut aliquip ex ea commodo consequat.</p>
                                    </div>
                                    <div className="contact-info">
                                        <h2>Contact Us</h2>
                                        <ul>
                                            <li> <i className="fa-light fa-location-dot"></i> 12/A, Mirnada City Tower, NYC </li>
                                            <li> <i className="fa-light fa-phone"></i> <a href="tel:+000123456789"> +000 123 (456) 789 </a> </li>
                                            <li> <i className="fa-light fa-envelope"></i> <a href="mailto:saadalam291@gmail.com"> mailto:saadalam291@gmail.com </a> </li>
                                        </ul>
                                    </div>
                                </div>
                            </section>
                            <div className="social-icon pt-40">
                                <ul>
                                    <li>
                                        <a href="#"><i className="fab fa-facebook-f"></i></a>
                                    </li>
                                    <li>
                                        <a href="#"><i className="fa-brands fa-instagram"></i></a>
                                    </li>
                                    <li>
                                        <a href="#"><i className="fab fa-pinterest"></i></a>
                                    </li>
                                    <li>
                                        <a href="#"><i className="fab fa-linkedin-in"></i></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="si__mobilemenu__area">
                <div className="mobile-menu">
                    <nav className="si_menu">
                        <ul>
                            <li><a href="index-2.html"> Home </a>
                                <ul>
                                    <li className="current__item"><a href="index-2.html"> Business Consultant </a></li>
                                    <li><a href="index-two.html"> Finance Consulting </a></li>
                                    <li><a href="index-three.html"> SEO Agency </a></li>
                                    <li><a href="index-four.html"> Digital Agency </a></li>
                                    <li><a href="index-five.html"> Corporate Business </a></li>
                                </ul>
                            </li>
                            <li><a href="#">Pages </a>
                                <ul className="sub__menu">
                                    <li><a href="about-us.html"> About Us </a></li>
                                    <li><a href="team.html"> Team </a></li>
                                    <li><a href="faq.html"> FAQ </a></li>
                                    <li><a href="our-pricing.html"> Our Pricing </a></li>
                                </ul>
                            </li>
                            <li><a href="#">Services </a>
                                <ul className="sub__menu">
                                    <li><a href="service.html"> Services </a></li>
                                    <li><a href="service-details.html"> Services Details </a></li>
                                </ul>
                            </li>
                            <li><a href="#"> Projects </a>
                                <ul className="sub__menu">
                                    <li><a href="project.html"> Projects </a></li>
                                    <li><a href="project-details.html"> Projects Details </a></li>
                                </ul>
                            </li>
                            <li><a href="#">Blog </a>
                                <ul className="sub__menu">
                                    <li><a href="blog.html"> Blog </a></li>
                                    <li><a href="blog-details.html"> Blog Details </a></li>
                                </ul>
                            </li>
                            <li><a href="contact.html">Contact</a></li>
                        </ul>
                    </nav>
                </div>
            </section>
            {/* <div id="loading">
                <div id="loading-center">
                    <div id="loading-center-absolute">
                        <div className="preloader__content text-center">
                            <div className="preloader__logo">
                                <img src="assets/images/logo/logo__white.png" alt="" />
                            </div>
                            <div id="st-loading-bar" className="preloader__bar">
                                <div id="st-loading-line" className="preloader__bar-inner"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
        </div>
    )
}
