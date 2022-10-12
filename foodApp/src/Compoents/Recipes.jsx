import React from 'react'
import RecipeItem from './RecipeItem';
function Recipes(props) {
  const {recipes}=props;
  return (
    <div className="card-columns">
      {recipes.map(ele => (
        <RecipeItem
          key={Math.random() * 100}
          name={ele.recipe.label}
          image={ele.recipe.image}
          ingredientLines={ele.recipe.ingredientLines}
        />
      ))}
    </div>
  )
}

export default Recipes