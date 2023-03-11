console.log('hi from Raphael Agbara');
// we have to create the server and map the end points.

//to create server we have to work with require function, which will help us load the modules

const express = require('express')
//loaded the express module
const connectDB= require("./config/db");
const app = express();
connectDB();
// created the server
app.use(express.json());
//will take care of parsing content into json format
//defining the routes
app.use("/api/users", require("./routes/api/users"))
app.use("/api/auth",require("./routes/api/auth"))
app.use("/api/post", require("./routes/api/post"));
app.use("/api/profile", require("./routes/api/profile"))


const port=process.env.PORT||5005;

app.listen(5005,()=>console.log(`server listening on port ${port}`));


