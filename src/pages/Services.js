import React from 'react'
import { Header } from '../components/common/Header'
import { SubPageBanner } from '../components/common/SubPageBanner'
import { Content } from '../components/services/Content'
import { Footer } from '../components/common/Footer'

export const Services = () => {
    return (
        <div>
            <Header />
            <SubPageBanner title='Services'/>
            <Content/>
            <Footer/>
        </div>
    )
}
