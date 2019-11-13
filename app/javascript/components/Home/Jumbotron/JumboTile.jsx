import React from "react"

const JumboTile = props => {
    return (
        <div>
            <div>
                <h5 className="h5 orange-text">{props.line1}</h5>
                <h2 className="card-title h2 my-4 py-2">{props.line2}</h2>
                <p className="mb-4 pb-2 px-md-5 mx-md-5">{props.line3}</p>
                <button className="btn btn-primary overlayButton">More about us!</button>
            </div>
        </div>
    )
}

export default JumboTile