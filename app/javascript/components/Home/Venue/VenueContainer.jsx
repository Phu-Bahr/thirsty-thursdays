import React, { Component } from 'react'
import VenueTile from './VenueTile'
import { Link } from 'react-router-dom'

class VenueContainer extends Component {
  constructor(props){
      super(props)
      this.state = { 
        venues: [],
        refreshKey: false
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
        let newVenues = body;
        this.setState({ venues: newVenues });
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
    .then (this.setState ({ refreshKey: true }))
    .catch(error => console.log(error.message))
  }

  componentDidUpdate() {
    if (this.state.refreshKey === true) {
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
          let newVenues = body;
          this.setState({ venues: newVenues });
        })
        .then(this.setState ({ refreshKey : false }))
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
      <div>
        <div style={{height: 300 }}>
          Insert stuff here
        </div>
        
        <div className="parallaxVenue">
          <div className="row h-100">
              <div className="col-md-12 align-self-center">
                <h1 className="companyfont display-3">Venues</h1>
              </div>
          </div>
        </div>

        <div className="container">
          <div className="col text-center">
            <Link to="/newVenue">
              <button type="button" className="btn-info mb-3">
              Add new venue
              </button>
            </Link>
          </div>

          <div className="row">
            {venueList}
          </div>
        </div>
      </div>
    )
  }
}

export default VenueContainer