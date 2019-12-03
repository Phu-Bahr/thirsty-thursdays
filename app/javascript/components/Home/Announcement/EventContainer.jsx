import React, { Component } from "react"
import EventTile from "./EventTile"
import NewEvent from "./NewEvent"

class EventContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            hideDiv: true,
            refreshKey: false
        }

        this.clickEventEdit = this.clickEventEdit.bind(this)
        this.deleteEvent = this.deleteEvent.bind(this)
    }

    clickEventEdit (event) {
        if (this.state.hideDiv === false) {
            this.setState ({ hideDiv : true })
        } else {
            this.setState ({ hideDiv : false })
        }
    }

    deleteEvent(id) {
        const urls = `/api/v1/events/${id}`
        const token = document.querySelector('meta[name="csrf-token"]').content

        fetch(urls, {
            method: "DELETE",
            headers: {
                "X-CSRF-Token": token,
                "Content-Type": "application/json"
            }
        })
        .then(response => {
            if (response.ok) {
                return response
            } else {
                let errorMessage = `${response.status} (${response.statusText})`,
                error = new Error(errorMessage)
                throw error
            }
        })
        .then(window.location.reload(false))
        .catch(error => console.log(error.message)
        )
    }

    // componentDidUpdate() {
    //     if (this.state.refreshKey === true) {
    //         fetch("/api/v1/events")
    //         .then(response => {
    //             if (response.ok) {
    //                 return response
    //             } else {
    //                 let errorMessage = `${response.status} (${response.statusText})`,
    //                 error = new Error(errorMessage)
    //                 throw error
    //             }
    //         })
    //         .then(window.location.reload(false))
    //         // find way to push this to parent to rerender
    //         // .then(response => response.json())
    //         // .then(body => {
    //         //     let newEvents = body
    //             // this.setState ({eventData : body}) 
    //         // })
    //     }
    // }

    render(){

        let hide
        if (this.state.hideDiv === true) {
            hide = "invisible"
        } else {
            hide = ""
        }

        let events = this.props.eventData.map(element => {

            let handleDelete = () => {
                this.deleteEvent(element.id)
                console.log("delete event clicked")
            }

            return (
                <EventTile
                    key={element.id}
                    id={element.id}
                    title={element.title}
                    location={element.location}
                    date={element.date}
                    hide={hide}
                    handleDelete={handleDelete}
                />
            )
        })
        
        return (
            <div>
                <div className="text-center pb-3">
                    <div>
                        <h1>Events</h1> 
                    </div>
                    <div>
                        <button type="button" className="btn btn-info" onClick={this.clickEventEdit}>
                            Edit Events
                        </button>
                    </div>
                </div>

                <div>
                    {events}
                </div>

                <div className={"pt-4" + " " + hide}>
                    <NewEvent />
                </div>
            </div>
        )
    }
}

export default EventContainer