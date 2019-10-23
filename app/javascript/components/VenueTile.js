import React, { Component } from 'react'

class VenueTile extends Component {
    constructor(props){
        super(props)
        this.state = {}
    }

    render(){        
        return(
            <div>
                <img style={{width: '300px', height: '200px'}} src={this.props.venueImage}/>
                <div>{this.props.name}</div>
                <div>{this.props.street}</div>
                <div>{this.props.city}, {this.props.state} {this.props.zip}</div>
                <div>{this.props.telephone}</div>
                <div>{this.props.url}</div>
                <br/>
            </div>
        )
    }
}

export default VenueTile