import React from "react";

var Heading = function () {
  var customStyle = {
    color: "red"
  };
  var greet = "";
  var hour = new Date().getHours();
  if (hour < 12) {
    greet = "Good morning!";
  } else if (hour < 18 && hour > 12) {
    greet = "Good afternoon!";
    customStyle.color = "green";
  } else {
    greet = "Good night!";
    customStyle.color = "blue";
  }
  return (
    <h1 className="heading" style={customStyle}>
      {greet}
    </h1>
  );
};

export default Heading;
