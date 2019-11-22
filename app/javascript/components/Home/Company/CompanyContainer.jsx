import React, { Component } from 'react'

class CompanyContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return(
            <div>
                <div className="parallaxCompany">
                    <div className="row h-100">
                        <div className="col-md-12 align-self-center">
                            <h1 className="companyfont">Company</h1>
                        </div>
                    </div>
                </div>
                <section className="container-fluid companycontent py-5">
                    <p> Hello, i am a cool company with some information</p>
                </section>
            </div>
        )
    }
}

export default CompanyContainer