const express = require("express");

const app = express();

//parse reques of content-type -aplication/json
app.use(express.json());

//parse request of content-type - aplication www-form-urlencoded
app.use(express.urlencoded({extended: true}));

//simple route
app.get("/", (req, res)=>{
    res.json({message: "welcome to Music application"});
});

//set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () =>{
    console.log(`Server is running on port ${PORT}`);
});
