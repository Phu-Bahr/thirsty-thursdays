import React from "react";
import moment from "moment";

const EventTile = props => {
  return (
    <div>
      <div>{props.location}</div>
      <div>{props.title}</div>
      <div> {moment(props.date).format("MMMM Do YYYY, h:mm:ss a")}</div>
      <br />
      <div className={"px-3" + " " + props.hide}>
        <button
          type="button"
          className="btn btn-info"
          onClick={props.clickHideUpdate}
        >
          Edit
        </button>
        <button
          type="button"
          className="btn btn-secondary"
          onClick={props.handleDelete}
        >
          Delete
        </button>
        <div className={"py-4" + " " + props.hideUpdate}>
          <form
            onSubmit={event => {
              props.submitUpdate(event);
              event.target.reset();
            }}
          >
            <div className="row">
              <div className="col-sm-6">
                <label>Title</label>
                <input
                  type="text"
                  name="title"
                  id="title"
                  className="form-control"
                  onChange={props.onChange}
                  placeholder={props.title}
                />
              </div>
              <div className="col-sm-6">
                <label>Location</label>
                <input
                  type="text"
                  name="location"
                  id="location"
                  className="form-control"
                  onChange={props.onChange}
                  placeholder={props.location}
                />
              </div>
              <div className="col-sm-12 col-lg-6">
                <label>Date of Event</label>
                <input
                  type="date"
                  name="date"
                  id="date"
                  className="form-control"
                  onChange={props.onChange}
                  placeholder={props.date}
                />
              </div>
            </div>
            <button type="submit" className="btn custom-button">
              Submit Update
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EventTile;
