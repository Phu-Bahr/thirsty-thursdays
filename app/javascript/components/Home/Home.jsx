import React, { Component } from 'react'
import VenueContainer from '../Home/Venue/VenueContainer'
import JumbotronContainer from '../Home/Jumbotron/JumbotronContainer'
import NavbarContainer from '../Home/Navbar/NavbarContainer'
import FooterContainer from '../Home/Footer/FooterContainer'
import CompanyContainer from '../Home/Company/CompanyContainer';

class Home extends Component {

    constructor(props){
        super(props)
        this.state = { }
    }

    render(){
        return(
            <div className="master">
                <NavbarContainer />
                <JumbotronContainer />
                <VenueContainer />
                <CompanyContainer />
                <FooterContainer />
            </div>
        )
    }
}

export default Home