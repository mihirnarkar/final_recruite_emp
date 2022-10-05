import React from 'react'
import Footer from './Footer'
import Content from './ArchContent'
import CategoryNavbar from './CategoryNavbar'

export default function Home() {
  return (
    <>
    {/* <Navbar title="RecruitEmpArch" path1={"../img/architectureBg.jpeg"}/> */}
    <CategoryNavbar title="RecruitEmpArch" path1="img/architectureBg.jpeg" />

    {/* Main content start */}
    <Content/>
    {/* Main content ends */}

    <Footer/>
    </>
  )
}
