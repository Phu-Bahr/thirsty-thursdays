import React, { Component } from "react";

class ReservationContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div id="reservationTag">
        <div className="parallaxReservation">
          <div className="row h-100">
            <div className="col-md-12 align-self-center">
              <h1 className="companyfont">Reservations</h1>
            </div>
          </div>
        </div>
        <section className="container-fluid companycontent py-5">
          <p>
            Hello i can reserve a spot and put you on the waiting list if you
            like!
          </p>
        </section>
      </div>
    );
  }
}

export default ReservationContainer;
