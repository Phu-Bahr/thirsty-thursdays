import React, { Component } from "react";

class NewEvent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      location: "",
      date: "",
      refreshKey: false
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  onSubmit(event) {
    event.preventDefault();
    const urls = "/api/v1/events";
    const { title, location, date } = this.state;

    const body = {
      title,
      location,
      date
    };

    console.log("inside submit", body);

    const token = document.querySelector('meta[name="csrf-token"]').content;

    fetch(urls, {
      method: "POST",
      headers: {
        "X-CSRF-Token": token,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Network response was not ok.");
      })
      // .then(alert("Event has been added!"))
      // .then(window.location.reload(false))
      .then(this.props.toggleRefreshKey())
      .then(alert("Event has been added"))
      .catch(error => console.log(error.message));
  }

  render() {
    console.log("from newEvent", this.props);

    return (
      <div>
        <div className="px-3">
          <h4>Add new event here:</h4>
        </div>
        <div className="col-sm-12 col-lg-6 pb-4">
          <form
            onSubmit={event => {
              this.onSubmit(event);
              event.target.reset();
            }}
          >
            <input
              type="text"
              name="title"
              id="title"
              className="form-control"
              required
              onChange={this.onChange}
              placeholder="Title"
            />
            <input
              type="text"
              name="location"
              id="location"
              className="form-control"
              required
              onChange={this.onChange}
              placeholder="Location"
            />
            <input
              type="date"
              name="date"
              id="date"
              className="form-control"
              required
              onChange={this.onChange}
            />

            <button type="submit" className="btn custom-button">
              Create Event
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default NewEvent;
