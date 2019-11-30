import React, { Component } from "react"

class EventContainer extends Component {
    constructor(props) {
        super(props)
        this.state = ""
    }

    render(){
        return (
            <div>
                <li>
                    {this.props.title} - {this.props.location} @ {this.props.date}
                </li>
            </div>
        )
    }
}
export default EventContainer