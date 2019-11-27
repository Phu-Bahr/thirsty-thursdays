import React, { Component } from "react"

class AnnouncementContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            announcementData: [],
            eventData: []
        }
    }

    // componentDidMount(){
    //     fetch("/api/v1/announcements")
    //     .then(response => {
    //         if (response.ok) {
    //             return response
    //         } else {
    //             let errorMessage = `${response.status} (${response.statusText})`,
    //             error = new Error(errorMessage)
    //             throw error
    //         }
    //     })
    //     .then(response => response.json())
    //     .then(body => {
    //         let newAnnouncementData = body
    //         this.setState ({ announcementData : newAnnouncementData })
    //     })
    //     .catch(error => console.log(error.message)
    //     )
    // }

    componentDidMount() {
        Promise.all([fetch("/api/v1/announcements"), fetch("/api/v1/events")])
        .then(([response1, response2]) => {
            return Promise.all([response1.json(), response2.json()])
            })
        .then(([response1, response2]) => {
            this.setState ({ announcementData : response1 })
            this.setState ({ eventData : response2 })
        })
        .catch(error => console.log(error.message)
        )
    }

    render() {
        console.log(this.state);
        
        let announcementData = this.state.announcementData
        let eventData = this.state.eventData

        let announcementDescription = announcementData.map(element => {
            return element.description
        })

        let announcementFlier = announcementData.map(element => {
            return element.flier
        })

        let event = eventData.map(element => {
            return (
            <li>
                {element.title} - {element.location} - {element.date} 
            </li>
            )
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
                                {event}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AnnouncementContainer