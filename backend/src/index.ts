import express from "express";
import path from "path";
import dotenv from "dotenv";
import fs from "fs";
import https from "https";

dotenv.config();

const app = express();
const HTTPS_PORT = process.env.PORT || 443; 
const HTTP_PORT = 80; 

const sslOptions = {
    key: fs.readFileSync("/etc/letsencrypt/live/perryz.net/privkey.pem", "utf8"),
    cert: fs.readFileSync("/etc/letsencrypt/live/perryz.net/fullchain.pem", "utf8"),
};

app.use(express.static(path.join(__dirname, "../dist")));

// Redirect all other routes to the index.html file
app.get("*", (req, res) => {
    res.redirect("/");
});

// HTTPS support
https.createServer(sslOptions, app).listen(HTTPS_PORT, () => {
    console.log(`HTTPS Server is running at https://perryz.net:${HTTPS_PORT}`);
});

// Forward HTTP at :80 to HTTPS at :443
const httpApp = express();
httpApp.use((req, res) => {
    res.redirect(`https://perryz.net${req.url}`);
});
httpApp.listen(HTTP_PORT, () => {
    console.log(`HTTP Server is running at http://perryz.net:${HTTP_PORT} and redirecting to HTTPS`);
});
