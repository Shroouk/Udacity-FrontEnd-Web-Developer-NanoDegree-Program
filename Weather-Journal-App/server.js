// Setup empty JS object to act as endpoint for all routes
projectData = [];


const http = require('http');

// Require Express to run server and routes
const express = require('express');

// Start up an instance of app
const app = express();

/* Dependencies */
const bodyParser = require('body-parser')   //to parse our data

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));


// Setup Server
const port = 8000;
const server = http.createServer(app);
server.listen(port,() => console.log(`Server running on http://localhost:${port}`));





// Initialize all routes woth call back function
app.get('/all',function(req,res){
    res.status(200).send(projectData);
    projectData=[];
});





app.post('/add', (req, res) => {
    newEntry = {
        date: req.body.date,
        temp: req.body.temp,
        content: req.body.content,
        name: req.body.name
    }
    projectData.push(newEntry);

    res.status(200).send({
        sucess: true,
        message: "Data saved successfully",
        data: projectData
      });
  })