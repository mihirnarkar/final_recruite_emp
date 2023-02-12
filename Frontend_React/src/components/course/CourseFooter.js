import React from 'react'
import { Link } from 'react-router-dom'

function CourseFooter() {
  return (
    <>
    {/* <!-- Footer Start --> */}
    <div className="container-fluid bg-dark text-white-50 footer pt-5 mt-5 wow fadeIn" data-wow-delay="0.1s">
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-lg-3 col-md-6">
              <h5 className="text-white mb-4">Company</h5>
              <Link className="btn btn-link text-white-50" to="">About Us</Link>
              <Link className="btn btn-link text-white-50" to="">Contact Us</Link>
              <Link className="btn btn-link text-white-50" to="">Our Services</Link>
              <Link className="btn btn-link text-white-50" to="">Privacy Policy</Link>
              <Link className="btn btn-link text-white-50" to="">Terms & Condition</Link>
            </div>
            <div className="col-lg-3 col-md-6">
              <h5 className="text-white mb-4">Quick Links</h5>
              <Link className="btn btn-link text-white-50" to="">About Us</Link>
              <Link className="btn btn-link text-white-50" to="">Contact Us</Link>
              <Link className="btn btn-link text-white-50" to="">Our Services</Link>
              <Link className="btn btn-link text-white-50" to="">Privacy Policy</Link>
              <Link className="btn btn-link text-white-50" to="">Terms & Condition</Link>
            </div>
            <div className="col-lg-3 col-md-6">
              <h5 className="text-white mb-4">Contact</h5>
              <p className="mb-2"><i className="fa fa-map-marker-alt me-3"></i>Navi Mumbai - 400022</p>
              <p className="mb-2 text-secondary"><i className="fa fa-phone-alt me-3"></i><Link className="text-secondary" to="tel:+4733378901">+47 333 78 901</Link> </p>
              <p className="mb-2 text-secondary"><i className="fa fa-envelope me-3"></i><Link className="text-secondary" to="mailto:info@RecruitEmp.com?subject = Hello, RecruitEmp = Message">
                info@RecruitEmp.com
              </Link></p>

              <div className="d-flex pt-2">
                <Link className="btn btn-outline-light btn-social" to=""><i className="fab fa-twitter"></i></Link>
                <Link className="btn btn-outline-light btn-social" to=""><i className="fab fa-facebook-f"></i></Link>
                <Link className="btn btn-outline-light btn-social" to=""><i className="fab fa-youtube"></i></Link>
                <Link className="btn btn-outline-light btn-social" to=""><i className="fab fa-linkedin-in"></i></Link>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <h5 className="text-white mb-4">Newsletter</h5>
              <p> We Take Care Of You!</p>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="copyright">
            <div className="row">
              <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                &copy; <Link className="border-bottom" to="#">RecruitEmp.com</Link>, All Right Reserved.



              </div>
              <div className="col-md-6 text-center text-md-end">
                <div className="footer-menu">
                  <Link to="">Home</Link>
                  <Link to="">Cookies</Link>
                  <Link to="">Help</Link>
                  <Link to="">FQAs</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Footer End --> */}
    </>
  )
}

export default CourseFooter
