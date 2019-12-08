import React, { Component } from "react"
import EventTile from "./EventTile"
import NewEvent from "./NewEvent"

class EventContainer extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
            hideDiv: true,
            title: "",
            location: "",
            date: "",
            selectedStepId: null
        }
        
        this.clickEventEdit = this.clickEventEdit.bind(this)
        this.deleteEvent = this.deleteEvent.bind(this)
        this.updateEvent = this.updateEvent.bind(this)
        this.setSelectedStep = this.setSelectedStep.bind(this)
    }
    
    setSelectedStep(stepId) {
        if (this.state.selectedStepId === stepId) {
          this.setState({ selectedStepId: null });
        } else {
          this.setState({ selectedStepId: stepId });
        }
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

    updateEvent(id) {
        event.preventDefault()
        const urls = `/api/v1/events/${id}`
        const { title, location, date } = this.state

        const body = {
            title,
            location,
            date
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
        .then(response => {
            if (response.ok) {
                return response
            } else {
                let errorMessage = `${resopnse.status} (${response.statusText})`,
                error = new Error(errorMessage)
                throw error
            }
        })
        .then(alert("Event has been updated."))
        .then(window.location.reload(false))
        .catch(error => console.log(error.message)
        )
    }

    render(){
        console.log(this.state);

        let hide
        if (this.state.hideDiv === true) {
            hide = "invisible"
        } else {
            hide = ""
        }

        
        let events = this.props.eventData.map(element => {
            
            let hideUpdate
            if (element.id === this.state.selectedStepId) {
                hideUpdate = ""
            } else {
                hideUpdate = "invisible"
            }

            let handleDelete = () => {
                let result = confirm("Are you sure?")
                if (result) {
                    this.deleteEvent(element.id)
                }
            }

            let submitUpdate = () => {
                this.updateEvent(element.id)
            }

            let onChange = (event) => {
                this.setState ({ [event.target.name] : event.target.value })
            }

            let clickHideUpdate = () => {
                this.setSelectedStep(element.id)
            }

            return (
                <EventTile
                    key={element.id}
                    id={element.id}
                    title={element.title}
                    location={element.location}
                    date={element.date}
                    hide={hide}
                    hideUpdate={hideUpdate}
                    clickHideUpdate={clickHideUpdate}
                    handleDelete={handleDelete}
                    submitUpdate={submitUpdate}
                    onChange={onChange}
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

                <div className={"pt-4" + " " + hide}>
                    <NewEvent />
                </div>

                <div>
                    {events}
                </div>

            </div>
        )
    }
}

export default EventContainer