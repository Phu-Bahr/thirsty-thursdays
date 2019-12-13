import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../components/Home/Home";
import NewVenue from "../components/Home/Venue/NewVenue";
import Registration from "../components/Home/User/Registration";
import Login from "../components/Home/User/Login";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";

library.add(fab);

class App extends Component {
  constructor() {
    super();
    this.state = {
      loggedInStatus: "NOT_LOGGED_IN",
      user: {}
    };
    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogin(data) {
    this.setState({ loggedInStatus: "LOGGED_IN", user: data.user });
  }

  handleLogout() {
    this.setState({ loggedInStatus: "NOT_LOGGED_IN", user: {} });
    console.log("logoutclicked!");
  }

  checkLoginStatus() {
    const urls = "/logged_in";

    fetch(urls, { credentials: "include" })
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
        console.log("log in? =>>", data);

        if (
          data.logged_in === true &&
          (this.state.loggedInStatus = "NOT_LOGGED_IN")
        ) {
          this.setState({ loggedInStatus: "LOGGED_IN", user: data.user });
        } else if (
          data.logged_in === false &&
          (this.state.loggedInStatus = "LOGGED_IN")
        ) {
          this.setState({ loggedInStatus: "NOT_LOGGED_IN", user: {} });
        }
      })
      .catch(error => {
        console.log("check login error", error);
      });
  }

  componentDidMount() {
    this.checkLoginStatus();
  }

  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route
              exact
              path="/"
              render={props => (
                <Home
                  {...props}
                  loggedInStatus={this.state.loggedInStatus}
                  handleLogout={this.handleLogout}
                />
              )}
            />
            <Route path="/newVenue" component={NewVenue} />
            <Route
              path="/registration"
              render={props => (
                <Registration
                  {...props}
                  loggedInStatus={this.state.loggedInStatus}
                  handleLogin={this.handleLogin}
                />
              )}
            />
            <Route
              path="/login"
              render={props => (
                <Login
                  {...props}
                  loggedInStatus={this.state.loggedInStatus}
                  handleLogin={this.handleLogin}
                />
              )}
            />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
