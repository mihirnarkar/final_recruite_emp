import React from 'react'

function DesignContent() {
  return (
    <>
    {/* <!-- Course Start --> */}
    <div class="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div class="container py-5">
            <div class="section-title text-center position-relative pb-3 mb-5 mx-auto bg1" >
                <h1 class="fw-bold text-primary">Courses we offer</h1>
                {/* <!-- <h1 class="mb-0">Read The Latest Articles from Our Blog Post</h1> --> */}
            </div>
            <br/>
            <h2>Business (5)</h2>
            <br/>
            <div class="row g-5">

                {/* <!-- Category : AutoCAD --> */}
                <div class="col-lg-4 wow slideInUp" data-wow-delay="0.3s">
                    <div class="blog-item bg-light rounded overflow-hidden">
                        <div class="blog-img position-relative overflow-hidden">
                            <img class="img-fluid" src="../img/autocad.webp" alt="" />
                            <a class="position-absolute top-0 start-0 bg-primary text-white rounded-end mt-5 py-2 px-4"
                                href="">AutoCAD</a>
                        </div>
                        <div class="p-4">
                            <div class="d-flex mb-3">
                                <small><i class="far fa-calendar-alt text-primary me-2"></i>01 Jan, 2045</small>
                            </div>
                            <h4 class="mb-3">Learn AutoCAD</h4>
                            <p>Learn AutoCAD to master the industry-leading CAD software for Mechanical, Civil, and
                                Electrical Engineers</p>


                            {/* <!-- Triggered modal start --> */}
                            <a class="text-uppercase" data-bs-toggle="modal" data-bs-target="#exampleModal"
                                href="">Enroll now <i class="bi bi-arrow-right"></i>
                            </a>
                            {/* <!-- Triggered modal end --> */}

                            {/* <!-- Modal start --> */}
                            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                                aria-hidden="true">

                                <div class="modal-dialog">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h5 class="modal-title" id="exampleModalLabel">AutoCAD</h5>
                                            <button type="button" class="btn-close" data-bs-dismiss="modal"
                                                aria-label="Close"></button>
                                        </div>
                                        <div class="modal-body">
                                            <h3>AutoCAD Training Syllabus</h3>

                                            {/* <!-- Inside modal starts --> */}
                                            <div
                                                class="container-fluid position-relative p-0 shadow p-3 mb-5 bg-white rounded">

                                                <div class="accordion accordion-flush" id="accordionFlushExample">

                                                    {/* <!-- Item1 --> */}
                                                    <div class="accordion-item">
                                                        <h2 class="accordion-header" id="flush-headingOne">
                                                            <button class="accordion-button collapsed" type="button"
                                                                data-bs-toggle="collapse"
                                                                data-bs-target="#flush-collapseOne"
                                                                aria-expanded="false" aria-controls="flush-collapseOne">
                                                                {/* <!-- Course title 1 --> */}
                                                                <h5>Interface, Drawing Aids & Basic Objects</h5>
                                                            </button>
                                                        </h2>
                                                        <div id="flush-collapseOne" class="accordion-collapse collapse"
                                                            aria-labelledby="flush-headingOne"
                                                            data-bs-parent="#accordionFlushExample">
                                                            {/* <!-- Course content 1 --> */}
                                                            <div class="accordion-body">
                                                                <ul>
                                                                    <li>Getting Started</li>
                                                                    <li>Introduction to interface</li>
                                                                    <li>Units and limits</li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    {/* <!-- Item2 --> */}
                                                    <div class="accordion-item">
                                                        <h2 class="accordion-header" id="flush-headingTwo">
                                                            <button class="accordion-button collapsed" type="button"
                                                                data-bs-toggle="collapse"
                                                                data-bs-target="#flush-collapseTwo"
                                                                aria-expanded="false" aria-controls="flush-collapseTwo">
                                                                {/* <!-- Course title 2 --> */}
                                                                <h5>Complex Objects & Object editing</h5>
                                                            </button>
                                                        </h2>
                                                        <div id="flush-collapseTwo" class="accordion-collapse collapse"
                                                            aria-labelledby="flush-headingTwo"
                                                            data-bs-parent="#accordionFlushExample">
                                                            {/* <!-- Course content 2 --> */}
                                                            <div class="accordion-body">
                                                                <ul>
                                                                    <li>Editing commands</li>
                                                                    <li>Polylines, Rectangles, Polygons and Ellipses
                                                                    </li>
                                                                    <li>Grip Editing, Normal and associative arrays</li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    {/* <!-- Item3 --> */}
                                                    <div class="accordion-item">
                                                        <h2 class="accordion-header" id="flush-headingThree">
                                                            <button class="accordion-button collapsed" type="button"
                                                                data-bs-toggle="collapse"
                                                                data-bs-target="#flush-collapseThree"
                                                                aria-expanded="false"
                                                                aria-controls="flush-collapseThree">
                                                                {/* <!-- Course title 3 --> */}
                                                                <h5>Blocks & Annotations</h5>
                                                            </button>
                                                        </h2>
                                                        <div id="flush-collapseThree"
                                                            class="accordion-collapse collapse"
                                                            aria-labelledby="flush-headingThree"
                                                            data-bs-parent="#accordionFlushExample">
                                                            {/* <!-- Course content 3 --> */}
                                                            <div class="accordion-body">
                                                                <ul>
                                                                    <li>Blocks</li>
                                                                    <li>Hatching</li>
                                                                    <li>Text and formatting</li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>


                                                </div>

                                            </div>
                                            {/* <!-- Inside modal ends --> */}


                                            {/* <!-- Why learn starts --> */}
                                            <h4>Why learn AutoCAD</h4>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima eaque
                                                officia vero dicta hic dolorem omnis velit harum eius repellat, quidem
                                            </p>

                                            <br/>

                                            <h4>What placement assistance will you receive?</h4>
                                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque, velit
                                                totam! Esse doloribus laboriosam enim qui nulla quos neque.
                                                Consequuntur?</p>

                                            <br/>

                                            <h4>AutoCAD project details</h4>
                                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto eius
                                                deserunt dolor quasi deleniti, repellendus ad repudiandae fuga eveniet,
                                                cum numquam laboriosam! Dolores nisi, nam voluptate maiores quam itaque
                                                distinctio!</p>

                                            {/* <!-- Why Learn ends --> */}

                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-secondary"
                                                data-bs-dismiss="modal">Close</button>
                                            <button type="button" class="btn btn-primary">Register</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Modal end --> */}



                        </div>
                    </div>
                </div>


                {/* <!-- Category : Revit --> */}
                <div class="col-lg-4 wow slideInUp" data-wow-delay="0.6s">
                    <div class="blog-item bg-light rounded overflow-hidden">
                        <div class="blog-img position-relative overflow-hidden">
                            <img class="img-fluid" src="../img/revit.webp" alt=""/>
                            <a class="position-absolute top-0 start-0 bg-primary text-white rounded-end mt-5 py-2 px-4"
                                href="">Revit</a>
                        </div>
                        <div class="p-4">
                            <div class="d-flex mb-3">
                                <small class="me-3"><i class="far fa-user text-primary me-2"></i>John Doe</small>
                                <small><i class="far fa-calendar-alt text-primary me-2"></i>01 Jan, 2045</small>
                            </div>
                            <h4 class="mb-3">Learn Revit</h4>
                            <p>Master designing, planning, construction, and management of buildings using Autodesk
                                Revit</p>


                            {/* <!-- Triggered modal start --> */}
                            <a class="text-uppercase" data-bs-toggle="modal" data-bs-target="#exampleModal1"
                                href="">Enroll now <i class="bi bi-arrow-right"></i>
                            </a>
                            {/* <!-- Triggered modal end --> */}

                            {/* <!-- Modal start --> */}
                            <div class="modal fade" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel"
                                aria-hidden="true">
                                <div class="modal-dialog">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h5 class="modal-title" id="exampleModalLabel">Revit</h5>
                                            <button type="button" class="btn-close" data-bs-dismiss="modal"
                                                aria-label="Close"></button>
                                        </div>
                                        <div class="modal-body">
                                            <h3>Revit Training Syllabus</h3>


                                            {/* <!-- Inside modal starts --> */}

                                            <div
                                                class="container-fluid position-relative p-0 shadow p-3 mb-5 bg-white rounded">

                                                <div class="accordion accordion-flush" id="accordionFlushExample">

                                                    {/* <!-- Item1 --> */}
                                                    <div class="accordion-item">
                                                        <h2 class="accordion-header" id="flush-headingOne">
                                                            <button class="accordion-button collapsed" type="button"
                                                                data-bs-toggle="collapse"
                                                                data-bs-target="#flush-collapseOne"
                                                                aria-expanded="false" aria-controls="flush-collapseOne">
                                                                {/* <!-- Course title 1 --> */}
                                                                <h5>Interface, Drawing Aids & Basic Objects</h5>
                                                            </button>
                                                        </h2>
                                                        <div id="flush-collapseOne" class="accordion-collapse collapse"
                                                            aria-labelledby="flush-headingOne"
                                                            data-bs-parent="#accordionFlushExample">
                                                            {/* <!-- Course content 1 --> */}
                                                            <div class="accordion-body">
                                                                <ul>
                                                                    <li>Getting Started</li>
                                                                    <li>Introduction to interface</li>
                                                                    <li>Units and limits</li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    {/* <!-- Item2 --> */}
                                                    <div class="accordion-item">
                                                        <h2 class="accordion-header" id="flush-headingTwo">
                                                            <button class="accordion-button collapsed" type="button"
                                                                data-bs-toggle="collapse"
                                                                data-bs-target="#flush-collapseTwo"
                                                                aria-expanded="false" aria-controls="flush-collapseTwo">
                                                                {/* <!-- Course title 2 --> */}
                                                                <h5>Complex Objects & Object editing</h5>
                                                            </button>
                                                        </h2>
                                                        <div id="flush-collapseTwo" class="accordion-collapse collapse"
                                                            aria-labelledby="flush-headingTwo"
                                                            data-bs-parent="#accordionFlushExample">
                                                            {/* <!-- Course content 2 --> */}
                                                            <div class="accordion-body">
                                                                <ul>
                                                                    <li>Editing commands</li>
                                                                    <li>Polylines, Rectangles, Polygons and Ellipses
                                                                    </li>
                                                                    <li>Grip Editing, Normal and associative arrays</li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    {/* <!-- Item 3 --> */}
                                                    <div class="accordion-item">
                                                        <h2 class="accordion-header" id="flush-headingThree">
                                                            <button class="accordion-button collapsed" type="button"
                                                                data-bs-toggle="collapse"
                                                                data-bs-target="#flush-collapseThree"
                                                                aria-expanded="false"
                                                                aria-controls="flush-collapseThree">
                                                                {/* <!-- Course title 3 --> */}
                                                                <h5>Blocks & Annotations</h5>
                                                            </button>
                                                        </h2>
                                                        <div id="flush-collapseThree"
                                                            class="accordion-collapse collapse"
                                                            aria-labelledby="flush-headingThree"
                                                            data-bs-parent="#accordionFlushExample">
                                                            {/* <!-- Course content 3 --> */}
                                                            <div class="accordion-body">
                                                                <ul>
                                                                    <li>Blocks</li>
                                                                    <li>Hatching</li>
                                                                    <li>Text and formatting</li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>

                                            </div>

                                            {/* <!-- Inside modal ends --> */}

                                            {/* <!-- Why learn starts --> */}
                                            <h4>Why learn Revit</h4>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
                                                eaque officia vero dicta hic dolorem omnis velit harum eius
                                                repellat, quidem </p>

                                            <br/>

                                            <h4>What placement assistance will you receive?</h4>
                                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque,
                                                velit totam! Esse doloribus laboriosam enim qui nulla quos
                                                neque. Consequuntur?</p>

                                            <br/>

                                            <h4>Revit project details</h4>
                                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto
                                                eius deserunt dolor quasi deleniti, repellendus ad repudiandae
                                                fuga eveniet, cum numquam laboriosam! Dolores nisi, nam
                                                voluptate maiores quam itaque distinctio!</p>

                                            {/* <!-- Why Learn ends --> */}

                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-secondary"
                                                data-bs-dismiss="modal">Close</button>
                                            <button type="button" class="btn btn-primary">Register</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Modal end --> */}

                        </div>
                    </div>
                </div>


                {/* <!-- Category : AutoCAD 3D --> */}
                <div class="col-lg-4 wow slideInUp" data-wow-delay="0.6s">
                    <div class="blog-item bg-light rounded overflow-hidden">
                        <div class="blog-img position-relative overflow-hidden">
                            <img class="img-fluid" src="../img/autocad3D.webp" alt=""/>
                            <a class="position-absolute top-0 start-0 bg-primary text-white rounded-end mt-5 py-2 px-4"
                                href="">AutoCAD 3D</a>
                        </div>
                        <div class="p-4">
                            <div class="d-flex mb-3">
                                <small class="me-3"><i class="far fa-user text-primary me-2"></i>John Doe</small>
                                <small><i class="far fa-calendar-alt text-primary me-2"></i>01 Jan, 2045</small>
                            </div>
                            <h4 class="mb-3">Learn AutoCAD 3D</h4>
                            <p>Learn about the basics of solid, surface & mesh modeling and their real life applications
                                to master the art of 3D modeling in AutoCAD.</p>


                            {/* <!-- Triggered modal start --> */}
                            <a class="text-uppercase" data-bs-toggle="modal" data-bs-target="#exampleModal2"
                                href="">Enroll now <i class="bi bi-arrow-right"></i>
                            </a>
                            {/* <!-- Triggered modal end --> */}

                            {/* <!-- Modal start --> */}
                            <div class="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel"
                                aria-hidden="true">
                                <div class="modal-dialog">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h5 class="modal-title" id="exampleModalLabel">AutoCAD 3D</h5>
                                            <button type="button" class="btn-close" data-bs-dismiss="modal"
                                                aria-label="Close"></button>
                                        </div>
                                        <div class="modal-body">
                                            <h3>AutoCAD 3D Training Syllabus</h3>

                                            {/* <!-- Inside modal starts --> */}
                                            <div
                                                class="container-fluid position-relative p-0 shadow p-3 mb-5 bg-white rounded">

                                                <div class="accordion accordion-flush" id="accordionFlushExample">

                                                    {/* <!-- Item1 --> */}
                                                    <div class="accordion-item">
                                                        <h2 class="accordion-header" id="flush-headingOne">
                                                            <button class="accordion-button collapsed" type="button"
                                                                data-bs-toggle="collapse"
                                                                data-bs-target="#flush-collapseOne"
                                                                aria-expanded="false" aria-controls="flush-collapseOne">
                                                                {/* <!-- Course title 1 --> */}
                                                                <h5>Interface, Drawing Aids & Basic Objects</h5>
                                                            </button>
                                                        </h2>
                                                        <div id="flush-collapseOne" class="accordion-collapse collapse"
                                                            aria-labelledby="flush-headingOne"
                                                            data-bs-parent="#accordionFlushExample">
                                                            {/* <!-- Course content 1 --> */}
                                                            <div class="accordion-body">
                                                                <ul>
                                                                    <li>Getting Started</li>
                                                                    <li>Introduction to interface</li>
                                                                    <li>Units and limits</li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    {/* <!-- Item2 --> */}
                                                    <div class="accordion-item">
                                                        <h2 class="accordion-header" id="flush-headingTwo">
                                                            <button class="accordion-button collapsed" type="button"
                                                                data-bs-toggle="collapse"
                                                                data-bs-target="#flush-collapseTwo"
                                                                aria-expanded="false" aria-controls="flush-collapseTwo">
                                                                {/* <!-- Course title 2 --> */}
                                                                <h5>Complex Objects & Object editing</h5>
                                                            </button>
                                                        </h2>
                                                        <div id="flush-collapseTwo" class="accordion-collapse collapse"
                                                            aria-labelledby="flush-headingTwo"
                                                            data-bs-parent="#accordionFlushExample">
                                                            {/* <!-- Course content 2 --> */}
                                                            <div class="accordion-body">
                                                                <ul>
                                                                    <li>Editing commands</li>
                                                                    <li>Polylines, Rectangles, Polygons and Ellipses
                                                                    </li>
                                                                    <li>Grip Editing, Normal and associative arrays</li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    {/* <!-- Item3 --> */}
                                                    <div class="accordion-item">
                                                        <h2 class="accordion-header" id="flush-headingThree">
                                                            <button class="accordion-button collapsed" type="button"
                                                                data-bs-toggle="collapse"
                                                                data-bs-target="#flush-collapseThree"
                                                                aria-expanded="false"
                                                                aria-controls="flush-collapseThree">
                                                                {/* <!-- Course title 3 --> */}
                                                                <h5>Blocks & Annotations</h5>
                                                            </button>
                                                        </h2>
                                                        <div id="flush-collapseThree"
                                                            class="accordion-collapse collapse"
                                                            aria-labelledby="flush-headingThree"
                                                            data-bs-parent="#accordionFlushExample">
                                                            {/* <!-- Course content 3 --> */}
                                                            <div class="accordion-body">
                                                                <ul>
                                                                    <li>Blocks</li>
                                                                    <li>Hatching</li>
                                                                    <li>Text and formatting</li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>


                                                </div>

                                            </div>
                                            {/* <!-- Inside modal ends --> */}

                                            {/* <!-- Why learn starts --> */}
                                            <h4>Why learn AutoCAD 3D</h4>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
                                                eaque officia vero dicta hic dolorem omnis velit harum eius
                                                repellat, quidem </p>

                                            <br/>

                                            <h4>What placement assistance will you receive?</h4>
                                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque,
                                                velit totam! Esse doloribus laboriosam enim qui nulla quos
                                                neque. Consequuntur?</p>

                                            <br/>

                                            <h4>AutoCAD 3D project details</h4>
                                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto
                                                eius deserunt dolor quasi deleniti, repellendus ad repudiandae
                                                fuga eveniet, cum numquam laboriosam! Dolores nisi, nam
                                                voluptate maiores quam itaque distinctio!</p>

                                            {/* <!-- Why Learn ends --> */}


                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-secondary"
                                                data-bs-dismiss="modal">Close</button>
                                            <button type="button" class="btn btn-primary">Register</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Modal end --> */}

                        </div>
                    </div>
                </div>



               
                {/* <!-- Category : AutoCAD 3D --> */}
                <div class="col-lg-4 wow slideInUp" data-wow-delay="0.6s">
                    <div class="blog-item bg-light rounded overflow-hidden">
                        <div class="blog-img position-relative overflow-hidden">
                            <img class="img-fluid" src="../img/autocad3D.webp" alt=""/>
                            <a class="position-absolute top-0 start-0 bg-primary text-white rounded-end mt-5 py-2 px-4"
                                href="">AutoCAD 3D</a>
                        </div>
                        <div class="p-4">
                            <div class="d-flex mb-3">
                                <small class="me-3"><i class="far fa-user text-primary me-2"></i>John Doe</small>
                                <small><i class="far fa-calendar-alt text-primary me-2"></i>01 Jan, 2045</small>
                            </div>
                            <h4 class="mb-3">Learn AutoCAD 3D</h4>
                            <p>Learn about the basics of solid, surface & mesh modeling and their real life applications
                                to master the art of 3D modeling in AutoCAD.</p>


                            {/* <!-- Triggered modal start --> */}
                            <a class="text-uppercase" data-bs-toggle="modal" data-bs-target="#exampleModal2"
                                href="">Enroll now <i class="bi bi-arrow-right"></i>
                            </a>
                            {/* <!-- Triggered modal end --> */}

                            {/* <!-- Modal start --> */}
                            <div class="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel"
                                aria-hidden="true">
                                <div class="modal-dialog">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h5 class="modal-title" id="exampleModalLabel">AutoCAD 3D</h5>
                                            <button type="button" class="btn-close" data-bs-dismiss="modal"
                                                aria-label="Close"></button>
                                        </div>
                                        <div class="modal-body">
                                            <h3>AutoCAD 3D Training Syllabus</h3>

                                            {/* <!-- Inside modal starts --> */}
                                            <div
                                                class="container-fluid position-relative p-0 shadow p-3 mb-5 bg-white rounded">

                                                <div class="accordion accordion-flush" id="accordionFlushExample">

                                                    {/* <!-- Item1 --> */}
                                                    <div class="accordion-item">
                                                        <h2 class="accordion-header" id="flush-headingOne">
                                                            <button class="accordion-button collapsed" type="button"
                                                                data-bs-toggle="collapse"
                                                                data-bs-target="#flush-collapseOne"
                                                                aria-expanded="false" aria-controls="flush-collapseOne">
                                                                {/* <!-- Course title 1 --> */}
                                                                <h5>Interface, Drawing Aids & Basic Objects</h5>
                                                            </button>
                                                        </h2>
                                                        <div id="flush-collapseOne" class="accordion-collapse collapse"
                                                            aria-labelledby="flush-headingOne"
                                                            data-bs-parent="#accordionFlushExample">
                                                            {/* <!-- Course content 1 --> */}
                                                            <div class="accordion-body">
                                                                <ul>
                                                                    <li>Getting Started</li>
                                                                    <li>Introduction to interface</li>
                                                                    <li>Units and limits</li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    {/* <!-- Item2 --> */}
                                                    <div class="accordion-item">
                                                        <h2 class="accordion-header" id="flush-headingTwo">
                                                            <button class="accordion-button collapsed" type="button"
                                                                data-bs-toggle="collapse"
                                                                data-bs-target="#flush-collapseTwo"
                                                                aria-expanded="false" aria-controls="flush-collapseTwo">
                                                                {/* <!-- Course title 2 --> */}
                                                                <h5>Complex Objects & Object editing</h5>
                                                            </button>
                                                        </h2>
                                                        <div id="flush-collapseTwo" class="accordion-collapse collapse"
                                                            aria-labelledby="flush-headingTwo"
                                                            data-bs-parent="#accordionFlushExample">
                                                            {/* <!-- Course content 2 --> */}
                                                            <div class="accordion-body">
                                                                <ul>
                                                                    <li>Editing commands</li>
                                                                    <li>Polylines, Rectangles, Polygons and Ellipses
                                                                    </li>
                                                                    <li>Grip Editing, Normal and associative arrays</li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    {/* <!-- Item3 --> */}
                                                    <div class="accordion-item">
                                                        <h2 class="accordion-header" id="flush-headingThree">
                                                            <button class="accordion-button collapsed" type="button"
                                                                data-bs-toggle="collapse"
                                                                data-bs-target="#flush-collapseThree"
                                                                aria-expanded="false"
                                                                aria-controls="flush-collapseThree">
                                                                {/* <!-- Course title 3 --> */}
                                                                <h5>Blocks & Annotations</h5>
                                                            </button>
                                                        </h2>
                                                        <div id="flush-collapseThree"
                                                            class="accordion-collapse collapse"
                                                            aria-labelledby="flush-headingThree"
                                                            data-bs-parent="#accordionFlushExample">
                                                            {/* <!-- Course content 3 --> */}
                                                            <div class="accordion-body">
                                                                <ul>
                                                                    <li>Blocks</li>
                                                                    <li>Hatching</li>
                                                                    <li>Text and formatting</li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>


                                                </div>

                                            </div>
                                            {/* <!-- Inside modal ends --> */}

                                            {/* <!-- Why learn starts --> */}
                                            <h4>Why learn AutoCAD 3D</h4>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
                                                eaque officia vero dicta hic dolorem omnis velit harum eius
                                                repellat, quidem </p>

                                            <br/>

                                            <h4>What placement assistance will you receive?</h4>
                                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque,
                                                velit totam! Esse doloribus laboriosam enim qui nulla quos
                                                neque. Consequuntur?</p>

                                            <br/>

                                            <h4>AutoCAD 3D project details</h4>
                                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto
                                                eius deserunt dolor quasi deleniti, repellendus ad repudiandae
                                                fuga eveniet, cum numquam laboriosam! Dolores nisi, nam
                                                voluptate maiores quam itaque distinctio!</p>

                                            {/* <!-- Why Learn ends --> */}


                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-secondary"
                                                data-bs-dismiss="modal">Close</button>
                                            <button type="button" class="btn btn-primary">Register</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Modal end --> */}

                        </div>
                    </div>
                </div>


                {/* <!-- Category : AutoCAD 3D --> */}
                <div class="col-lg-4 wow slideInUp" data-wow-delay="0.6s">
                    <div class="blog-item bg-light rounded overflow-hidden">
                        <div class="blog-img position-relative overflow-hidden">
                            <img class="img-fluid" src="../img/autocad3D.webp" alt=""/>
                            <a class="position-absolute top-0 start-0 bg-primary text-white rounded-end mt-5 py-2 px-4"
                                href="">AutoCAD 3D</a>
                        </div>
                        <div class="p-4">
                            <div class="d-flex mb-3">
                                <small class="me-3"><i class="far fa-user text-primary me-2"></i>John Doe</small>
                                <small><i class="far fa-calendar-alt text-primary me-2"></i>01 Jan, 2045</small>
                            </div>
                            <h4 class="mb-3">Learn AutoCAD 3D</h4>
                            <p>Learn about the basics of solid, surface & mesh modeling and their real life applications
                                to master the art of 3D modeling in AutoCAD.</p>


                            {/* <!-- Triggered modal start --> */}
                            <a class="text-uppercase" data-bs-toggle="modal" data-bs-target="#exampleModal2"
                                href="">Enroll now <i class="bi bi-arrow-right"></i>
                            </a>
                            {/* <!-- Triggered modal end --> */}

                            {/* <!-- Modal start --> */}
                            <div class="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel"
                                aria-hidden="true">
                                <div class="modal-dialog">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h5 class="modal-title" id="exampleModalLabel">AutoCAD 3D</h5>
                                            <button type="button" class="btn-close" data-bs-dismiss="modal"
                                                aria-label="Close"></button>
                                        </div>
                                        <div class="modal-body">
                                            <h3>AutoCAD 3D Training Syllabus</h3>

                                            {/* <!-- Inside modal starts --> */}
                                            <div
                                                class="container-fluid position-relative p-0 shadow p-3 mb-5 bg-white rounded">

                                                <div class="accordion accordion-flush" id="accordionFlushExample">

                                                    {/* <!-- Item1 --> */}
                                                    <div class="accordion-item">
                                                        <h2 class="accordion-header" id="flush-headingOne">
                                                            <button class="accordion-button collapsed" type="button"
                                                                data-bs-toggle="collapse"
                                                                data-bs-target="#flush-collapseOne"
                                                                aria-expanded="false" aria-controls="flush-collapseOne">
                                                                {/* <!-- Course title 1 --> */}
                                                                <h5>Interface, Drawing Aids & Basic Objects</h5>
                                                            </button>
                                                        </h2>
                                                        <div id="flush-collapseOne" class="accordion-collapse collapse"
                                                            aria-labelledby="flush-headingOne"
                                                            data-bs-parent="#accordionFlushExample">
                                                            {/* <!-- Course content 1 --> */}
                                                            <div class="accordion-body">
                                                                <ul>
                                                                    <li>Getting Started</li>
                                                                    <li>Introduction to interface</li>
                                                                    <li>Units and limits</li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    {/* <!-- Item2 --> */}
                                                    <div class="accordion-item">
                                                        <h2 class="accordion-header" id="flush-headingTwo">
                                                            <button class="accordion-button collapsed" type="button"
                                                                data-bs-toggle="collapse"
                                                                data-bs-target="#flush-collapseTwo"
                                                                aria-expanded="false" aria-controls="flush-collapseTwo">
                                                                {/* <!-- Course title 2 --> */}
                                                                <h5>Complex Objects & Object editing</h5>
                                                            </button>
                                                        </h2>
                                                        <div id="flush-collapseTwo" class="accordion-collapse collapse"
                                                            aria-labelledby="flush-headingTwo"
                                                            data-bs-parent="#accordionFlushExample">
                                                            {/* <!-- Course content 2 --> */}
                                                            <div class="accordion-body">
                                                                <ul>
                                                                    <li>Editing commands</li>
                                                                    <li>Polylines, Rectangles, Polygons and Ellipses
                                                                    </li>
                                                                    <li>Grip Editing, Normal and associative arrays</li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    {/* <!-- Item3 --> */}
                                                    <div class="accordion-item">
                                                        <h2 class="accordion-header" id="flush-headingThree">
                                                            <button class="accordion-button collapsed" type="button"
                                                                data-bs-toggle="collapse"
                                                                data-bs-target="#flush-collapseThree"
                                                                aria-expanded="false"
                                                                aria-controls="flush-collapseThree">
                                                                {/* <!-- Course title 3 --> */}
                                                                <h5>Blocks & Annotations</h5>
                                                            </button>
                                                        </h2>
                                                        <div id="flush-collapseThree"
                                                            class="accordion-collapse collapse"
                                                            aria-labelledby="flush-headingThree"
                                                            data-bs-parent="#accordionFlushExample">
                                                            {/* <!-- Course content 3 --> */}
                                                            <div class="accordion-body">
                                                                <ul>
                                                                    <li>Blocks</li>
                                                                    <li>Hatching</li>
                                                                    <li>Text and formatting</li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>


                                                </div>

                                            </div>
                                            {/* <!-- Inside modal ends --> */}

                                            {/* <!-- Why learn starts --> */}
                                            <h4>Why learn AutoCAD 3D</h4>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
                                                eaque officia vero dicta hic dolorem omnis velit harum eius
                                                repellat, quidem </p>

                                            <br/>

                                            <h4>What placement assistance will you receive?</h4>
                                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque,
                                                velit totam! Esse doloribus laboriosam enim qui nulla quos
                                                neque. Consequuntur?</p>

                                            <br/>

                                            <h4>AutoCAD 3D project details</h4>
                                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto
                                                eius deserunt dolor quasi deleniti, repellendus ad repudiandae
                                                fuga eveniet, cum numquam laboriosam! Dolores nisi, nam
                                                voluptate maiores quam itaque distinctio!</p>

                                            {/* <!-- Why Learn ends --> */}


                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-secondary"
                                                data-bs-dismiss="modal">Close</button>
                                            <button type="button" class="btn btn-primary">Register</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Modal end --> */}

                        </div>
                    </div>
                </div>

            </div>



        </div>

    </div>
    {/* <!-- Course end --> */}

    {/* <!-- Testimonial Start --> */}
    <div class="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div class="container py-5">
            <div class="section-title text-center position-relative pb-3 mb-4 mx-auto bg1">
                <h1 class="mb-0">Reviews from students</h1>
            </div>
            <div class="owl-carousel testimonial-carousel wow fadeInUp" data-wow-delay="0.6s">
                <div class="testimonial-item bg-light my-4">
                    <div class="d-flex align-items-center border-bottom pt-5 pb-4 px-5">
                        <img class="img-fluid rounded" src="../img/testimonial-1.jpg bg2" />
                        <div class="ps-4">
                            <h4 class="text-primary mb-1">Purva Pawar</h4>
                            <small class="text-uppercase">
                                <i class='fas fa-star'></i>
                                <i class='fas fa-star'></i>
                                <i class='fas fa-star'></i>
                                <i class='fas fa-star'></i>
                            </small>
                        </div>
                    </div>
                    <div class="pt-4 pb-5 px-5">
                        Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam
                    </div>
                </div>
                <div class="testimonial-item bg-light my-4">
                    <div class="d-flex align-items-center border-bottom pt-5 pb-4 px-5">
                         <img class="img-fluid rounded" src="../img/testimonial-2.jpg bg3" />
                        <div class="ps-4">
                            <h4 class="text-primary mb-1">Saravanavel</h4>
                            <small class="text-uppercase">
                                <i class='fas fa-star'></i>
                                <i class='fas fa-star'></i>
                                <i class='fas fa-star'></i>
                                <i class='fas fa-star'></i>
                                <i class='fas fa-star'></i>
                            </small>
                        </div>
                    </div>
                    <div class="pt-4 pb-5 px-5">
                        Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam
                    </div>
                </div>
                <div class="testimonial-item bg-light my-4">
                    <div class="d-flex align-items-center border-bottom pt-5 pb-4 px-5">
                        <img class="img-fluid rounded" src="../img/testimonial-3.jpg bg3"  />
                        <div class="ps-4">
                            <h4 class="text-primary mb-1">Jatin Tiwari</h4>
                            <small class="text-uppercase">
                                <i class='fas fa-star'></i>
                                <i class='fas fa-star'></i>
                                <i class='fas fa-star'></i>
                                <i class='fas fa-star'></i>
                                <i class='fas fa-star'></i>
                            </small>
                        </div>
                    </div>
                    <div class="pt-4 pb-5 px-5">
                        Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam
                    </div>
                </div>
                <div class="testimonial-item bg-light my-4">
                    <div class="d-flex align-items-center border-bottom pt-5 pb-4 px-5">
                        <img class="img-fluid rounded" src="../img/testimonial-4.jpg bg3" />
                        <div class="ps-4">
                            <h4 class="text-primary mb-1">Saniya Bande</h4>
                            <small class="text-uppercase">
                                <i class='fas fa-star'></i>
                                <i class='fas fa-star'></i>
                                <i class='fas fa-star'></i>
                            </small>
                        </div>
                    </div>
                    <div class="pt-4 pb-5 px-5">
                        Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Testimonial End --></div> */}
    </>
  )
}

export default DesignContent