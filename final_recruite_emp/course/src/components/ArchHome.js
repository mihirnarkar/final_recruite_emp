import React from 'react'
import Footer from './Footer'
import Content from './ArchContent'
import CategoryNavbar from './CategoryNavbar'

export default function Home() {
  return (
    <>
    {/* <Navbar title="RecruitEmpArch" path1={"../img/architectureBg.jpeg"}/> */}
    <CategoryNavbar path="img/architectureBg.jpeg" courseName="Architecture" courseDesc="Learn AutoCAD, Revit and AutoCAD 3D" />

    {/* Main content start */}
    <Content/>
    {/* Main content ends */}

    <Footer/>
    </>
  )
}
