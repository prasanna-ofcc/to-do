//express
const express = require("express");
// create an instance of express
const app = express();
//sample in memory todo list
let todos=[];

//create a todo item
app.post("todos", (req, res)=>{
    const {body, description}=req.body;
    const newtodo={
        id:todos.length + 1,
        title,
        description
    };
    todos.push(newtodo);
    console.log(todos);
    res.status(201).json(newtodo);

});

//start the server
const port = 3000;
app.listen(port, ()=>{
    console.log(`Server is running on http://localhost:${port}`);
});