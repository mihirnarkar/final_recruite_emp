import React, {useState} from 'react'
import AdminNavbar from './AdminNavbar'
import Footer from '../Footer'
import { useNavigate } from 'react-router'

const PostJob = () => {

    const navigate = useNavigate()

    const [jobName, setjobName] = useState('');
    const [companyEmail, setcompanyEmail] = useState('');
    const [contact, setContact] = useState('');
    const [exp, setExp] = useState('');
    const [jobCategory, setjobCategory] = useState('');
    const [jobdesc, setjobDesc] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        fetch('/AdminPostjob', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ 
            jobname: jobName,
            companyemail: companyEmail,
            contact: contact,
            exp: exp,
            jobCategory: jobCategory,
            jobdesc: jobdesc
         })
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
              alert(data.message);
              setjobName('')
              setcompanyEmail('')
              setContact('')
              setExp('')
              setjobCategory('')
              setjobDesc('')
              navigate('/adminhomepage')
            }
          })
        .catch(error => console.error(error));
    };

    return (
        <>
            <AdminNavbar />

           <center><h2 className='my-3'>Post your desired job here</h2></center>

            <div className="wow fadeInUp getjobcontent" data-wow-delay="0.1s">

                <form onSubmit={handleSubmit}>
                    <div className="row g-3">
                        <div className="col-md-6">
                            <div className="form-floating">
                                <input className="form-control" type="text" name="jobname" placeholder="Job name"
                                    required
                                    value={jobName} onChange={event => setjobName(event.target.value)} />
                                <label for="jobname">Job name</label>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-floating">
                                <input className="form-control " type="email" name="cemail" placeholder="Email Address"
                                    required 
                                    value={companyEmail} onChange={event => setcompanyEmail(event.target.value)}/>
                                <label for="cemail">Company email</label>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-floating">
                                <input type="phone" className="form-control" id="cphone" name="cphone"
                                    placeholder="Your Phone Number" required 
                                    value={contact} onChange={event => setContact(event.target.value)}/>
                                <label for="cphone">Contact no.</label>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-floating">
                                <input type="text" className="form-control" id="exp" name="exp" placeholder="Your Experience" 
                                value={exp} onChange={event => setExp(event.target.value)}/>
                                <label for="exp">Experience Expected</label>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="form-floating">
                                <input type="text" className="form-control" id="category" name="category" placeholder="Desired Post"
                                    required 
                                    value={jobCategory} onChange={event => setjobCategory(event.target.value)}/>
                                <label for="category">Job category</label>
                            </div>
                        </div>

                        <div className="col-md-12 ">
                            <div class="form-floating">
                                <textarea class="form-control" placeholder="Leave a comment here" id="desc" name='desc'
                                value={jobdesc} onChange={event => setjobDesc(event.target.value)}></textarea>
                                <label for="desc">Job Descriptions</label>
                            </div>
                        </div>


                        <br /> <br />

                    </div>


                    <div className="col-12 getjobcontent_apply">
                        <button className="btn btn-secondary w-100 py-3" type="submit" name="button">Post Job</button>
                    </div>

                </form>

            </div>

            <Footer />
        </>
    )
}

export default PostJob