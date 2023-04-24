import React from 'react'
import BacktoTop from './BacktoTop'
import Footer from './Footer'
import Navbar from './Navbar'
import JobDetailContent from './JobDetailContent'
import JobDetailHeader from './JobDetailHeader'
import UserNavbar from './user/UserNavbar'

function JobDetailPageCat1() {
  return (
    <>
    <div class="container-xxl bg-white p-0">
    {/* <Navbar title="RecruitEmp"/> */}
    <UserNavbar/>
    <JobDetailHeader/>
    <JobDetailContent 

    jobName="Software Developer" 

    jobResponsibility1="Work with development teams and product managers to ideate product and software solutions"
    jobResponsibility2 = "Design client-side and server-side architecture"
    jobResponsibility3 = "Build the front-end of applications through appealing visual design"
    jobResponsibility4="Develop and manage well-functioning databases and applications"
    jobResponsibility5 = "Write effective APIs and Test software to ensure responsiveness and efficiency"

    jobQualification1="Bachelor's in computer science, engineering, technology or a related field is required"
    jobQualification2 = "Experience of 1 + years in .Net Technologies, MVC and web APIs"
    jobQualification3 = "Knowledge and experience in client-side scripts like JavaScript, jQuery, preferably with Angular JS or React JS frameworks as well"
    jobQualification4="Experience in developing Web applications using ASP .NET Core"

    companydetail="At Softway, we do work we're proud of, work that makes an impact on our clients' business and hopefully, the world. We do it by bringing bright people together from all walks of life and every imaginable background, letting them loose on a challenge, and giving them the freedom to explore the possibilities. We make stuff that's meaningful because there's someone out there who's going to see it, touch it, use it, or share it. So we put a lot of passion, a little play, and some serious planning into the art and science of communicating in the digital world."

    jobApplyBy="16 Nov' 22"
    jobVacancy="2"
    jobNature="Fresher"
    CTC="3 - 4 LPA"
    jobLocation="Mumbai"
    jobWorkTime="Full Time"

    skill1="Python"
    skill2="Django"
    skill3="MYSQL"
    skill4="Flask"
    />
    <BacktoTop/>
    <Footer/>
    </div>
    </>
  )
}

export default JobDetailPageCat1