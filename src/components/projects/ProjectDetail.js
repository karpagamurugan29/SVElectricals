import React from 'react'
import { Header } from '../common/Header'
import { SubPageBanner } from '../common/SubPageBanner'
import { Footer } from '../common/Footer'

export const ProjectDetail = () => {
    return (
        <div>
            <Header />
            <SubPageBanner title='Project Detail'/>
            
            <section className="si__project__details__area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="si__project__details__content">
                                <h3 className="text-anime-style-3">Unlocking potential, delivering results</h3>
                                <p>Web designing in a powerful way of just not an only professions, however, in a passion  Company.<br /> We have to a tendency to believe the idea that smart looking of any websitet in on visit designing<br /> in a powerful way of just not an only profession Web designing in a powerful way of just not only<br /> professions, however, in a passion for our Company. We have to a tendency </p>
                                <img src="assets/images/project-details/pic-1.png" alt="" />
                            </div>
                            <div className="si__project__details__text wow fadeInUp animated" data-wow-delay=".5s">
                                <p>Web designing in a powerful way of just not an only professions, however, in a passion for our<br /> Company. We have to a tendency to believe the idea that smart looking of any websitet in on<br /> visitors.Web designing in a powerful way of just not an only</p>
                                <span><i className="fa-solid fa-check"></i> Financial Strategy Accelerators Navigate the Financial Landscape with Confidence</span>
                                <span><i className="fa-solid fa-check"></i> Secure Your Business's Navigate the Financial Landscape with Confidence</span>
                                <span><i className="fa-solid fa-check"></i> EmpowerNavigate the Financial Landscape with Confidence</span>
                            </div>
                            <div className="si__project__details__thumb wow fadeInUp animated" data-wow-delay=".5s">
                                <img src="assets/images/project-details/pic-2.png" alt="" />
                                <img src="assets/images/project-details/pic-3.png" alt="" />
                            </div>
                            <div className="si__project__details__right wow fadeInUp animated" data-wow-delay=".5s">
                                <h6>Business excellence, unmatched service</h6>
                                <p>Web designing in a powerful way of just not an only profeons, however, in a pass for our Company.<br /> We have to a tendency to believe the idea that smart look of websitet in on visitors.Web designing<br /> in a powerful way of just not an only profession Web designing in a powerful way</p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="si__project__details__box wow fadeInUp animated" data-wow-delay=".5s">
                                <h5>Project Details</h5>
                                <ul>
                                    <li><a >Category:</a> <span>BizBoost</span></li>
                                    <li><a >Author:</a> <span>Abu Talha</span></li>
                                    <li><a >Date:</a> <span>23 December,2024</span></li>
                                    <li><a >Tags:</a> <span>DataMasters</span></li>
                                    <li><a >Value:</a> <strong>$ 240</strong></li>
                                </ul>
                                <div className="si__project__details__btn">
                                    <a >Download PDF <i className="fa-solid fa-download"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <Footer />

        </div>
    )
}
