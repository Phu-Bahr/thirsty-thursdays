import React from "react"
import { Link } from "react-router-dom"

class NewVenue extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            street: "",
            city: "",
            state: "",
            zip: "",
            telephone: "",
            urls: "",
            venue_image: ""
        }

        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onChange(event) {
        this.setState({ [event.target.name]: event.target.value })
    }

    onSubmit(event) {
        event.preventDefault()
        const urls = "/api/v1/venues/create"
        const { name, street, city, state, zip, telephone, url, venue_image } = this.state
        if (name.length == 0 || street.length == 0 || city.length == 0 || state.length == 0 || zip.length == 0 || telephone.length == 0 || url.length == 0 || venue_image.length == 0)
            return

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
          method: "POST",
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
        .then(response => this.props.history.push(`/venues/index`))
        .catch(error => console.log(error.message))
    }

    render() {
        console.log(this.state);
        
        return (
            <div className="container mt-5">
                <div className="row">
                    <div className="col-sm-12 col-lg-6 offset-lg-3">
                        <h1 className="font-weight-normal mb-5">
                            Add a new venue to keep it lit!
                        </h1>
                        <form onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <label htmlFor="venueName">Venue name</label>
                                <input 
                                    type="text"
                                    name="name"
                                    id="venueName"
                                    className="form-control"
                                    required
                                    onChange={this.onChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="venueStreet">Street</label>
                                <input 
                                    type="text"
                                    name="street"
                                    id="venueStreet"
                                    className="form-control"
                                    required
                                    onChange={this.onChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="venueCity">City</label>
                                <input 
                                    type="text"
                                    name="city"
                                    id="venueCity"
                                    className="form-control"
                                    required
                                    onChange={this.onChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="venueState">State</label>
                                <input 
                                    type="text"
                                    name="state"
                                    id="venueState"
                                    className="form-control"
                                    required
                                    onChange={this.onChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="venueZip">Zip</label>
                                <input 
                                    type="text"
                                    name="zip"
                                    id="venueZip"
                                    className="form-control"
                                    required
                                    onChange={this.onChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="venueTelephone">Telephone</label>
                                <input 
                                    type="text"
                                    name="telephone"
                                    id="venueTelephone"
                                    className="form-control"
                                    required
                                    onChange={this.onChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="venueurls">urls</label>
                                <input 
                                    type="text"
                                    name="urls"
                                    id="venueurls"
                                    className="form-control"
                                    required
                                    onChange={this.onChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="venueImage">Venue Image</label>
                                <input 
                                    type="text"
                                    name="venue_image"
                                    id="venueImage"
                                    className="form-control"
                                    required
                                    onChange={this.onChange}
                                />
                            </div>
                            <button type="submit" className="btn custom-button mt-3">
                                Create Venue
                            </button>
                            <Link to="/venue/index" className="btn btn-link mt-3">
                                Back to Home Page
                            </Link>
                        </form>
                    </div>
                </div>
            </div>
        )
    }

}

export default NewVenue