import React from 'react'

function CourseContentTemplate(props) {
    return (
        <>

            {/* <!-- Category : AutoCAD --> */}
            <div className="col-lg-4 wow slideInUp" data-wow-delay="0.3s">
                <div className="blog-item bg-light rounded overflow-hidden">
                    <div className="blog-img position-relative overflow-hidden">
                        <img className="img-fluid" src="../img/autocad.webp" alt="" />
                        <a className="position-absolute top-0 start-0 bg-primary text-white rounded-end mt-5 py-2 px-4"
                            href="">{props.courseTitle}</a>
                    </div>
                    <div className="p-4">
                        <div className="d-flex mb-3">
                            <small className="me-3"><i className="far fa-user text-primary me-2"></i>{props.courseTechName}</small>
                            <small><i className="far fa-calendar-alt text-primary me-2"></i>{props.courseDate}</small>
                        </div>
                        <h4 className="mb-3">{props.courseDesc1}</h4>
                        <p>{props.courseDesc2}</p>


                        {/* <!-- Triggered modal start --> */}
                        <a className="text-uppercase" data-bs-toggle="modal" data-bs-target="#exampleModal"
                            href="">Enroll now <i className="bi bi-arrow-right"></i>
                        </a>
                        {/* <!-- Triggered modal end --> */}

                        {/* <!-- Modal start --> */}
                        <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                            aria-hidden="true">

                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="exampleModalLabel">{props.courseTitle}</h5>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal"
                                            aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body">
                                        <h3>{props.courseModalHead}</h3>

                                        {/* <!-- Inside modal starts --> */}
                                        <div
                                            className="container-fluid position-relative p-0 shadow p-3 mb-5 bg-white rounded">

                                            <div className="accordion accordion-flush" id="accordionFlushExample">

                                                {/* <!-- Item1 --> */}
                                                <div className="accordion-item">
                                                    <h2 className="accordion-header" id="flush-headingOne">
                                                        <button className="accordion-button collapsed" type="button"
                                                            data-bs-toggle="collapse"
                                                            data-bs-target="#flush-collapseOne"
                                                            aria-expanded="false" aria-controls="flush-collapseOne">
                                                            {/* <!-- Course title 1 --> */}
                                                            <h5>{props.courseTrainingTitle1}</h5>
                                                        </button>
                                                    </h2>
                                                    <div id="flush-collapseOne" className="accordion-collapse collapse"
                                                        aria-labelledby="flush-headingOne"
                                                        data-bs-parent="#accordionFlushExample">
                                                        {/* <!-- Course content 1 --> */}
                                                        <div className="accordion-body">
                                                            <ul>
                                                                <li>{props.courseTrainingContent1_top}</li>
                                                                <li>{props.courseTrainingContent2_top}</li>
                                                                <li>{props.courseTrainingContent3_top}</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* <!-- Item2 --> */}
                                                <div className="accordion-item">
                                                    <h2 className="accordion-header" id="flush-headingTwo">
                                                        <button className="accordion-button collapsed" type="button"
                                                            data-bs-toggle="collapse"
                                                            data-bs-target="#flush-collapseTwo"
                                                            aria-expanded="false" aria-controls="flush-collapseTwo">
                                                            {/* <!-- Course title 2 --> */}
                                                            <h5>{props.courseTrainingTitle2}</h5>
                                                        </button>
                                                    </h2>
                                                    <div id="flush-collapseTwo" className="accordion-collapse collapse"
                                                        aria-labelledby="flush-headingTwo"
                                                        data-bs-parent="#accordionFlushExample">
                                                        {/* <!-- Course content 2 --> */}
                                                        <div className="accordion-body">
                                                            <ul>
                                                                <li>{props.courseTrainingContent1_middle}</li>
                                                                <li>{props.courseTrainingContent2_middle}</li>
                                                                <li>{props.courseTrainingContent3_middle}</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* <!-- Item3 --> */}
                                                <div className="accordion-item">
                                                    <h2 className="accordion-header" id="flush-headingThree">
                                                        <button className="accordion-button collapsed" type="button"
                                                            data-bs-toggle="collapse"
                                                            data-bs-target="#flush-collapseThree"
                                                            aria-expanded="false"
                                                            aria-controls="flush-collapseThree">
                                                            {/* <!-- Course title 3 --> */}
                                                            <h5>{props.courseTrainingTitle3}</h5>
                                                        </button>
                                                    </h2>
                                                    <div id="flush-collapseThree"
                                                        className="accordion-collapse collapse"
                                                        aria-labelledby="flush-headingThree"
                                                        data-bs-parent="#accordionFlushExample">
                                                        {/* <!-- Course content 3 --> */}
                                                        <div className="accordion-body">
                                                            <ul>
                                                                <li>{props.courseTrainingContent1_bottom}</li>
                                                                <li>{props.courseTrainingContent2_bottom}</li>
                                                                <li>{props.courseTrainingContent3_bottom}</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>


                                            </div>

                                        </div>
                                        {/* <!-- Inside modal ends --> */}


                                        {/* <!-- Why learn starts --> */}
                                        <h4>Why learn {props.courseModalTitle}</h4>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima eaque
                                            officia vero dicta hic dolorem omnis velit harum eius repellat, quidem
                                        </p>

                                        <br />

                                        <h4>What placement assistance will you receive?</h4>
                                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque, velit
                                            totam! Esse doloribus laboriosam enim qui nulla quos neque.
                                            Consequuntur?</p>

                                        <br />

                                        <h4>{props.courseModalTitle} project details</h4>
                                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto eius
                                            deserunt dolor quasi deleniti, repellendus ad repudiandae fuga eveniet,
                                            cum numquam laboriosam! Dolores nisi, nam voluptate maiores quam itaque
                                            distinctio!</p>

                                        {/* <!-- Why Learn ends --> */}

                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary"
                                            data-bs-dismiss="modal">Close</button>
                                        <button type="button" className="btn btn-primary">Register</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- Modal end --> */}

                    </div>
                </div>
            </div>
            {/* ends here */}

        </>
    )
}

export default CourseContentTemplate