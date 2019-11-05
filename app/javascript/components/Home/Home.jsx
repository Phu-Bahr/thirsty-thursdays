import React, { Component } from 'react'
import VenueContainer from '../Home/Venue/VenueContainer'
import { Link } from 'react-router-dom'

class Home extends Component {

    constructor(props){
        super(props)
        this.state = { }
    }

    render(){

        return(
            <div>
              <VenueContainer />
              <Link to="/new" className="btn btn-link mt-3">
                Add Venue
              </Link>
            </div>
        )
    }
}

export default Home