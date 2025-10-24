// Create a new router
const express = require("express");
const router = express.Router();

// Handle the main routes

router.get("/", (req, res) => res.send("Hello World!")); 

router.get("/about", (req, res) => res.send ("<h1>This is the about page</h1>"));

router.get("/contact", (req, res) => res.send ("<h1>Contact Me!</h1>"));

router.get("/date", (req, res) => {
  const date = new Date();
  res.send(`<h1>Today's date:</h1><p>${date}</p>`);
});

router.get("/welcome/:name", (req, res) => {
  const userName = req.params.name; // Get the name from the URL
  res.send(`<h1>Welcome, ${userName}!</h1><p>Glad to have you here.</p>`);
});

router.get("/chain",
  (req, res, next) => {
    req.message = "Hello from the first handler!"; // pass data to the next one
    next(); // move to the next handler
  },
  (req, res) => {
    res.send(`<h1>chain route</h1><p>${req.message}<br>And now from the second handler!</p>`);
  }
);

const path = require("path"); // built-in Node module for file paths

router.get("/file", (req, res) => {
  res.sendFile(path.join(__dirname, "a.html"));
});

// Export the router object so index.js can access it
module.exports = router;
