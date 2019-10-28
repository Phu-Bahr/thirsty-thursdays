import React, { Component } from 'react'
import VenueContainer from '../Home/Venue/VenueContainer'

class Home extends Component {

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
        console.log("State from Home.js --", this.state.venues);
        
        return(
            <div>
              <VenueContainer venues={this.state.venues}/>
            </div>
        )
    }
}

export default Home