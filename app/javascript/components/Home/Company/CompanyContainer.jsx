import React, { Component } from 'react'

class CompanyContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            companyData: []
        }
    }

    componentDidMount() {
        fetch("/api/v1/companies")
        .then(response => {
            if (response.ok) {
                return response
            } else {
                let errorMessage = `${response.status} (${response.statusText})`,
                error = new Error(errorMessage)
                throw error
            }
        })
        .then(response => response.json())
        .then(body => {
            let newCompanyData = body
            this.setState ({ companyData : newCompanyData })
        })
        .catch(error => console.log(error.message)
        )
    }

    render() {
        let companyData = this.state.companyData
        let companyDescription = companyData.map(element => {
            return element.description
        })   

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
                    <p> {companyDescription} </p>
                </section>
            </div>
        )
    }
}

export default CompanyContainer