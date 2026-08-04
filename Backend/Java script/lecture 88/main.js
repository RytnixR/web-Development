const express = require('express');
const app = express();
const port = 8080;
const fs = require("fs")

// app.use(express.static("public"))

//middleware 1 - logger for our application
 app.use((req, res, next)=> {
    fs.appendFileSync("log.txt",`${Date.now()} is a ${req.method}\n`)
  console.log(`${Date.now()} is a ${req.method}`);
  next();
})

//middleware 2
app.use((req, res, next)=> {
  console.log('LOGGED M2');
  next();
})

// Define a route for GET requests to the root URL
app.get('/', (req, res) => {
  res.send('Hello World from Express!');
});

app.get('/about', (req, res) => {
  res.send('About World from Express!');
});

app.get('/contact', (req, res) => {
  res.send('Contact...!');
});

// Start the server
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});