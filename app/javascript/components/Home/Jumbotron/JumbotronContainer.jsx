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
            line1: "",
            line2: "",
            line3: ""
        }

        this.onChange = this.onChange.bind(this)
    }

    onChange(event) {
      this.setState({ [event.target.name]: event.target.value })
    }

    onSubmit(event) {
      console.log("i just got submitted"); 
    }

    render() {
      console.log(this.state);
      
        return (
          <div>
            <div className="text-white text-center rgba-stylish-strong py-5">
              <div className="card card-image" style={{backgroundColor: "Black"}}>
                <div className="py-5">
                  <div>
                    <Particles className="particles overlayParticle" params={particleOpt} />
                  </div>
                  <div>
                    <h5 className="h5 orange-text">Lets git Lit!</h5>
                    <h2 className="card-title h2 my-4 py-2">WonderBar Productions</h2>
                    <p className="mb-4 pb-2 px-md-5 mx-md-5">Come party with the best!</p>
                    <button className="btn btn-primary overlayButtoin">More about us!</button>
                  </div>

                  <div className="container mt-5">
                    <div className="row">
                      <div className="col-sm-12 col-lg-6 offset-lg-3">
                        <p className="font-weight-normal mb-5">
                          Update your info here...
                        </p>
                        <form onSubmit={this.onSubmit}>
                          <div className="form-group">
                              <input
                                type="text"
                                name="line1"
                                id="line1"
                                className="form-control"
                                onChange={this.onChange}
                                placeholder="line 1"
                              />
                          </div>
                          <div className="form-group">
                              <input
                                type="text"
                                name="line2"
                                id="line2"
                                className="form-control"
                                onChange={this.onChange}
                                placeholder="line 2"
                              />
                          </div>
                          <div className="form-group">
                              <input
                                type="text"
                                name="line3"
                                id="line3"
                                className="form-control"
                                onChange={this.onChange}
                                placeholder="line 3"
                              />
                          </div>
                          <button type="submit" className="btn custom-button mt-3">
                            Update title data
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>





                </div>
              </div>
            </div>
          </div>
        )
    }
}

export default JumbotronContainer