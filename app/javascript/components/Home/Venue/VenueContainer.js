import React, { Component } from 'react'
import VenueTile from './VenueTile'

class VenueContainer extends Component {
    constructor(props){
        super(props)
        this.state = {
            venues: []
        }
    }

    componentDidMount() {
        fetch("/api/v1/venues")
          .then(response => {
            if (response.ok) {
              return response;
            } else {
              let errorMessage = `${response.status} (${response.statusText})`,
                error = new Error(errorMessage);
              throw error;
            }
          })
          .then(response => response.json())
          .then(body => {
            let new_venues = body;
            this.setState({ venues: new_venues });
          });
      }

    render(){
        console.log(this.state.venues);
        let venueData = this.state.venues
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
            <div>
                <div>hello from venue CONTAINER</div>
                <div>{venueList}</div>
            </div>
        )
    }
}

export default VenueContainer