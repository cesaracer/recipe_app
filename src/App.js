import React from 'react';
import RecipeList from './RecipeList';
import RecipeEntry from './RecipeEntry'

function App() {
  return (
    <div className="App">
      <h1>My Recipes</h1>
      <RecipeEntry/>
      <RecipeList/>
    </div>
  );
}

export default App;
