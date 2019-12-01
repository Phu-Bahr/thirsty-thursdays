import React, { Component } from "react"
import EventTile from "./EventTile"
import NewEvent from "./NewEvent"

class EventContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            hideDiv : true
        }

        this.clickEventEdit = this.clickEventEdit.bind(this)
    }

    clickEventEdit (event) {
        if (this.state.hideDiv === false) {
            this.setState ({ hideDiv : true })
        } else {
            this.setState ({ hideDiv : false })
        }
    }

    render(){

        let hide
        if (this.state.hideDiv === true) {
            hide = "invisible"
        } else {
            hide = ""
        }

        let events = this.props.eventData.map(element => {

            return (
                <EventTile
                    key={element.id}
                    id={element.id}
                    title={element.title}
                    location={element.location}
                    date={element.date}
                    hide={hide}
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