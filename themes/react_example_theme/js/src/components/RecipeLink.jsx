import React from "react";

const RecipeLink = (props) => {
  const title = props.recipeObj["title"][0]["value"]

  return (
    <li>{title}</li>
  )
}

export default RecipeLink;