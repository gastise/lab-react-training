import React from "react";
import "./App.css";

const Random = (props) => {
    const min = props.min;
    const max = props.max;

    return Math.floor(Math.random() * (max - min) + min);

}


export default Random;