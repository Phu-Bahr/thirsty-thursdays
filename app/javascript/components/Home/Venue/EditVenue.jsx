import React, { Component } from "react"

class EditVenue extends Component {
    constructor(props){
        super(props)
        this.state = {
            name: this.props.name,
            street: this.props.street,
            city: this.props.city,
            state: this.props.state,
            zip: this.props.zip,
            telephone: this.props.telephone,
            url: this.props.url,
            venue_image: this.props.venueImage
        }

        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)

    }

    onChange(event) {
        this.setState({ [event.target.name]: event.target.value })
    }

    onSubmit(event) {
        event.preventDefault()
        const urls = `/api/v1/venues/update/${this.props.id}`
        const { name, street, city, state, zip, telephone, url, venue_image } = this.state
   
        const body = {
            name,
            street,
            city,
            state,
            zip,
            telephone,
            url,
            venue_image
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
                return response.json()
            }
            throw new Error ("Network response was not ok.")
        })
        .then(alert("Event has been updated."))
        .then(window.location.reload(false))
        .catch(error => console.log(error.message))
    }
    render(){
        
        return (
            <div className={"py-4" + " " + this.props.hideUpdate}>
                <form onSubmit={this.onSubmit}>
                    <div className="row">
                        <div className="col-sm-6 pt-2">
                            <label htmlFor="venueName">Venue name</label>
                            <input 
                                type="text"
                                name="name"
                                id="venueName"
                                className="form-control"
                                required
                                onChange={this.onChange}
                                value={this.state.name}
                            />
                        </div>
                        <div className="col-sm-6 pt-2">
                            <label htmlFor="venueStreet">Street</label>
                            <input 
                                type="text"
                                name="street"
                                id="venueStreet"
                                className="form-control"
                                required
                                onChange={this.onChange}
                                value={this.state.street}
                            />
                        </div>
                        <div className="col-sm-6 pt-2">
                            <label htmlFor="venueCity">City</label>
                            <input 
                                type="text"
                                name="city"
                                id="venueCity"
                                className="form-control"
                                required
                                onChange={this.onChange}
                                value={this.state.city}
                            />
                        </div>
                        <div className="col-sm-6 pt-2">
                            <label htmlFor="venueState">State</label>
                            <input 
                                type="text"
                                name="state"
                                id="venueState"
                                className="form-control"
                                required
                                onChange={this.onChange}
                                value={this.state.state}
                            />
                        </div>
                        <div className="col-sm-6 pt-2">
                            <label htmlFor="venueZip">Zip</label>
                            <input 
                                type="text"
                                name="zip"
                                id="venueZip"
                                className="form-control"
                                required
                                onChange={this.onChange}
                                value={this.state.zip}
                            />
                        </div>
                        <div className="col-sm-6 pt-2">
                            <label htmlFor="venueTelephone">Telephone</label>
                            <input 
                                type="tel"
                                name="telephone"
                                id="venueTelephone"
                                className="form-control"
                                required
                                onChange={this.onChange}
                                value={this.state.telephone}
                            />
                        </div>
                        <div className="col-sm-6 pt-2">
                            <label htmlFor="venueURL">Url</label>
                            <input 
                                type="text"
                                name="url"
                                id="venueURL"
                                className="form-control"
                                required
                                onChange={this.onChange}
                                value={this.state.url}
                            />
                        </div>
                        <div className="col-sm-6 pt-2">
                            <label htmlFor="venueImage">Venue Image Link</label>
                            <input 
                                type="text"
                                name="venue_image"
                                id="venueImage"
                                className="form-control"
                                required
                                onChange={this.onChange}
                                value={this.state.venue_image}
                            />
                        </div>
                    </div>

                    <button type="submit" className="btn custom-button mt-3">
                        Update Venue
                    </button>

                    <button type="button" className="btn btn-secondary mt-3" onClick={this.props.handleClick}>
                        Delete Venue
                    </button>
                    
                </form>
            </div>
        )
    }
}

export default EditVenue