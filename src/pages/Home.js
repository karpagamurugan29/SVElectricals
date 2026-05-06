import React from 'react'
import { Banner } from '../components/home/Banner'
import { Client } from '../components/home/Client'
import { MonitoringSolution } from '../components/home/MonitoringSolution'
import { Header } from '../components/common/Header'
import { About } from '../components/home/About'
// import { WhyChooseUs } from '../components/home/WhyChooseUs'
import { MainGoal } from '../components/home/MainGoal'
// import { Management } from '../components/home/Management'
import { Footer } from '../components/common/Footer'
import { ServiceSlider } from '../components/home/ServiceSlider'

export const Home = () => {
    return (
        <div>
            <Header />
            <Banner />
            <Client />
            {/* <Management /> */}
            <MainGoal />
            <About />
            {/* <WhyChooseUs /> */}
            <ServiceSlider />
            <MonitoringSolution />
            <Footer />
        </div>
    )
}
