import React from "react";
import "./App.css";

const BoxColor = (props) => {

    const red = props.r;
    const green = props.g;
    const blue = props.b;

    const divStyle = {
        backgroundColor: 'rgb('+ red + ',' + green +', ' + blue +')',
        height: 50,
        padding: 25
    }

    return <p style={divStyle}>This is a div example.</p>;

}

export default BoxColor;