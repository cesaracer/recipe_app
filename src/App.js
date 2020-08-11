import React from 'react';
import RecipeList from './containers/RecipeList';
import RecipeEntry from './containers/RecipeEntry'

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
