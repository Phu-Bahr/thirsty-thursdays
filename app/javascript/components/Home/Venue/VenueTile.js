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
    </div>
    )
}

export default VenueTile