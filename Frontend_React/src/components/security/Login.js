import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
    return (
        <>
        <div class="container-xxl bg-white p-0">
            <br/>

            <div className="container-xl wow zoomIn">

                <div className="container shadow p-3 mb-5 rounded login">

                    <div className="container">
                        <div className="py-5 text-center">
                            <img className="d-block mx-auto mb-4" src="../img/logo.gif" alt="" width="72" height="72" />
                            <h1 className="m-0 text-primary">Login to RecruitEmp</h1>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <form>
                                    <div className="form-floating">
                                        <input type="text" className="form-control" id="name" name="name"
                                            placeholder="Your email" />
                                        <label for="name">Email</label>
                                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with
                                            anyone else.</small>
                                    </div>

                                    <br />

                                    <div className="form-floating">

                                        <input type="text" className="form-control" id="name" name="name"
                                            placeholder="Your Name" />
                                        <label for="name">Password</label>

                                    </div>

                                    <hr className="mb-4" />
                                    <Link className="btn btn-primary btn-lg btn-block" to="/userhomepage">Login</Link>

                                    <br /><br/><br/>
                                    <center>Not Registered on RecruitEmp yet ?</center>
                                    <br />
                                    <center> <Link to="/signup">Create your account</Link></center>
                                </form>
                            </div>
                        </div>

                    </div>

                    <footer className="my-5 pt-5 text-muted text-center text-small">
                        <p className="mb-1">&copy; 2020-2021 <Link to="/" className="login1">RecruitEmp</Link></p>
                        <ul className="list-inline">
                            <li className="list-inline-item"><Link to="#">Privacy</Link></li>
                            <li className="list-inline-item"><Link to="#">Terms</Link></li>
                            <li className="list-inline-item"><Link to="#">Support</Link></li>
                        </ul>
                    </footer>


                </div>
            </div>

            <br/>
        </div>

    
        </>
    )
}

export default Login