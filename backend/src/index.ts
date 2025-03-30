import express from "express";
import path from "path";
import dotenv from "dotenv";
import fs from "fs";
import https from "https";
import { createProxyMiddleware } from "http-proxy-middleware";

dotenv.config();

const app = express();
const isProd = process.env.NODE_ENV === "production";
const PORT = process.env.PORT || (isProd ? 443 : 3000);
const HTTP_PORT = 80;

app.use(
  "/journal",
  createProxyMiddleware({
    target: "http://localhost:8080",
    changeOrigin: true,
    pathRewrite: {
      "^/journal": "/", // Remove /journal prefix when forwarding to the container
    },
  })
);

app.use(express.static(path.join(__dirname, "../dist")));

// Serve index.html for all routes except /journal (SPA approach)
app.get("*", (req, res, next) => {
  // Skip this middleware if the request is for the proxied journal service
  if (req.path.startsWith("/journal")) {
    return next();
  }
  // Serve index.html for client-side routing
  res.sendFile(path.join(__dirname, "../dist/index.html"));
});

if (isProd) {
  try {
    const sslOptions = {
      key: fs.readFileSync(
        "/etc/letsencrypt/live/perryz.net/privkey.pem",
        "utf8"
      ),
      cert: fs.readFileSync(
        "/etc/letsencrypt/live/perryz.net/fullchain.pem",
        "utf8"
      ),
    };

    // HTTPS support
    https.createServer(sslOptions, app).listen(PORT, () => {
      console.log(`HTTPS Server is running at https://perryz.net:${PORT}`);
    });

    // Forward HTTP at :80 to HTTPS at :443
    const httpApp = express();
    httpApp.use((req, res) => {
      res.redirect(`https://perryz.net${req.url}`);
    });
    httpApp.listen(HTTP_PORT, () => {
      console.log(
        `HTTP Server is running at http://perryz.net:${HTTP_PORT} and redirecting to HTTPS`
      );
    });
  } catch (error) {
    console.error("Failed to load SSL certificates:", error);
    process.exit(1);
  }
} else {
  // In development, use HTTP only
  app.listen(PORT, () => {
    console.log(
      `HTTP Server is running in development mode at http://localhost:${PORT}`
    );
  });
}
