import React from 'react'

function ApplicationSummaryCard() {
    return (
        <>
            <div className="container-xxl py-5">

                <div className="container">
                    <div class="row">
                        <div class="column">
                            <div class="cardUser">
                                <div class="card-body">
                                    <h3 class="card-title">Application Summary</h3>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" class="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        </div>

                        <div class="column">
                            <div class="cardUser">
                                <div class="card-body">
                                    <h3 class="card-title">Saved Jobs</h3>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" class="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default ApplicationSummaryCard