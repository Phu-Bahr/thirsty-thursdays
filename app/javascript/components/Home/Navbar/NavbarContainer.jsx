import React, { Component } from "react"
import { Link } from "react-router-dom"

// fix links
class NavbarContainer extends Component {
    constructor(props){
        super(props)
        this.setState = {}
    }

    render(){
        return(
            <nav className="navbar navbar-expand-lg navbar-light site-header sticky-top py-4">
                <div className="container">
                    <div className="mx-auto order-0">
                        <Link to="/newVenue" className="navbar-brand navbar-underline" href="/newVenue">
                            Club Promotion Inc
                        </Link>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    </div>
                
                    <div className="collapse navbar-collapse justify-content-between" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item dropdown">
                                <Link to="/newVenue" className="nav-link dropdown-toggle navbar-underline" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                VENUES
                                </Link>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <Link to="/newVenue" className="dropdown-item navbar-underline" href="#">Club 1 Website</Link>
                                <Link to="/newVenue" className="dropdown-item navbar-underline" href="#">Club 2 Website</Link>
                                    <div className="dropdown-divider"></div>
                                <Link to="/newVenue" className="dropdown-item navbar-underline" href="#">Bring to list of clubs here</Link>
                            </div>
                            </li>
                            <li className="nav-item">
                                <Link to="/newVenue" className="nav-link navbar-underline" href="#">RESERVATIONS</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/newVenue" className="nav-link navbar-underline" href="#">COMPANY <span className="sr-only">(current)</span></Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/newVenue" className="nav-link navbar-underline" href="#">CAREERS</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/newVenue" className="nav-link navbar-underline" href="#">CONTACT</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}

export default NavbarContainer