import dotenv from "dotenv"
import express from "express";
import viewEngine from "./config/viewEngine.js";
import initWebRoutes from "./routes/webpage.js";
import bodyParser from "body-parser";

let app = express();
dotenv.config()

// config view engine
viewEngine(app);

//use body-parser to post data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/hello",(req,res)=>{
    res.status(200).json({
        "status": "200OK",
        "msg": "Server is Online, Hello World"
    })
})
// init all web routes
initWebRoutes(app);

let port = process.env.PORT || 8000;

app.listen(port, ()=>{
   console.log(`Server is running at the port ${port}`) ;
});