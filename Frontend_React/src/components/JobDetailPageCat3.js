import React from 'react'
import BacktoTop from './BacktoTop'
import Footer from './Footer'
import Navbar from './Navbar'
import JobDetailContent from './JobDetailContent'
import JobDetailHeader from './JobDetailHeader'

function JobDetailPageCat3() {
  return (
    <>
    <div class="container-xxl bg-white p-0">
    <Navbar title="RecruitEmp"/>
    <JobDetailHeader/>
    <JobDetailContent 

    jobName="Product Designer" 

    jobResponsibility1="Work on product planning and execution throughout the product lifecycle"
    jobResponsibility2 = "Gather and prioritize product and customer requirements"
    jobResponsibility3 = "Build the front-end of applications through appealing visual design"
    jobResponsibility4="Define the product vision, and work closely with engineering, sales, marketing, and provide support to ensure revenue and customer satisfaction goals are met"
    jobResponsibility5 = "Write effective APIs and Test software to ensure responsiveness and efficiency"

    jobQualification1="Bachelor's in computer science, engineering, technology or a related field is required"
    jobQualification2 = "Experience of 1 + years in .Net Technologies, MVC and web APIs"
    jobQualification3 = "Knowledge and experience in client-side scripts like JavaScript, jQuery, preferably with Angular JS or React JS frameworks as well"
    jobQualification4="Experience in developing Web applications using ASP .NET Core"

    companydetail="Founded by an Ivy League alumnus and two serial 'edupreneurs' in 2013, MeetUniversity is backed by Times Internet. It is a passion & technology-driven platform offering counseling to students for studying abroad. Our services include personalized research for best-fit courses and universities, due diligence in the application process for admission, providing assistance in loans and visas, etc. Our product offerings are redefining education marketing across international territories.
    "

    jobApplyBy="19 Nov' 22"
    jobVacancy="1"
    jobNature="Fresher"
    CTC="3.5 - 4 LPA"
    jobLocation="
    Work from home"
    jobWorkTime="Full Time"

    skill1="English Proficiency (Spoken)"
    skill2="Product Lifecycle Management(PLM)"
    skill3="Product Management"
    skill4=" UI & UX Design"
    />
    <BacktoTop/>
    <Footer/>
    </div>
    </>
  )
}

export default JobDetailPageCat3