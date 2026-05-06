import React from 'react'
import { SubPageBanner } from '../components/common/SubPageBanner'
import { Header } from '../components/common/Header'
import { WhyChooseUs } from '../components/about/WhyChooseUs'
import { WorkProcess } from '../components/about/WorkProcess'
import { OurFeature } from '../components/about/OurFeature'
import { Footer } from '../components/common/Footer'
import { Client } from '../components/home/Client'

export const AboutUs = () => {
    return (
        <div>
            <Header />
            <SubPageBanner title='About Us'/>
            <WhyChooseUs />
            <WorkProcess />
            <OurFeature/>
            <Client/>
            <Footer/>
        </div>
    )
}
