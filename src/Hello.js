import React from "react";

function Hello({ name, number }) {
  return (
    <div>
      <h1>Hello, {name}!</h1>
      <p>Your phone number is: {number}</p>
    </div>
  );
}

export default Hello;
