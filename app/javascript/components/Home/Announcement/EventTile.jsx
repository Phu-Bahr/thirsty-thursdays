import React from "react"

const EventTile = props => {

    return (
        <div>
            - {props.title} - {props.location} @ {props.date}
            <br/>
            <div className={"px-3" + " " + props.hide}>
                <button type="button" className="btn btn-info" onClick= {props.clickHideUpdate}>Edit</button>
                <button type="button" className="btn btn-secondary" onClick={props.handleDelete}>Delete</button>
            <div className={"pt-3" + " " + "ml-n3" + " " + props.hideUpdate}>
                <div className="col-xs-12 col-sm-12 col-md-12 pb-5">
                    <form onSubmit={props.submitUpdate}>
                        <div className="form-group">
                            <input 
                                type="text"
                                name="title"
                                id="title"
                                className="form-control"
                                onChange={props.onChange}
                                placeholder={props.title}
                            />
                        </div>
                        <div className="form-group">
                            <input 
                                type="text"
                                name="location"
                                id="location"
                                className="form-control"
                                onChange={props.onChange}
                                placeholder={props.location}
                            />
                        </div>
                        <div className="form-group">
                            <input 
                                type="date"
                                name="date"
                                id="date"
                                className="form-control"
                                onChange={props.onChange}
                                placeholder={props.date}
                            />
                        </div>
                        <button type="submit" className="btn custom-button">
                            Submit Update
                        </button>
                    </form>
                </div>
            </div>
            </div>
        </div>
    )
}

export default EventTile