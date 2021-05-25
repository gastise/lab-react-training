// Snippets to generate basic function component
// rafce + tab  (just like emmet in html)

import React from "react";
// import "./styles/Card.css";

const Card = (props) => {
  console.log(props);
  return (
    <div className="Card">
      <h1>Id Card</h1>
      <p className="LastName">Last name :{props.lastName}</p>
      <p className="FirstName">First name :{props.firstName}</p> 
      <p className="Gender">Gender :{props.gender}</p>
      <p className="Height">Height :{props.height}</p>
      <p className="Birth">Birth : {props.birth.toString()}</p>    
      <img
        className="Card__picture"
        style={{
          width: 128,
          height: 128,
        }}
        src={props.picture}
        alt=""
      />
    </div>
  );
};

export default Card;
