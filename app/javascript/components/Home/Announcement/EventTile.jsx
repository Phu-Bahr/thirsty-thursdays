import React from "react"

const EventTile = props => {
    return (
        <div>
            - {props.title} - {props.location} @ {props.date}
            <br/>
            <div className={"px-3" + " " + props.hide}>
                <button type="button" className="btn btn-info onClick={props.clickUpdate}">Update</button>
                <button type="button" className="btn btn-secondary" onClick={props.handleDelete}>Delete</button>
            </div>
        </div>
    )
}

export default EventTile