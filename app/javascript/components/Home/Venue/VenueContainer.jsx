import React, { Component } from 'react'
import VenueTile from './VenueTile'

class VenueContainer extends Component {
    constructor(props){
        super(props)
        this.state = {}
    }

    render(){
        console.log("Props in VenuContainer.js", this.props.venues);
        const venueData = this.props.venues
        let venueList = venueData.map(venue => {
        
            return (
              <VenueTile
                key={venue.id}
                name={venue.name}
                street={venue.street}
                city={venue.city}
                state={venue.state}
                zip={venue.zip}
                telephone={venue.telephone}
                url={venue.url}
                venueImage={venue.venue_image}
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