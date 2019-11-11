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
              <div className="text-white text-center rgba-stylish-strong py-5">
                 <div className="card card-image" style={{backgroundColor: "Black"}}>
                    <div className="py-5">
                      <div>
                      <Particles className="particles overlay" params={particleOpt} />
                      </div>
                      <div className="">
                        <h5 className="h5 orange-text">Lets git Lit!</h5>
                        <h2 className="card-title h2 my-4 py-2">WonderBar Productions</h2>
                        <p className="mb-4 pb-2 px-md-5 mx-md-5">Come party with the best!</p>
                        <button className="btn btn-primary">More about us!</button>
                      </div>
                  </div>
                </div>
              </div>
            </div>
        )
    }
}

export default JumbotronContainer