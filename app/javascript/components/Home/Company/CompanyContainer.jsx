import React, { Component } from 'react'

class CompanyContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return(
            <div>
                <div className="parallax">
                    <div className="container">
                            <h1>Company</h1>
                    </div>
                </div>
                <div className="container-fluid companybackground">
                    <p>ipsum lorem and all that jazz</p>
                </div>
            </div>
        )
    }
}

export default CompanyContainer