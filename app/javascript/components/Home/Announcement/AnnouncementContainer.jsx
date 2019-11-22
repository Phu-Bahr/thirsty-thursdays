import React, { Component } from "react"

class AnnouncementContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <div>
                <div className="container-fluid companycontent" style={{height: "100%"}}>
                    <div className="pt-5 pb-3">
                        <h1>Announcements</h1>
                    </div>
                    <div className="pb-5">
                        <p>Look forward to our holiday parties coming soon to this venue and that venue. bring your A game and drink lots of stuff</p>
                    </div>
                    <div className="row">
                        <div className="col-sm-6" style={{ height: "100%" }}>
                            <div>
                                Image or flyer upload here
                            </div>
                            <div className="container">
                                <img src="https://www.templatemonster.com/blog/wp-content/uploads/2015/12/christmas-psd-freebie.jpg"></img>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div>    
                                <li>
                                    Date, location of event
                                </li>
                                <li>
                                    Date, location of event
                                </li>
                                <li>
                                    Date, location of event
                                </li>
                                <li>
                                    Date, location of event
                                </li>
                                <li>
                                    Date, location of event
                                </li>
                                <li>
                                    Date, location of event
                                </li>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AnnouncementContainer