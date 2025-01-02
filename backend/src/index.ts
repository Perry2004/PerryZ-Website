import express from "express";
import path from "path";

const app = express();
const PORT = 3000;

// Serve static files from the Vite build directory
app.use(express.static(path.join(__dirname, "../dist")));

// Redirect all other routes to the index.html file 
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../dist/index.html"));
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
