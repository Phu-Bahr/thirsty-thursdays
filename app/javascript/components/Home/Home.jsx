import React, { Component } from 'react'
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
            </div>
        )
    }
}

export default Home