import React from 'react'

const VenueTile = props => {     
  
  return(
    <div className="col-md-6 col-middle p-3">
      <div>
        <img src={props.venueImage} />
      </div>
      <div className="pt-3">
        <div>{props.name}</div>
        <div>{props.street}</div>
        <div>{props.city}, {props.state} {props.zip}</div>
        <div>{props.telephone}</div>
        <div>{props.url}</div>
        <button type="button" className="btn btn-secondary" onClick={props.handleClick}>
          Delete Venue
        </button>
      </div>
    </div>
  )
}

export default VenueTile