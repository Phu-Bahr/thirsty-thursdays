import React, { Component } from "react";
import VenueContainer from "../Home/Venue/VenueContainer";
import JumbotronContainer from "../Home/Jumbotron/JumbotronContainer";
import NavbarContainer from "../Home/Navbar/NavbarContainer";
import FooterContainer from "../Home/Footer/FooterContainer";
import CompanyContainer from "../Home/Company/CompanyContainer";
import ReservationContainer from "../Home/Reservation/ReservationContainer";
import AnnouncementContainer from "../Home/Announcement/AnnouncementContainer";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleAdmin: true
    };
    this.adminMode = this.adminMode.bind(this);
  }

  adminMode(event) {
    if (this.state.toggleAdmin) {
      this.setState({ toggleAdmin: false });
    } else {
      this.setState({ toggleAdmin: true });
    }
  }

  render() {
    let hideEditButton;
    if (this.state.toggleAdmin === false) {
      hideEditButton = "invisible";
    } else {
      hideEditButton = "";
    }

    return (
      <div className="master">
        <NavbarContainer hideEditButton={hideEditButton} />
        <JumbotronContainer hideEditButton={hideEditButton} />
        <AnnouncementContainer hideEditButton={hideEditButton} />
        <VenueContainer hideEditButton={hideEditButton} />
        <ReservationContainer hideEditButton={hideEditButton} />
        <CompanyContainer hideEditButton={hideEditButton} />
        <FooterContainer
          adminMode={this.adminMode}
          hideEditButton={hideEditButton}
        />
      </div>
    );
  }
}

export default Home;
