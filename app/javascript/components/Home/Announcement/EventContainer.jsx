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
                    <br/>
                    <div className="px-3">
                        <button type="button" className="btn btn-info onClick={this.clickUpdate}">Update</button>
                        <button type="button" className="btn btn-secondary" onClick={this.props.handleDelete}>Delete</button>
                    </div>
                </li>
            </div>
        )
    }
}
export default EventContainer