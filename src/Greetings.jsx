// Snippets to generate basic function component
// rafce + tab  (just like emmet in html)

import React from "react";
import "./App.css";


const Greetings = (props) => {
  console.log(props);

const german = (props.lang === "de");
const french = (props.lang === "fr");
const spanish = (props.lang === "es");
const english = (props.lang === "en");
  
   if ( german ) {
         return <p> Hallo {props.children}</p>
      } else if ( french) {
        return <p> Bonjour {props.children}</p>
    } else if ( spanish ) {
        return <p> Hola {props.children}</p>
    } else if ( english ) {
        return <p> Hello {props.children}</p>
}
};

export default Greetings;












