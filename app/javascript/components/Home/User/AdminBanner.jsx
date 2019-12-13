import React, { Component } from "react";
import { Link } from "react-router-dom";

class AdminBanner extends Component {
  constructor(props) {
    super();
    this.state = {};
  }
  render() {
    return (
      <div className="container text-center p-4">
        <div>
          <h1>Administration Mode</h1>
          <button
            className="btn btn-info"
            onClick={this.props.handleLogoutClick}
          >
            Logout
          </button>
          <button className="btn btn-info">
            <Link to="/registration">Register New User</Link>
          </button>
        </div>
      </div>
    );
  }
}

export default AdminBanner;
