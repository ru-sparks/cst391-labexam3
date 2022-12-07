import React from 'react';

const Card = (props) => {
  return (
    <div className='card'>
      <h1> {props.country.name.official} </h1>
      <img src={props.country.flags.png}  alt={props.country.flags.png} onClick={() => {window.open(props.country.maps.googleMaps, "Popup")}} />
      <p>Common Name: {props.country.name.common} </p> 
      <p>Capital: {props.country.capital} </p> 
      <p>Ocean Access: {props.country.landlocked ? "No" : "Yes"} </p> 
    </div>
    );
}    
export default Card;
