const express = require("express");
const swaggerUi = require("swagger-ui-express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongodb = require("./db/connect");
const path = require("path");
const { requiresAuth } = require("express-openid-connect");



const app = express();
const port = 9090;

const startServer = () => {
  const postRoutes = require("./routes/posts");
  const swaggerFile = require("./swagger-prod.json");
  const { auth } = require("express-openid-connect");

  const config = {
    authRequired: false,
    auth0Logout: true,
    secret: process.env.SECRET,
    baseURL: "https://textbookexchange-finalproject.onrender.com",
    clientID: process.env.CLIENT_ID,
    issuerBaseURL: process.env.ISSUER_BASE_URL,
  };

  app.use(auth(config));

  app
    .use(cors())
    .use(bodyParser.json())
    .use(express.json())
    .use(express.urlencoded({ extended: true }))
    .use(express.static(path.join(__dirname, "public")))

    //ROUTES
    .use("/posts", postRoutes);
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));

  // need swagger setup with routes
  // .use(
  //   "/api-docs",
  //   requiresAuth(),
  //   swaggerUi.serve,
  //   swaggerUi.setup(swaggerDocument)
  // );

  app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
  });

  app.get("/", (req, res) => {
    res.send(req.oidc.isAuthenticated() ? "Logged in" : "Logged out");
  });

  app.get("/profile", requiresAuth(), (req, res) => {
    res.send(JSON.stringify(req.oidc.user));
  });

  app.use((err, req, res, next) => {
    if (err.name === "UnauthorizedError") {
      res
        .status(401)
        .send("Unauthorized: Access is denied due to invalid credentials.");
    } else {
      next(err);
    }
  });

  app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: err.message });
  });

  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
};

mongodb.initDb((err) => {
  if (err) {
    console.error(err);
    process.exit(1);
  } else {
    console.log("Connected to the database");
    startServer();
  }
});
