//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.
import React from "react";
import ReactDOM from "react-dom";

var customStyle = {
  color: "red"
};

var hour = new Date().getHours();
var greet;
switch (hour) {
  case 0:
    greet = "Good morning!";
    break;
  case 12:
    greet = "Good afternoon!";
    customStyle.color = "green";
    break;
  case 18:
    greet = "Good night!";
    customStyle.color = "blue";
    break;
  default:
    break;
}

ReactDOM.render(
  <h1 className="heading" style={customStyle}>
    {greet}
  </h1>,
  document.getElementById("root")
);
