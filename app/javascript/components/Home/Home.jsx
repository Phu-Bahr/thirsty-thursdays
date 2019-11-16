import React, { Component } from 'react'
import VenueContainer from '../Home/Venue/VenueContainer'
import JumbotronContainer from '../Home/Jumbotron/JumbotronContainer'
import NavbarContainer from '../Home/Navbar/NavbarContainer'
import FooterContainer from '../Home/Footer/FooterContainer'

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
                <FooterContainer />
            </div>
        )
    }
}

export default Home