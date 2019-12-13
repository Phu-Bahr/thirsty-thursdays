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
      // .then(this.props.history.push("/"))
      .catch(error => {
        console.log("login error", error);
      });
  }

  render() {
    return (
      <div>
        <h1>Status : {this.props.loggedInStatus}</h1>
        <form onSubmit={this.handleLoginSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={this.state.email}
            onChange={this.handleChange}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.handleChange}
            required
          />
          <button type="submit">Login</button>
        </form>
        <Link to="/">Back to Home page</Link>
      </div>
    );
  }
}

export default Login;
