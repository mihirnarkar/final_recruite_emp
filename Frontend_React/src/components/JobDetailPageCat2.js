import React from 'react'
import BacktoTop from './BacktoTop'
import Footer from './Footer'
import Navbar from './Navbar'
import JobDetailContent from './JobDetailContent'
import JobDetailHeader from './JobDetailHeader'

function JobDetailPageCat2() {
  return (
    <>
    <div class="container-xxl bg-white p-0">
    <Navbar title="RecruitEmp"/>
    <JobDetailHeader/>
    <JobDetailContent 

    jobName="Marketing Manager" 

    jobResponsibility1=" Introduce our educational products"
    jobResponsibility2 = "Work on meeting the company's goals and grow along with the company"
    jobResponsibility3 = "Identify and approach clients for their career guidance"
    jobResponsibility4="Handle the follow-ups as per the response and make 80 calls a day"
    jobResponsibility5 = "Inquire and question the customers to understand their doubts"

    jobQualification1="Resolve queries and issues related to their career"
    jobQualification2 = "Build relationships with prospective clients"
    jobQualification3 = "Make personalized proposals catering to clients' needs"
    jobQualification4="Maintain records of calls and sales"

    companydetail="Stirring Minds is India's premier startup ecosystem that helps launch, scale, and support businesses. We have been covered by the best of Indian and international media such as BBC, Guardian (UK), entrepreneur, TOI, ET, HT, Zee, BusinessWorld, Your Story, LBB, Inc42, Business Insider, etc. We are focused on building a community that spreads across our co-working locations and collaborates over our online platform."

    jobApplyBy="22 Nov' 22"
    jobVacancy="10"
    jobNature="Fresher"
    CTC="2 - 4 LPA"
    jobLocation="Delhi"
    jobWorkTime="Full Time"

    skill1="English Proficiency (Spoken)"
    skill2="English Proficiency (Written)"
    skill3="Business communication"
    skill4="Digital marketing"
    />
    <BacktoTop/>
    <Footer/>
    </div>
    </>
  )
}

export default JobDetailPageCat2