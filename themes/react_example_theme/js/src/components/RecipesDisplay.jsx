import React, {useEffect, useState } from "react";

const RecipesDisplay = () => {

  useEffect (() => {
    fetch("https://dev-cs-sandbox.pantheonsite.io/en/api/recipes?_format=json")
    .then(res => res.json())
    .then(data => console.log(data))
  })

  return (
    <div>
      <h2>Here is a list of recipes:</h2>
    </div>
  )
}

export default RecipesDisplay;