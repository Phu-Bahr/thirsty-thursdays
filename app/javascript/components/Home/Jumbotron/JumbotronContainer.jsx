import React, { Component } from 'react'

class JumbotronContainer extends Component {
    constructor(props){
        super(props)
        this.state = { 
            jumboData: []
        }
    }

    render() {
        return (
            <div>
                Hello from Jumbo Container!
            </div>
        )
    }
}

export default JumbotronContainer