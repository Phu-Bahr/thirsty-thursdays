import React from "react"

const JumboTile = props => {
    return (
        <div>
            <div>
                <h1 className="h5 orange-text">{props.line1}</h1>
                <h1 className="card-title h2 my-4 py-2 display-3">{props.line2}</h1>
                <h1 className="mb-4 pb-2 px-md-5 mx-md-5">{props.line3}</h1>
            </div>
        </div>
    )
}

export default JumboTile