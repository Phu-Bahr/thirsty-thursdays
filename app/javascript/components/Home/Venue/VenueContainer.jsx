import React, { Component } from 'react'
import VenueTile from './VenueTile'

class VenueContainer extends Component {
  constructor(props){
      super(props)
      this.state = { 
        venues: [],
        refreshKey: 0
      }
      this.deleteVenue = this.deleteVenue.bind(this)
  }

  componentDidMount() {
    fetch("/api/v1/venues/index")
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
      })
      .catch(() => this.props.history.push("/"))
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
        return response
      } else {
        let errorMessage = `${response.status} (${response.statusText})`,
          error = new Error(errorMessage)
          throw error
      }
    })
    .catch(error => console.log(error.message))
  }

  componentDidUpdate() {
    if (this.state.venues !== []) {
      fetch("/api/v1/venues/index")
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
        })
    }
  }
    
  render(){             
    const venueData = this.state.venues
    let venueList = venueData.map(venue => {

      let handleClick = () => {
        this.deleteVenue(venue.id)
        console.log("delete button clicked");
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