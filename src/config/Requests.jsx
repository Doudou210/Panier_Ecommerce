import React from "react";

export default function Requests(){
  fetch('https://jsonplaceholder.typicode.com/photos')
  .then(response =>response.json())
}