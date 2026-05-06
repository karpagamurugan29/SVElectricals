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
                                <Link><img className='header_logo' src={LogoImg} alt="logo" /></Link>
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
                            <Link className="close">
                                X
                            </Link>
                        </div>
                        <div className="sidebar-textwidget">
                            <section className="sidebar-info-contents">
                                <div className="content-inner">
                                    <div className="logo">
                                        <Link><img src="assets/images/logo/logo__white.png" alt="" /></Link>
                                    </div>
                                    <div className="content-text">
                                        <h2>About Us</h2>
                                        <p className="text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud nisi ut aliquip ex ea commodo consequat.</p>
                                    </div>
                                    <div className="contact-info">
                                        <h2>Contact Us</h2>
                                        <ul>
                                            <li> <i className="fa-light fa-location-dot"></i> 12/A, Mirnada City Tower, NYC </li>
                                            <li> <i className="fa-light fa-phone"></i> <Link to="tel:+000123456789"> +000 123 (456) 789 </Link> </li>
                                            <li> <i className="fa-light fa-envelope"></i> <Link to="mailto:saadalam291@gmail.com"> mailto:saadalam291@gmail.com </Link> </li>
                                        </ul>
                                    </div>
                                </div>
                            </section>
                            <div className="social-icon pt-40">
                                <ul>
                                    <li>
                                        <Link><i className="fab fa-facebook-f"></i></Link>
                                    </li>
                                    <li>
                                        <Link><i className="fa-brands fa-instagram"></i></Link>
                                    </li>
                                    <li>
                                        <Link><i className="fab fa-pinterest"></i></Link>
                                    </li>
                                    <li>
                                        <Link><i className="fab fa-linkedin-in"></i></Link>
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
                            <li><Link> Home </Link>
                                <ul>
                                    <li className="current__item"><Link> Business Consultant </Link></li>
                                    <li><Link> Finance Consulting </Link></li>
                                    <li><Link> SEO Agency </Link></li>
                                    <li><Link> Digital Agency </Link></li>
                                    <li><Link> Corporate Business </Link></li>
                                </ul>
                            </li>
                            <li><Link>Pages </Link>
                                <ul className="sub__menu">
                                    <li><Link> About Us </Link></li>
                                    <li><Link> Team </Link></li>
                                    <li><Link> FAQ </Link></li>
                                    <li><Link> Our Pricing </Link></li>
                                </ul>
                            </li>
                            <li><Link>Services </Link>
                                <ul className="sub__menu">
                                    <li><Link> Services </Link></li>
                                    <li><Link> Services Details </Link></li>
                                </ul>
                            </li>
                            <li><Link> Projects </Link>
                                <ul className="sub__menu">
                                    <li><Link> Projects </Link></li>
                                    <li><Link> Projects Details </Link></li>
                                </ul>
                            </li>
                            <li><Link>Blog </Link>
                                <ul className="sub__menu">
                                    <li><Link> Blog </Link></li>
                                    <li><Link> Blog Details </Link></li>
                                </ul>
                            </li>
                            <li><Link>Contact</Link></li>
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
