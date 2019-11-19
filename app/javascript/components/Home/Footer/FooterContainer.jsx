import React, { Component } from "react"
import FooterEditOffice from "./FooterEditOffice"
import FooterEditContactUs from "./FooterEditContactUs"
import FooterEditSocial from "./FooterEditSocial"

class FooterContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            footerData: [],
            refreshKey: false,
            hideDiv: true
        }

        this.clickEdit = this.clickEdit.bind(this)
    }

    clickEdit(event) {
        if (this.state.hideDiv === false) {
            this.setState ({ hideDiv: true })
        } else {
            this.setState ({ hideDiv: false })
        }
    }

    componentDidMount() {
        fetch("/api/v1/footers")
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
            let new_footerData = body
            this.setState ({ footerData: new_footerData })
        })
        .catch(error => console.log(error.message)
        )
    }
    render () {

        let hide
        if (this.state.hideDiv === true) {
            hide = "invisible"
        } else {
            hide = ""
        }

        const footerData = this.state.footerData
        let footerOfficeData = footerData.map(element => {
            return(
                <FooterEditOffice
                    key={element.id}
                    id={element.id}
                    name={element.name}
                    street={element.street}
                    citystate={element.citystate}
                />
            )            
        })

        let footerContactUsData = footerData.map(element => {
            return(
                <FooterEditContactUs
                    key={element.id}
                    id={element.id}
                    contact1={element.contact1}
                    contact2={element.contact2}
                    contact3={element.contact3}
                    contact4={element.contact4}
                />
            )            
        })     
        
        let footerSocialData = footerData.map(element => {
            return(
                <FooterEditSocial
                    key={element.id}
                    id={element.id}
                    facebook={element.facebook}
                    twitter={element.twitter}
                    instagram={element.instagram}
                    other={element.other}
                />
            )
        })
        
        return (
            <div>
                <div className="footerbackground py-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12 col-sm-4 col-md-4 ">
                                <h3 className="d-flex justify-content-center">OFFICE</h3>
                                {footerOfficeData}
                            </div>
                            <div className="col-xs-12 col-sm-4 col-md-4">
                            <h3 className="d-flex justify-content-center">CONTACT US</h3>
                                {footerContactUsData}
                            </div>
                            <div className="col-xs-12 col-sm-4 col-md-4">
                            <h3 className="d-flex justify-content-center">SOCIAL</h3> 
                                {footerSocialData}
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 mt-5 text-center">
                        <button type="button" className="btn btn-info" onClick={this.clickEdit}>Edit</button>
                    </div>
                    <div className={"container" + " " + hide}>
                        <div className="row">
                            <div className="col-xs-12 col-sm-4 col-md-4 mt-3">
                                <form onSubmit={this.onSubmit}>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        name="name"
                                        id="name"
                                        className="form-control"
                                        onChange={this.onChange}
                                        placeholder="Name"
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        name="street"
                                        id="street"
                                        className="form-control"
                                        onChange={this.onChange}
                                        placeholder="Street"
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        name="citystate"
                                        id="citystate"
                                        className="form-control"
                                        onChange={this.onChange}
                                        placeholder="City, State Zip"
                                    />
                                </div>
                                <button type="submit" className="btn custom-button mt-n3">
                                    Edit Office
                                </button>
                                </form>
                            </div>
                            <div className="col-xs-12 col-sm-4 col-md-4 mt-3">
                                <form onSubmit={this.onSubmit}>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        name="line1"
                                        id="line1"
                                        className="form-control"
                                        onChange={this.onChange}
                                        placeholder="Phone/Email"
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        name="line2"
                                        id="line2"
                                        className="form-control"
                                        onChange={this.onChange}
                                        placeholder="Phone/Email"
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        name="line3"
                                        id="line3"
                                        className="form-control"
                                        onChange={this.onChange}
                                        placeholder="Phone/Email"
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        name="line3"
                                        id="line3"
                                        className="form-control"
                                        onChange={this.onChange}
                                        placeholder="Phone/Email"
                                    />
                                </div>
                                <button type="submit" className="btn custom-button mt-n3">
                                    Edit Contact Info
                                </button>
                                </form>
                            </div>
                            <div className="col-xs-12 col-sm-4 col-md-4 mt-3">
                                <form onSubmit={this.onSubmit}>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        name="line1"
                                        id="line1"
                                        className="form-control"
                                        onChange={this.onChange}
                                        placeholder="Facebook"
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        name="line2"
                                        id="line2"
                                        className="form-control"
                                        onChange={this.onChange}
                                        placeholder="Twitter"
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        name="line3"
                                        id="line3"
                                        className="form-control"
                                        onChange={this.onChange}
                                        placeholder="Instagram"
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        name="line3"
                                        id="line3"
                                        className="form-control"
                                        onChange={this.onChange}
                                        placeholder="Other"
                                    />
                                </div>
                                <button type="submit" className="btn custom-button mt-n3">
                                    Edit Social
                                </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default FooterContainer