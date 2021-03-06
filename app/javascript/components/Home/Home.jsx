import React, { Component } from "react";
import VenueContainer from "../Home/Venue/VenueContainer";
import JumbotronContainer from "../Home/Jumbotron/JumbotronContainer";
import NavbarContainer from "../Home/Navbar/NavbarContainer";
import FooterContainer from "../Home/Footer/FooterContainer";
import CompanyContainer from "../Home/Company/CompanyContainer";
import ReservationContainer from "../Home/Reservation/ReservationContainer";
import AnnouncementContainer from "../Home/Announcement/AnnouncementContainer";
import AdminBanner from "../Home/User/AdminBanner";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
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

  render() {
    console.log("Admin?", this.props.user.admin);

    let hideEditButton;
    if (this.props.user.admin === true) {
      hideEditButton = "";
    } else {
      // set below to blank string to default show edit buttons
      hideEditButton = "invisible";
    }

    return (
      <div className="master">
        <div className={hideEditButton}>
          <AdminBanner
            hideEditButton={hideEditButton}
            handleLogoutClick={this.handleLogoutClick}
            loggedInStatus={this.props.loggedInStatus}
          />
        </div>
        <NavbarContainer hideEditButton={hideEditButton} />
        <JumbotronContainer hideEditButton={hideEditButton} />
        <AnnouncementContainer hideEditButton={hideEditButton} />
        <VenueContainer hideEditButton={hideEditButton} />
        <ReservationContainer hideEditButton={hideEditButton} />
        <CompanyContainer hideEditButton={hideEditButton} />
        <FooterContainer hideEditButton={hideEditButton} />
      </div>
    );
  }
}

export default Home;
