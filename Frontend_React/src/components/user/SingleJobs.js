import React from 'react'

const SingleJobs = (props) => {
  return (
    <div>
      <h2>{props.key}</h2>
      <h2>{props.title}</h2>
    </div>
  )
}

export default SingleJobs