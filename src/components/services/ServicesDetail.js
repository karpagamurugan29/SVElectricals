import React from 'react'
import { Header } from '../common/Header'
import { SubPageBanner } from '../common/SubPageBanner'
import { Footer } from '../common/Footer'

export const ServicesDetail = () => {
    return (
        <div>
            <Header />
            <SubPageBanner title='Services Detail'/>
            <div class="si__service__details__left__area">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-8">
                            <div class="si__service__details__left__content wow fadeInUp animated" data-wow-delay=".3s">
                                <img src="assets/images/service-details/p1.png" alt="" />
                                <h3>Leading Businesses, Shaping The Future</h3>
                                <p>Web designing in a powerful way of just not a professions, however, in a passion for our Company. <br /> We have to a tendency to believe the idea that smart looking of any websitet in on visitors.Web <br /> designing in a powerful way of just not an only profession Web designing in a powerful</p>
                                <p>Way of just not an only professions, however, in a passio for our Company. We have to a tendency <br /> to believe the idea that smart looking of any websitet in on visitors.Web designing in a powerful <br /> way of just not an only profession loren ipsum dummy text provide</p>
                            </div>
                            <div class="si__service__details__left__box">
                                <div class="si__service__details__left__thumb wow fadeInUp animated" data-wow-delay=".3s">
                                    <img src="assets/images/service-details/p2.png" alt="" />
                                </div>
                                <div class="si__service__details__left__text">
                                    <span><i class="fa-solid fa-check"></i> Financial Strategy Accelerators Navigate</span>
                                    <span><i class="fa-solid fa-check"></i> Secure Your Business's NavigateFi</span>
                                    <span><i class="fa-solid fa-check"></i> EmpowerNavigate the Financial</span>
                                </div>
                            </div>
                            <div class="si__service__details__left__paragraph wow fadeInUp animated" data-wow-delay=".3s">
                                <p>Web designing in a powerful way of just not a professions, however, in a passion for our Company. <br /> We have to a tendency to believe the idea that smart looking of any websitet in on visitors.Web <br /> designing in a powerful way of just not an only profession Web designing in a powerful</p>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="si__service__details__left__mainbox mt-20 wow fadeInUp animated" data-wow-delay=".9s">
                                <div class="si__service__details__left__texttwo text-center">
                                    <span>The ultimate business solution<br /> our priority</span>
                                    <p>Web designing in a powerful way of just <br /> not an only professions, however</p>
                                </div>
                                <div class="si__service__details__left__right">
                                    <ul>
                                        <li><a >Information <i class="fa-solid fa-download"></i></a></li>
                                    </ul>
                                </div>
                                <div class="si__service__details__left__right">
                                    <ul>
                                        <li><a >Terms & Conditions <i class="fa-solid fa-download"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
