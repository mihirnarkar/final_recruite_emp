import React from 'react'
import BacktoTop from './BacktoTop'
import Footer from './Footer'
import Navbar from './Navbar'
import JobDetailContent from './JobDetailContent'
import JobDetailHeader from './JobDetailHeader'

function JobDetailPageCat5() {
  return (
    <>
    <div class="container-xxl bg-white p-0">
    <Navbar title="RecruitEmp"/>
    <JobDetailHeader/>
    <JobDetailContent 

    jobName="Wordpress Developer" 

    jobResponsibility1="Design and build the website's front-end"
    jobResponsibility2 = " Create the website architecture"
    jobResponsibility3 = " Work with PHP and MySQL to design, develop and debug web applications"
    jobResponsibility4=" Integrate back-end services with PHP/JavaScript based front end needs"
    jobResponsibility5 = "Generate WordPress themes and plugins"

    jobQualification1="Bachelor's in computer science, engineering, technology or a related field is required"
    jobQualification2 = "Experience of 1 + years in .Net Technologies, MVC and web APIs"
    jobQualification3 = "Knowledge and experience in client-side scripts like JavaScript, jQuery, preferably with Angular JS or React JS frameworks as well"
    jobQualification4="Experience in developing Web applications using ASP .NET Core"

    companydetail="Stirring Minds is India's premier startup ecosystem that helps launch, scale, and support businesses. We have been covered by the best of Indian and international media such as BBC, Guardian (UK), entrepreneur, TOI, ET, HT, Zee, BusinessWorld, Your Story, LBB, Inc42, Business Insider, etc. We are focused on building a community that spreads across our co-working locations and collaborates over our online platform."

    jobApplyBy="
    22 Nov' 22"
    jobVacancy="7"
    jobNature="Fresher"
    CTC="2 - 4 LPA"
    jobLocation="Delhi"
    jobWorkTime="Full Time"

    skill1="CSS"
    skill2="HTML"
    skill3="JavaScript"
    skill4="Search Engine Optimization(SEO)"
    />
    <BacktoTop/>
    <Footer/>
    </div>
    </>
  )
}

export default JobDetailPageCat5