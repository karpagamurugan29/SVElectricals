import React from 'react'
import { Header } from '../components/common/Header'
import { SubPageBanner } from '../components/common/SubPageBanner'
import { Footer } from '../components/common/Footer'
import { Content } from '../components/contact/Content'

export const Contact = () => {
    return (
        <div>
            <Header />
            <SubPageBanner title='Contact'/>
            <Content />
            <Footer />
        </div>
    )
}
