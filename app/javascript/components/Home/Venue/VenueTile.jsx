import React from 'react'

const VenueTile = props => {     
  
  return(
    <div className="col-md-6 border">
      <img style={{width: '300px', height: '200px'}} src={props.venueImage}/>
       <div>{props.name}</div>
       <div>{props.street}</div>
       <div>{props.city}, {props.state} {props.zip}</div>
       <div>{props.telephone}</div>
       <div>{props.url}</div>
       <button type="button" className="btn btn-secondary" onClick={props.handleClick}>
         Delete Venue
       </button>
    </div>
  )
}

export default VenueTile