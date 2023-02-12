import React from 'react'
import CourseFooter from './CourseFooter'
import CourseNavbar from './CourseNavbar'

function CourseHome() {
  return (
    <div>
      <CourseNavbar/>

      {/* Course content component */}
      <h1>This is course home</h1>
      <CourseFooter/>
    </div>
  )
}

export default CourseHome
