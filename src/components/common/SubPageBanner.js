import React from 'react'
import { Link } from 'react-router-dom'

export const SubPageBanner = ({title}) => {
    return (
        <div>
            <section className="si__breadcumb__area bg" style={{ background: "url('assets/images/breadcumb/Hero.png')" }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="si__breadcumb__text text-center">
                                <h1>{title}</h1>
                                <span> <Link to='/'>Home</Link> <i className="fa-regular fa-chevron-right"></i> {title}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
