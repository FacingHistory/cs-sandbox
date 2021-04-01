import React, {useEffect, useState } from "react";
import RecipeLink from './RecipeLink'

const RecipesDisplay = () => {

  const [recipeData, setRecipeData] = useState([])
  
  useEffect (()=> {
    fetch("https://dev-cs-sandbox.pantheonsite.io/en/api/recipes?_format=json")
      .then(res => res.json())
      .then(data => {
        setRecipeData(data)
        console.log("This is recipeData: ", recipeData) 
      })
  },[recipeData.length === 0])

  return (
    <div>
      <h2>Here is a list of recipes:</h2>
      {recipeData.length > 0 ? 
        <ul>{recipeData.map(recipeObj => <RecipeLink recipeObj={recipeObj}/>)}</ul> 
        : 
        <div>Loading...</div>
      }
    </div>
  )
}

export default RecipesDisplay;