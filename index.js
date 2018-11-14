const express = require("express");
const path = require("path");

const app = express();
const port = process.env.PORT || 5000;

// Serve static files from the React app (.css, .js, .png, ...)
app.use(express.static(path.join(__dirname, "react-app/build")));

app.get("/hello/world", (req, res) => {
	res.send("Hello World!\n");
});

// If no other url called, return the react app.  Most connections will follow this route.
app.get("*", (req, res) => {
	console.log(req.originalUrl);
	res.sendFile(path.join(__dirname, "react-app/build", "index.html"));
});

app.listen(port, () => console.log(`Listening on port ${port}`));
