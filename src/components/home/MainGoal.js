import React from 'react'
import { MdWorkHistory } from "react-icons/md";
import { FaIndustry } from "react-icons/fa";
import { MdElectricalServices } from "react-icons/md";
import { FaMapLocationDot } from "react-icons/fa6";

export const MainGoal = () => {
  return (
    <div>
            <section className="si__main__goal__area pb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="si__main__goal__thumb">
                                <img src="assets/images/main-goal/thumb.png" alt=""/>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className=" si__three__section__title mb-43">
                                <h5>Why Choose Us</h5>
                                <h1 className="text-anime-style-3">All-in-One Electrical Solutions</h1>
                                </div>
                                    <div className="si__main__goal__icon__box si__main__goal__box">
                                        <div className="si__main__goal__icon si__main__goal__icon__two">
                                            <MdWorkHistory />
                                        </div>
                                        <div className="si__main__goal__title">
                                            <h5>30 years experience</h5>
                                            <p>Delivering trusted electrical solutions with proven industry expertise.</p>
                                        </div>
                                    </div>
                                    <div className="si__main__goal__icon__box si__main__goal__box">
                                        <div className="si__main__goal__icon si__main__goal__icon__two">
                                            <FaIndustry />
                                        </div>
                                        <div className="si__main__goal__title">
                                            <h5>Industries and Commercial</h5>
                                            <p>Providing reliable services for industrial and commercial sectors.</p>
                                        </div>
                                    </div>
                                        <div className="si__main__goal__icon__box si__main__goal__box">
                                        <div className="si__main__goal__icon si__main__goal__icon__two">
                                            <MdElectricalServices />
                                        </div>
                                        <div className="si__main__goal__title">
                                            <h5>2000 HT Installations</h5>
                                            <p>Successfully completed 2000+ high-tension electrical installations.</p>
                                        </div>
                                    </div>
                                        <div className="si__main__goal__icon__box si__main__goal__box">
                                        <div className="si__main__goal__icon si__main__goal__icon__two">
                                            <FaMapLocationDot />
                                        </div>
                                        <div className="si__main__goal__title">
                                            <h5>100+ Locations</h5>
                                            <p>Expanding our services across 100+ locations with consistent quality.</p>
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </div>
            </section>
    </div>
  )
}
