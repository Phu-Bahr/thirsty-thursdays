import React from "react"

const EventContainer = props => {
    return (
        <div>
            <li>
                {props.title} - {props.location} @ {props.date}
            </li>
        </div>
    )
}
export default EventContainer