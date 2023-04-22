import React from "react";
import howManyParks from "./parks/howManyParks";

function ColoradoStateParks() {
  howManyParks(); // => "42 parks!"

  return <h1>Colorado State Parks!</h1>;
}

//This line of code was added to enable the ColoradoStateParks component 
//to be imported in index.js.
export default ColoradoStateParks;