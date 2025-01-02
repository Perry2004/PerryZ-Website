import express from "express";
import path from "path";
import dotenv from "dotenv";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the Vite build directory
app.use(express.static(path.join(__dirname, "../dist")));

// Redirect all other routes to the index.html file 
app.get("*", (req, res) => {
    res.redirect("/");
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
