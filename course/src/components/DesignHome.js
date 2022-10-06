import React from 'react'
import CategoryNavbar from './CategoryNavbar'
import DesignContent from './DesignContent'
import Footer from './Footer'

function DesignHome() {
  return (
    <>
    {/* <Navbar title="RecruitEmpDesign" path={"../img/architectureBg.jpeg"}/> */}
    <CategoryNavbar path="img/DesignBg.jpeg" courseName="Design" courseDesc="Learn Designing" />

    {/* Main Content starts */}
    <DesignContent/>
    {/* Main Content Ends */}

    <Footer/>

    </>
  )
}

export default DesignHome