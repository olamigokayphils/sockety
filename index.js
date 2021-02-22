const express = require("express");
const app = express();
const expressWs = require('express-ws')(app);

const expressLayout = require("express-ejs-layouts");


const SERVER_PORT_NO = process.env.PORT || 3000;

//EJS
app.use(expressLayout);
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

const startServer = () => {
  
    //NON-ROUTE MIDDLEWARE
    // BODY PARSER => application/json
    app.use(express.json());
    // BODY PARSER => application/x-www-form-urlencoded
    app.use(express.urlencoded({ extended: true }));
    
    //ROUTES MIDDLEWARE
    app.use("/", require("./routes/main"));

    //START APP
    app.listen(SERVER_PORT_NO, () => console.log(`Server is running on Port: ${SERVER_PORT_NO}`));
  };
  
  startServer();