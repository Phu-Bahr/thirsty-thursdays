import React from 'react'
import { Link } from 'react-router-dom'

const VenueTile = props => {     
 
  let deleteVenue = () => {
    const urls = `/api/v1/destroy/${props.id}`
    const token = document.querySelector('meta[name="csrf-token"]').content

    fetch(urls, {
      method: "DELETE",
      headers: {
        "X-CSRF-Token": token,
        "Content-Type": "application/json"
      }
    })
    .then (response => {
      if (response.ok) {
        return response.json()
      }
      throw new Error("Network response was not ok.")
    })
    .then(() => this.props.history.push("/"))
    .catch(error => console.log(error.message))
  }
  
  return(
    <div className="col-md-6 border">
      <img style={{width: '300px', height: '200px'}} src={props.venueImage}/>
       <div>{props.name}</div>
       <div>{props.street}</div>
       <div>{props.city}, {props.state} {props.zip}</div>
       <div>{props.telephone}</div>
       <div>{props.url}</div>
       <button type="button" className="btn btn-danger" onClick={deleteVenue}
       >
         Delete Venue
       </button>
    </div>
    )
    
}

export default VenueTile