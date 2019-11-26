import React, { Component } from "react"

class AnnouncementContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            announcementData: []
        }
    }

    componentDidMount(){
        fetch("/api/v1/announcements")
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
            let newAnnouncementData = body
            this.setState ({ announcementData : newAnnouncementData })
        })
        .catch(error => console.log(error.message)
        )
    }

    render() {
        let announcementData = this.state.announcementData
        let announcementDescription = announcementData.map(element => {
            return element.description
        })

        let announcementFlier = announcementData.map(element => {
            return element.flier
        })
        
        return (
            <div>
                <div className="container-fluid companycontent" style={{height: "100%"}}>
                    <div className="pt-5 pb-3">
                        <h1>Announcements</h1>
                    </div>
                    <div className="pb-5">
                        
                        <p>{announcementDescription}</p>
                    </div>
                    <div className="row">
                        <div className="col-sm-6" style={{ height: "100%" }}>
                            <div>
                                Image or flyer upload here
                            </div>
                            <div className="container">
                                <img src={announcementFlier}></img>
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