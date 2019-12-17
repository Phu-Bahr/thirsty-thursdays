import React, { Component } from "react";
import { Link } from "react-router-dom";
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      loginErrors: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
  }

  handleLogoutClick() {
    const urls = "/logout";

    fetch(urls, {
      method: "DELETE",
      credentials: "include"
    })
      .then(response => {
        this.props.handleLogout();
      })
      .catch(error => {
        console.log("logout error", error);
      });
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleLoginSubmit(event) {
    event.preventDefault();
    const urls = "/api/v1/sessions";
    const { email, password } = this.state;

    const body = {
      user: {
        email: email,
        password: password
      }
    };

    fetch(urls, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      credentials: "include",
      body: JSON.stringify(body)
    })
      .then(response => {
        if (response.ok) {
          return response;
        } else {
          let errorMessage = `${response.status} (${response.statusText})`,
            error = new Error(errorMessage);
          throw error;
        }
      })
      .then(response => response.json())
      .then(data => {
        console.log("from login data", data);

        if (data.logged_in) {
          this.props.handleLogin(data);
        }
      })
      .then(this.props.history.push("/"))
      .catch(error => {
        console.log("login error", error);
      });
  }

  render() {
    let hide = "";
    if (this.props.loggedInStatus === "Logged In") {
      hide = "";
    } else {
      hide = "invisible";
    }
    return (
      <div style={{ height: 1 }}>
        <div
          className="container text-center login-background"
          style={{
            position: "absolute",
            left: "50%",
            top: "40%",
            transform: "translate(-50%, -50%)"
          }}
        >
          <div className="">
            <div className="col-sm-12 col-lg-6 offset-lg-3">
              <h1>Status: {this.props.loggedInStatus}</h1>

              <h2>
                User:{" "}
                {this.props.loggedInStatus === "Not Logged In"
                  ? "No User"
                  : this.props.user.email}
              </h2>

              <h3 className="p-5">Enter Credentials Here</h3>

              <form onSubmit={this.handleLoginSubmit}>
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={this.state.email}
                    onChange={this.handleChange}
                    className="form-control"
                    required
                  />
                </div>

                <div className="form-group">
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={this.state.password}
                    onChange={this.handleChange}
                    className="form-control"
                    required
                  />
                </div>

                <div className="row d-flex justify-content-center">
                  <div className="px-1">
                    <button className="btn btn-info" type="submit">
                      Login
                    </button>
                  </div>
                  <div>
                    <button
                      className="btn btn-info"
                      onClick={this.handleLogoutClick}
                    >
                      Logout
                    </button>
                  </div>
                </div>
              </form>

              <div>
                <Link to="/">Back to Home page</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
