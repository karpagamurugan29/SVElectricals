import React from 'react'
import { Header } from '../components/common/Header'
import { SubPageBanner } from '../components/common/SubPageBanner'
import { Content } from '../components/projects/Content'
import { Footer } from '../components/common/Footer'

export const Projects = () => {
  return (
    <div>
        <Header/>
        <SubPageBanner title='Projects'/>
        <Content/>
        <Footer/>
    </div>
  )
}
