import React, { Component } from 'react'
import Venue from './Venue'

class VenueContainer extends Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }

    render(){
        return(
            <div>
                <div>hello from venue CONTAINER</div>
                <div><Venue/></div>
            </div>
        )
    }
}

export default VenueContainer