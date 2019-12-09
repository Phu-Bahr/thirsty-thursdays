import React from "react";
import { Link } from "react-router-dom";
import EditVenue from "./EditVenue";

const VenueTile = props => {
  return (
    <div className="col-md-6 col-middle p-3">
      <div>
        <img className="venueImage" src={props.venueImage} />
      </div>
      <div className="pt-3">
        <div>{props.name}</div>
        <div>{props.street}</div>
        <div>
          {props.city}, {props.state} {props.zip}
        </div>
        <div>{props.telephone}</div>
        <div>{props.url}</div>
        <div className="pt-2">
          <button
            type="button"
            className="btn btn-info"
            onClick={props.clickHideUpdate}
          >
            Edit
          </button>
        </div>

        <EditVenue
          key={props.id}
          id={props.id}
          name={props.name}
          street={props.street}
          city={props.city}
          state={props.state}
          zip={props.zip}
          telephone={props.telephone}
          url={props.url}
          venueImage={props.venueImage}
          hideUpdate={props.hideUpdate}
          handleClick={props.handleClick}
        />
      </div>
    </div>
  );
};

export default VenueTile;
