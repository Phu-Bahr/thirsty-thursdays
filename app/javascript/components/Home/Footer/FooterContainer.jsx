import React, { Component } from "react"

class FooterContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render () {
        return (
            <div>
                <div className="footerbackground py-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12 col-sm-4 col-md-4 ">
                                <h3 className="d-flex justify-content-center">OFFICE</h3>
                                <p className="d-flex justify-content-center">addresst 1 2 3</p>
                                <p className="d-flex justify-content-center">addresst 1 2 3</p>
                                <p className="d-flex justify-content-center">addresst 1 2 3</p>
                            </div>
                            <div className="col-xs-12 col-sm-4 col-md-4">
                            <h3 className="d-flex justify-content-center">CONTACT US</h3>
                                <p className="d-flex justify-content-center">lines 1 2 and 3</p>
                                <p className="d-flex justify-content-center">lines 1 2 and 3</p>
                                <p className="d-flex justify-content-center">lines 1 2 and 3</p>
                            </div>
                            <div className="col-xs-12 col-sm-4 col-md-4">
                            <h3 className="d-flex justify-content-center">SOCIAL</h3> 
                            <p className="d-flex justify-content-center">fav con 1 2 3 4 </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default FooterContainer