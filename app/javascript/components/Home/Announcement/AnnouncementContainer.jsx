import React, { Component } from "react"
import EventContainer from "./EventContainer"

class AnnouncementContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            announcementData: [],
            eventData: [],
            hideEditAnnounce: true,
            description: "",
            flier: "",
            refreshKey: false,
        }

        this.clickEdit = this.clickEdit.bind(this)
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    clickEdit(event) {
        if (this.state.hideEditAnnounce === false) {
            this.setState ({ hideEditAnnounce : true})
        } else {
            this.setState ({ hideEditAnnounce : false})
        }
    }

    onChange(event) {
        this.setState ({ [event.target.name]: event.target.value })
    }

    onSubmit(event) {
        event.preventDefault()
        // need to make url more dynamic than hard code 1
        const urls = "/api/v1/announcements/1"
        const { description, flier } = this.state

        const body = {
            description, flier
        }

        const token = document.querySelector('meta[name="csrf-token"]').content

        fetch(urls, {
            method: "PUT",
            headers: {
                "X-CSRF-Token": token,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        })
        .then (response => {
            if (response.ok) {
                return response
            } else {
                let errorMessage = `${response.status} (${response.statusText})`,
                error = new Error(errorMessage)
                throw error
            }
        })
        .then(this.setState ({ refreshKey: true }))
        .catch(error => console.log(error.message)
        )
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
            this.setState ({ 
                announcementData : response1, 
                description : response1[0].description, 
                flier : response1[0].flier })
            this.setState ({ eventData : response2 })    
        })
        // need to add error messages
        .catch(error => console.log(error.message)
        )
    }

    componentDidUpdate() {
        if (this.state.refreshKey === true) {
            Promise.all([fetch("/api/v1/announcements"), fetch("/api/v1/events")])
            .then(([response1, response2]) => {
                return Promise.all([response1.json(), response2.json()])
                })
            .then(([response1, response2]) => {
                this.setState ({ 
                    announcementData : response1, 
                    description : response1[0].description, 
                    flier : response1[0].flier })
                this.setState ({ eventData : response2 })
            })
            .then(this.setState ({ refreshKey : false }))
            // need to add error messages
            .catch(error => console.log(error.message)
            )
        }
    }

    render() {

        let hide
        if (this.state.hideEditAnnounce === true) {
            hide = "invisible"
        } else {
            hide = ""
        }
        
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
                <EventContainer 
                    key={element.id}
                    id={element.id}
                    title={element.title}
                    location={element.location}
                    date={element.date}
                />
            )
        })
        
        return (
            <div>
                <div className="container-fluid companycontent p-5">
                    <div className="text-center pb-5">
                        <div>
                            <h1>Announcements</h1>
                        </div>
                        <div>
                            <p>{announcementDescription}</p>
                        </div>
                        <button type="button" className="btn btn-info" onClick={this.clickEdit}>
                            Edit
                        </button>
                    </div>
                    <div className={"container" + " " + hide}>
                        <div className="row">
                            <div className="col-xs-12 col-sm-12 col-md-12 pb-5">
                `               <form onSubmit={this.onSubmit}>
                                    <div className="form-group">
                                        <input 
                                            type="text"
                                            name="description"
                                            id="description"
                                            className="form-control"
                                            onChange={this.onChange}
                                            placeholder={this.state.description}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <input 
                                            type="text"
                                            name="flier"
                                            id="flier"
                                            className="form-control"
                                            onChange={this.onChange}
                                            placeholder={this.state.flier}
                                        />
                                    </div>
                                    <button type="submit" className="btn custom-button">
                                        Submit Change
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-6" style={{ height: "100%" }}>
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