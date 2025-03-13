import express from "express";
import path from "path";
import dotenv from "dotenv";
import fs from "fs";
import https from "https";

dotenv.config();

const app = express();
const HTTPS_PORT = process.env.HTTPS_PORT || 443;
const HTTP_PORT = process.env.HTTP_PORT || 80;
const SERVER_MODE = process.env.SERVER_MODE || "development"; // Default to "development"

const STATIC_FILES_PATH = path.join(__dirname, "../dist");
const DOMAIN = "perryz.net";
const SSL_KEY_PATH = "/etc/letsencrypt/live/perryz.net/privkey.pem";
const SSL_CERT_PATH = "/etc/letsencrypt/live/perryz.net/fullchain.pem";

app.use(express.static(STATIC_FILES_PATH));

app.get("*", (req, res) => {
  res.redirect("/");
});

// Logging utility function
const logger = {
  info: (message: string) => {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] [INFO] ${message}`);
  },
  error: (message: string) => {
    const timestamp = new Date().toISOString();
    console.error(`[${timestamp}] [ERROR] ${message}`);
  },
};

if (SERVER_MODE === "production") {
  // Production: Use HTTPS with certificates
  const sslOptions = {
    key: fs.readFileSync(SSL_KEY_PATH, "utf8"),
    cert: fs.readFileSync(SSL_CERT_PATH, "utf8"),
  };

  https.createServer(sslOptions, app).listen(HTTPS_PORT, () => {
    logger.info(`Server started in PRODUCTION mode`);
    logger.info(`HTTPS Server running on port ${HTTPS_PORT}`);
    logger.info(
      `Website available at https://${DOMAIN}:${
        HTTPS_PORT !== 443 ? HTTPS_PORT : ""
      }`
    );
  });

  const httpApp = express();
  httpApp.use((req, res) => {
    res.redirect(`https://${DOMAIN}${req.url}`);
  });
  httpApp.listen(HTTP_PORT, () => {
    logger.info(`HTTP redirect service running on port ${HTTP_PORT}`);
    logger.info(`All HTTP traffic will be redirected to HTTPS`);
  });
} else {
  // Development: Use HTTP only
  app.listen(HTTP_PORT, () => {
    logger.info(`Server started in DEVELOPMENT mode`);
    logger.info(`HTTP Server running on port ${HTTP_PORT}`);
    logger.info(`Website available at http://localhost:${HTTP_PORT}`);
    logger.info(`Static files served from: ${STATIC_FILES_PATH}`);
  });
}
