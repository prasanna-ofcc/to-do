//express
const express = require("express");
// create an instance of express
const app = express();
//define the route
app.get('/',(req, res)=>{
    res.send("Hello Prasanna, welcome Aboard");
})
//start the server
const port = 3000;
app.listen(port, ()=>{
    console.log(`Server is running on http://localhost:${port}`);
});