import React, { Component } from "react"

class NewEvent extends Component {
    constructor(props){
        super(props)
        this.state = {
            title: "",
            location: "",
            date: ""
        }
    }

    render() {
        return (
            <div>
                <div className="px-3">
                    <h4>Add new event here:</h4>
                </div>
                <div className="col-sm-12 col-lg-6">
                    <form onSubmit={this.onSubmit}>
                        <input
                            type="text"
                            name="title"
                            id="title"
                            className="form-control"
                            required
                            onChange={this.onChange}
                            placeholder="Title"
                        />
                        <input 
                            type="text"
                            name="location"
                            id="location"
                            className="form-control"
                            required
                            onChange={this.onChange}
                            placeholder="Location"
                        />
                        <input 
                            type="date"
                            name="date"
                            id="date"
                            className="form-control"
                            required
                            onChange={this.onChange}
                        />

                        <button type="submit" className="btn custom-button">
                            Create Event
                        </button>
                    </form>
                </div>
            </div>
        )
    }
}

export default NewEvent