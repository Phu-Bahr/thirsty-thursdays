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
                                <p className="d-flex justify-content-center">addresst 1 2 3</p>
                            </div>
                            <div className="col-xs-12 col-sm-4 col-md-4">
                            <h3 className="d-flex justify-content-center">CONTACT US</h3>
                                <p className="d-flex justify-content-center">lines 1 2 and 3</p>
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
                    <div className="col-sm-12 mt-5 text-center pb-5">
                        <button type="button" className="btn btn-info" onClick={this.clickEdit}>Edit</button>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12 col-sm-4 col-md-4">
                                <form onSubmit={this.onSubmit}>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        name="line1"
                                        id="line1"
                                        className="form-control"
                                        onChange={this.onChange}
                                        placeholder="Name"
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        name="line2"
                                        id="line2"
                                        className="form-control"
                                        onChange={this.onChange}
                                        placeholder="Street 1"
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        type="textarea"
                                        name="line3"
                                        id="line3"
                                        className="form-control"
                                        onChange={this.onChange}
                                        placeholder="Street 2"
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        type="textarea"
                                        name="line3"
                                        id="line3"
                                        className="form-control"
                                        onChange={this.onChange}
                                        placeholder="City, State Zip"
                                    />
                                </div>
                                <button type="submit" className="btn custom-button mt-3">
                                    Edit Office
                                </button>
                                </form>
                            </div>
                            <div className="col-xs-12 col-sm-4 col-md-4">
                                <form onSubmit={this.onSubmit}>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        name="line1"
                                        id="line1"
                                        className="form-control"
                                        onChange={this.onChange}
                                        placeholder="Contact 1"
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        name="line2"
                                        id="line2"
                                        className="form-control"
                                        onChange={this.onChange}
                                        placeholder="Contact 2"
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        name="line3"
                                        id="line3"
                                        className="form-control"
                                        onChange={this.onChange}
                                        placeholder="Contact 3"
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        name="line3"
                                        id="line3"
                                        className="form-control"
                                        onChange={this.onChange}
                                        placeholder="Contact 4"
                                    />
                                </div>
                                <button type="submit" className="btn custom-button mt-3">
                                    Edit Contact Info
                                </button>
                                </form>
                            </div>
                            <div className="col-xs-12 col-sm-4 col-md-4">
                                <form onSubmit={this.onSubmit}>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        name="line1"
                                        id="line1"
                                        className="form-control"
                                        onChange={this.onChange}
                                        placeholder="line 1"
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        name="line2"
                                        id="line2"
                                        className="form-control"
                                        onChange={this.onChange}
                                        placeholder="line 2"
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        name="line3"
                                        id="line3"
                                        className="form-control"
                                        onChange={this.onChange}
                                        placeholder="line 3"
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        name="line3"
                                        id="line3"
                                        className="form-control"
                                        onChange={this.onChange}
                                        placeholder="line 3"
                                    />
                                </div>
                                <button type="submit" className="btn custom-button mt-3">
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