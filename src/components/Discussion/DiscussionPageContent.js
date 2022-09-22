import React from "react";


function DiscussionPageContent() {


return (


<>

<div className="container-fluid">
        <div className="row">
            
        </div>
        <div className="row justify-content-center">
            <div className="col-12 col-md-5 border-right bg-light">
                <div className="row bg-white pt-3 justify-content-around align-items-center">
                    <button className="btn btn-secondary" id="new-ques">Ask a Question</button>
                    <button className="btn btn-warning px-5 mt-2 mt-sm-0" id="favs">Favourites</button>
                    <button className="btn btn-success px-4 mt-2 mt-sm-0 d-none" id="all">Frequently Asked Questions</button>
                </div>
                <div className="row bg-white pb-3 border-bottom justify-content-center align-items-center">
                    <div className="col-12 mt-3 ">
                        <input className="form-control" type="text" name="query" id="query" placeholder="Search a Topic" />
                    </div>
                </div>
                <div className="row d-flex flex-column">
                    <ul className="list-unstyled"></ul>
                    <div className="col-12 d-none" id="no-match-found">
                        <h3 className="text-center text-danger">Oops! No Match Found</h3>
                    </div>
                </div>
            </div>
            <div className="col-12 col-md-7 p-5" id="welcome">
                <h2 className="text-left">Welcome to Discussion Portal!</h2>
                <p className="text-left">Enter a subject and question to get started</p>
                <form id="question">
                    <div className="form-group">
                        <input type="text" name="subject" id="subject" className="form-control" placeholder="Subject" required />
                    </div>
                    <div className="form-group">
                        <textarea rows="10" name="ques" id="question" className="form-control" placeholder="Question" required></textarea>
                    </div>
                    <div className="d-flex justify-content-end">
                        <button type="submit" className="btn btn-secondary ml-auto" id="ques-submit">Submit</button>
                    </div>
                </form>
            </div>
            <div className="col-12 col-md-7 p-5 d-none" id="response">
                <h4 className="text-secondary">Question</h4>
                <div id="ques-info"></div>
                <div className="d-flex justify-content-end mt-2">
                    <button className="btn btn-secondary ml-auto" id="resolve">Resolve</button>
                </div>
                <h4 className="text-secondary">Response</h4>
                <div id="responseList"></div>
                <h4 className="text-secondary mt-4 mb-2">Add Response</h4>
                <form id="responseForm">
                    <div className="form-group">
                        <input type="text" name="username" id="username" className="form-control" placeholder="Enter Name" required />
                    </div>
                    <div className="form-group">
                        <textarea rows="10" name="response" id="response" className="form-control" placeholder="Enter Comment" required ></textarea>
                    </div>
                    <div className="d-flex justify-content-end">
                        <button type="submit" className="btn btn-secondary ml-auto" id="response-submit">Submit</button>
                    </div>
                    <input type="hidden" name="qId" value="" id="pos"/>
                </form>
            </div>
        </div>
    </div> 

</>

)

}

export default DiscussionPageContent