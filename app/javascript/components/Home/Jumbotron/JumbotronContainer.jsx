import React, { Component } from 'react'
import Particles from 'react-particles-js'
import { Link } from "react-router-dom"
import JumboTile from "./JumboTile"

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
            jumboData: [],
            line1: "",
            line2: "",
            line3: "",
            refreshKey: false
        }

        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onChange(event) {
      this.setState({ [event.target.name]: event.target.value })
    }

    componentDidMount() {
      fetch("/api/v1/jumbotrons")
      .then(response => {
        if (response.ok) {
          return response
        } else {
          let errorMessage = `${response.status} (${response.statuseText})`,
            error = new Error(errorMessage)
          throw error
        }
      })
      .then(response => response.json())
      .then(body => {
        let new_jumboData = body
        this.setState ({ jumboData: new_jumboData })
      })
      .catch(error => console.log(error.message))
    }

    onSubmit(event) {
      event.preventDefault()
      const urls = "/api/v1/jumbotrons/1"
      const { line1, line2, line3 } = this.state

      const body = {
        line1, line2, line3
      }
      console.log("fetch body =>", body);
      
      const token = document.querySelector('meta[name="csrf-token"]').content

      fetch(urls, {
        method: "PUT",
        headers: {
          "X-CSRF-Token": token,
          "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
      })
      .then (response => {
        if (response.ok) {
          return response
        } else {
          let errorMessage = `${response.status} (${response.statusText})`,
            error = new Error(errorMessage)
            throw error
        }
      })
      .then(this.setState({ refreshKey: true }))
      .catch(error => console.log(error.message)
      )
    }

    componentDidUpdate() {
      if (this.state.refreshKey === true) {
        fetch("/api/v1/jumbotrons")
        .then(response => {
          if (response.ok) {
            return response
        } else {
          let errorMessage = `${response.status} (${response.statusText})`,
            error = new Error(errorMessage)
          throw error
          }
        })
        .then(response => response.json())
        .then(body => {
          let new_jumbo = body
          this.setState({ jumboData: new_jumbo})
        })
        .then(this.setState ({ refreshKey: false}))
      }
    }

    render() {
        if (this.state.refreshKey === true) {
          this.setState ({ refreshKey: false })
        }

        console.log(this.state.jumboData)
        const jumboData = this.state.jumboData
        let jumoblist = jumboData.map(element => {

          return(
            <JumboTile 
              key={element.id}
              id={element.id}
              line1={element.line1}
              line2={element.line2}
              line3={element.line3}
            />
          )
        })
        
        return (
          <div>
            <div className="text-white text-center rgba-stylish-strong py-5">
              <div className="card card-image" style={{backgroundColor: "Black"}}>
                <div className="py-5">
                  <div>
                    <Particles className="particles overlayParticle" params={particleOpt} />
                  </div>
                  <div>
                    {jumoblist}
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
                                type="textarea"
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