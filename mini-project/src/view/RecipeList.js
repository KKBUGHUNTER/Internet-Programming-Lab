import React, { useState, useEffect } from 'react';
import './RecipeList.css'; // Import CSS file for styling

const RecipeList = () => {
  const [recipes, setRecipes] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredRecipes, setFilteredRecipes] = useState([]);

  useEffect(() => {
    fetchRecipes();
  }, []);

  const fetchRecipes = () => {
    fetch('http://localhost:3000/search?query=')
      .then(response => {
        if (!response.ok) {
          throw new Error('Error fetching recipes');
        }
        return response.json();
      })
      .then(data => {
        setRecipes(data);
        setFilteredRecipes(data);
      })
      .catch(error => console.error(error));
  };

  const handleSearch = (event) => {
    const term = event.target.value.toLowerCase();
    setSearchTerm(term);
    const filtered = recipes.filter(recipe =>
      recipe.title.toLowerCase().includes(term)
    );
    setFilteredRecipes(filtered);
  };

  return (
    <div className="recipe-list-container">
      <input
        type="text"
        placeholder="Search recipes..."
        value={searchTerm}
        onChange={handleSearch}
        className="search-input"
      />
      <div className="recipes">
        {filteredRecipes.map(recipe => (
          <div key={recipe._id} className="recipe-card">
            <h2>{recipe.title}</h2>
            <p><strong>Servings:</strong> {recipe.servings}</p>
            <p><strong>Ingredients:</strong> {recipe.ingredients}</p>
            <p><strong>Instructions:</strong> {recipe.instructions}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecipeList;
