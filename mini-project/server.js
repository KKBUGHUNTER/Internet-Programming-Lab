const express = require('express');
const mongoose = require('mongoose');
const axios = require('axios');

const app = express();
const PORT = 3000;

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/recipes', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
const db = mongoose.connection;

// Create a schema for recipes
const recipeSchema = new mongoose.Schema({
    title: String,
    ingredients: String,
    servings: String,
    instructions: String,
});

// Create a text index on the 'title' field
recipeSchema.index({ title: 'text' });

const Recipe = mongoose.model('Recipe', recipeSchema);


// Fetch data from Recipe API and upload to MongoDB
app.get('/fetch', async (req, res) => {
    try {
        const apiKey = '6RhyAk9yf3f7CruDArpnwQ==rbH6ZtaLQtGiX2o7'; // Your API key here
        const query = encodeURIComponent('italian wedding soup');
        const url = `https://api.api-ninjas.com/v1/recipe?query=${query}`;
        console.log(url);
        const response = await axios.get(url, {
            headers: { 'X-Api-Key': apiKey },
        });

        const recipes = response.data;
        console.log(data);

        // Save recipes to MongoDB
        await Recipe.insertMany(recipes);
        res.send('Data fetched and uploaded to MongoDB successfully.');
    } catch (error) {
        console.error('Error fetching and uploading data:', error);
        res.status(500).send('Error fetching and uploading data.');
    }
});

// Search and filter recipes in MongoDB
app.get('/search', async (req, res) => {
    try {
        const query = req.query.query;
        const filter = req.query.filter || {};

        const recipes = await Recipe.find({ $text: { $search: query }, ...filter });
        res.json(recipes);
    } catch (error) {
        console.error('Error searching recipes:', error);
        res.status(500).json({ error: 'Error searching recipes.' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);

});
