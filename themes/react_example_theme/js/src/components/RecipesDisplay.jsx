import React, {useEffect, useState } from "react";

const RecipesDisplay = () => {

  const [recipeData, setRecipeData] = useState("")
  
  useEffect (()=> {
    fetch("https://dev-cs-sandbox.pantheonsite.io/en/api/recipes?_format=json")
      .then(res => res.json())
      .then(data => {
        console.log("This is data: ", data[0]["title"][0]["value"])
        setRecipeData(data[0]["title"][0]["value"])
        console.log("This is recipe data: ", recipeData) 
      })
  },[])

  return (
    <div>
      <h2>Here is a list of recipes:</h2>
      {/* <div>{data[0]}</div> */}
    </div>
  )
}

export default RecipesDisplay;