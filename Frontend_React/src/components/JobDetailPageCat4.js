import React from 'react'
import BacktoTop from './BacktoTop'
import Footer from './Footer'
import Navbar from './Navbar'
import JobDetailContent from './JobDetailContent'
import JobDetailHeader from './JobDetailHeader'

function JobDetailPageCat4() {
  return (
    <>
    <div class="container-xxl bg-white p-0">
    <Navbar title="RecruitEmp"/>
    <JobDetailHeader/>
    <JobDetailContent 

    jobName="Creative Director" 

    jobResponsibility1=" Design for user and market"
    jobResponsibility2 = "Create multiple high-quality scripts daily"
    jobResponsibility3 = "Plan for content that is contextual and relevant to our target audience"
    jobResponsibility4="Understand the needs of employers to develop content that is in tune with industry requirements"
    jobResponsibility5 = "Learn from other players in the industry who are leveraging the same platform"

    jobQualification1="Candidates with a bachelors degree or above, in any discipline"
    jobQualification2 = "Able to speak and read Tamil fluently and has a firm grasp of English (CEFR C1 or higher)"
    jobQualification3 = "Able to navigate Instagram like a pro and have a basic knowledge of Instagram algorithm"
    jobQualification4="Have a good knack for storytelling and the ability to create high-impact content for social media"

    companydetail="The/Nudge is an action institute working towards a poverty-free India, within our lifetime. We partner with governments, markets, and civil society to build resilient livelihoods for all. We are a collective of some of India's best leaders and entrepreneurs from across the industry, academia, government, and development sectors, and our work is organized across three impact streams: Centre for Skill Development & Entrepreneurship (CSDE): enables underprivileged youth to lead flourishing lives, Centre for Rural Development (CRD): enables rural families to come out of extreme poverty, Centre for Social Innovation (CSI): nudges top talent to solve India's biggest challenges."

    jobApplyBy="20 Nov' 22"
    jobVacancy="2"
    jobNature="Fresher"
    CTC="2.5 - 4 LPA"
    jobLocation="Bangalore"
    jobWorkTime="Full Time"

    skill1="Content Writing"
    skill2="Graphic Design
    "
    skill3=" Video Editing"
    skill4="Business Analytics"
    />
    <BacktoTop/>
    <Footer/>
    </div>
    </>
  )
}

export default JobDetailPageCat4