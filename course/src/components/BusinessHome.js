import React from 'react'
import BusinessContent from './BusinessContent'
import CategoryNavbar from './CategoryNavbar'
import Footer from './Footer'

function BusinessHome() {
  return (
    <>
    <CategoryNavbar path="../img/businessBg.webp" courseName="Business" courseDesc="Learn Digital marketing, Business analytics and Advanced excel" />
    <BusinessContent/>
    <Footer/>
    </>
  )
}

export default BusinessHome