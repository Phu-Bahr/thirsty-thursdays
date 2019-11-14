import React, { Component } from 'react'
import VenueContainer from '../Home/Venue/VenueContainer'
import JumbotronContainer from '../Home/Jumbotron/JumbotronContainer'
import NavbarContainer from '../Home/Navbar/NavbarContainer'

class Home extends Component {

    constructor(props){
        super(props)
        this.state = { }
    }

    render(){
        return(
            <div>
                <NavbarContainer />
                <JumbotronContainer />
                <VenueContainer />
            </div>
        )
    }
}

export default Home