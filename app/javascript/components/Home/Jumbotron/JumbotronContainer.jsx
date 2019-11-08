import React, { Component } from 'react'
import Particles from 'react-particles-js'

const particleOpt = {
    particles: {
      number: {
        value: 150,
        density: {
          enabled: true,
          value_area: 800
        }
      }
    }
  }

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
                <div>
                    Hello form jumbo container!
                    <Particles params={particleOpt} />
                </div>
            </div>
        )
    }
}

export default JumbotronContainer