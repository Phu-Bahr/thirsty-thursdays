import React from "react";
import { Link } from "react-router-dom";
import EditVenue from "./EditVenue";

const VenueTile = props => {
  return (
    <div className="col-md-6 col-middle p-3">
      <div className="parent ">
        <div className="child particles">
          <img className="venueImage" src={props.venueImage} />
          <div className="venueTitle">{props.name}</div>
        </div>
      </div>
      <div className="pt-3">
        <div>{props.street}</div>
        <div>
          {props.city}, {props.state} {props.zip}
        </div>
        <div>{props.telephone}</div>
        <div>{props.url}</div>
        <div className={"pt-2" + " " + props.hideEditButton}>
          <button
            type="button"
            className="btn btn-info"
            onClick={props.clickHideUpdate}
          >
            Edit
          </button>

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
            toggleRefreshKey={props.toggleRefreshKey}
          />
        </div>
      </div>
    </div>
  );
};

export default VenueTile;
