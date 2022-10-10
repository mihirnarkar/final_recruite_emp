import React from 'react'
import CourseContentTemplate from './CourseContentTemplate'

export default function Content() {
    return (
        <>
            {/* Course start */}

            <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
                <div className="container py-5">
                    <div className="section-title text-center position-relative pb-3 mb-5 mx-auto CourseContainer">
                        <h1 className="fw-bold text-primary">Courses we offer</h1>
                        {/* <!-- <h1 className="mb-0">Read The Latest Articles from Our Blog Post</h1> --> */}
                    </div>
                    <br />
                    <h2>Architecture (3)</h2>
                    <br />
                    <div className="row g-5">

                        {/* Template use starts here */}
                        {/* Revit */}
                        <CourseContentTemplate
                        courseTitle = "Revit"
                        courseTechName = "John Doe"
                        courseDate = "01 Jan, 2045"
                        courseDesc1 = "Learn Revit"
                        courseDesc2 = "Master designing, planning, construction, and management of buildings using Autodesk Revit"
                        courseModalHead = "Revit Training Syllabus"
                        courseTrainingTitle1 = "Interface, Drawing Aids & Basic Objects"
                        courseTrainingContent1_top = "Getting Started"
                        courseTrainingContent2_top = "Introduction to interface"
                        courseTrainingContent3_top = "Units and Limits"
                        courseTrainingTitle2 = "Interface, Drawing Aids & Basic Objects"
                        courseTrainingContent1_middle = "Getting Started"
                        courseTrainingContent2_middle = "Introduction to interface"
                        courseTrainingContent3_middle = "Units and Limits"
                        courseTrainingTitle3 = "Interface, Drawing Aids & Basic Objects"
                        courseTrainingContent1_bottom = "Getting Started"
                        courseTrainingContent2_bottom = "Introduction to interface"
                        courseTrainingContent3_bottom = "Units and Limits"
                        />
                        {/* Template use ends here */}

                        {/* Revit */}
                        <CourseContentTemplate
                        courseTitle = "AutoCAD"
                        courseTechName = "John Doe"
                        courseDate = "01 Jan, 2045"
                        courseDesc1 = "Learn Revit"
                        courseDesc2 = "Master designing, planning, construction, and management of buildings using Autodesk Revit"
                        courseModalHead = "Revit Training Syllabus"
                        courseTrainingTitle1 = "Interface, Drawing Aids & Basic Objects"
                        courseTrainingContent1_top = "Getting Started"
                        courseTrainingContent2_top = "Introduction to interface"
                        courseTrainingContent3_top = "Units and Limits"
                        courseTrainingTitle2 = "Interface, Drawing Aids & Basic Objects"
                        courseTrainingContent1_middle = "Getting Started"
                        courseTrainingContent2_middle = "Introduction to interface"
                        courseTrainingContent3_middle = "Units and Limits"
                        courseTrainingTitle3 = "Interface, Drawing Aids & Basic Objects"
                        courseTrainingContent1_bottom = "Getting Started"
                        courseTrainingContent2_bottom = "Introduction to interface"
                        courseTrainingContent3_bottom = "Units and Limits"
                        />
                        {/* Template use ends here */}


                        {/* Revit */}
                        <CourseContentTemplate
                        courseTitle = "Revit"
                        courseTechName = "John Doe"
                        courseDate = "01 Jan, 2045"
                        courseDesc1 = "Learn Revit"
                        courseDesc2 = "Master designing, planning, construction, and management of buildings using Autodesk Revit"
                        courseModalHead = "Revit Training Syllabus"
                        courseTrainingTitle1 = "Interface, Drawing Aids & Basic Objects"
                        courseTrainingContent1_top = "Getting Started"
                        courseTrainingContent2_top = "Introduction to interface"
                        courseTrainingContent3_top = "Units and Limits"
                        courseTrainingTitle2 = "Interface, Drawing Aids & Basic Objects"
                        courseTrainingContent1_middle = "Getting Started"
                        courseTrainingContent2_middle = "Introduction to interface"
                        courseTrainingContent3_middle = "Units and Limits"
                        courseTrainingTitle3 = "Interface, Drawing Aids & Basic Objects"
                        courseTrainingContent1_bottom = "Getting Started"
                        courseTrainingContent2_bottom = "Introduction to interface"
                        courseTrainingContent3_bottom = "Units and Limits"
                        />
                        {/* Template use ends here */}

                    </div>


                </div>

            </div>

            {/* Course ends */}

            
        </>
    )
}
