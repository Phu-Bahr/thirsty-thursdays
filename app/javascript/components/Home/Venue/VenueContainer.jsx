import React, { Component } from 'react'
import VenueTile from './VenueTile'
import { Route, withRouter } from "react-router-dom"

class VenueContainer extends Component {
    constructor(props){
        super(props)
        this.state = { }

        this.deleteVenue = this.deleteVenue.bind(this)
    }

    deleteVenue(id) {
      
      const urls = `/api/v1/destroy/${id}`
      const token = document.querySelector('meta[name="csrf-token"]').content

      fetch(urls, {
        method: "DELETE",
        headers: {
          "X-CSRF-Token": token,
          "Content-Type": "application/json"
        }
      })
      .then (response => {
        if (response.ok) {
          return response.json()
        }
        throw new Error("Network response was not ok.")
      })
      .then(() => this.props.history.push("/"))
      .catch(error => console.log(error.message))
    }
    
    render(){              
      const venueData = this.props.venues
      let venueList = venueData.map(venue => {

        let handleClick = () => {
          this.deleteVenue(venue.id)
        }
        
            return (
              <VenueTile
                key={venue.id}
                id={venue.id}
                name={venue.name}
                street={venue.street}
                city={venue.city}
                state={venue.state}
                zip={venue.zip}
                telephone={venue.telephone}
                url={venue.url}
                venueImage={venue.venue_image}
                handleClick={handleClick}
              />
            )
        })
    
        return(
          
            <div className="container">
              <div className="row">
                {venueList}
              </div>
            </div>
        )
    }
}

export default VenueContainer