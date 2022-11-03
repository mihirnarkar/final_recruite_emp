import React from 'react'
import axios from 'axios';

function GetJobContent() {

    const onSubmit = (e) => {
        e.preventDefault()
        console.log("came here")
    
        axios({
          method: 'get',
          url: '/services',
          data: {
            
          }
        }).then((response) => {
          console.log(response.data);
    
          // console.log(xtype([applydate]))
        });
      };
    



    return (
        <>
            <div className="wow fadeInUp getjobcontent" data-wow-delay="0.1s">

                <form enctype="multipart/form-data" method="GET" onSubmit={onSubmit}>
                    <div className="row g-3">
                        <div className="col-md-6">
                            <div className="form-floating">
                                <input className="form-control" type="text" name="sender_name" placeholder="Your Name"
                                    required />
                                <label for="name">Your Name</label>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-floating">
                                <input className="form-control " type="email" name="sender_email" placeholder="Email Address"
                                    required />
                                <label for="email">Your Email</label>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-floating">
                                <input type="text" className="form-control" id="phone" name="phone"
                                    placeholder="Your Phone Number" required />
                                <label for="phone">Your Phone Number</label>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-floating">
                                <input type="text" className="form-control" id="exp" name="exp" placeholder="Your Experience"/>
                                    <label for="exp">Your Experience</label>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="form-floating">
                                <input type="text" className="form-control" id="postt" name="postt" placeholder="Desired Post"
                                    required />
                                <label for="postt">Desired Post</label>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="form-floating">
                                <input type="text" className="form-control" id="address" name="address"
                                    placeholder="Your Address" required />
                                <label for="address">Your Address</label>
                            </div>
                        </div>


                        <label for="myfile">Upload Resume:</label>
                        <input type="file" name="attachment" placeholder="Resume" accept=".pdf" required />


                        <br/> <br/>

                    </div>


                    <div className="col-12 getjobcontent_apply">
                        <button className="btn btn-secondary w-100 py-3" type="submit" name="button" value="Submit" >Apply
                            Now</button>
                    </div>

                </form>

            </div>
        </>
    )
}

export default GetJobContent