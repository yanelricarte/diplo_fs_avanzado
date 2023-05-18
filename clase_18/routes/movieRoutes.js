const express = require("express");
const axios = require("axios");
const router = express.Router();

    router.get("/search", async (req, res) => {
    const searchTerm = req.query.term;
    try {
        const response = await axios.get(
        "https://api.themoviedb.org/3/search/movie",
        {
            params: {
            api_key: "03f4143002b1a6d5dfcbdf571cfbf82a",
            query: searchTerm,
            },
        }
        );
        const searchResults = response.data.results.slice(0, 3);
        res.render("search-results", { results: searchResults });
    } catch (error) {
        console.error("Error", error);
        res.status(500).json({ error: "Error al obtener las películas" });
    }
    });

    router.get("/", async (req, res) => {
    try {
        const response = await axios.get(
        "https://api.themoviedb.org/3/movie/popular",
        {
            params: {
            api_key: "03f4143002b1a6d5dfcbdf571cfbf82a",
            },
        }
        );
        const movies = response.data.results;
        res.render("movies", { movies });
    } catch (error) {
        console.error("Error", error);
        res.status(500).json({ error: "Error al obtener las películas" });
    }
    });

    module.exports = router;
