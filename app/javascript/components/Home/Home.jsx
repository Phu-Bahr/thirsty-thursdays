import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import VenueContainer from '../Home/Venue/VenueContainer'
import JumbotronContainer from '../Home/Jumbotron/JumbotronContainer'

class Home extends Component {

    constructor(props){
        super(props)
        this.state = { }
    }

    render(){
        return(
            <div>
              <JumbotronContainer />
              <VenueContainer />
              <Link to="/new" className="btn btn-link mt-3">
                Add Venue
              </Link>
            </div>
        )
    }
}

export default Home