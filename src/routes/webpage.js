import express from "express";
import {getHomepage} from "../controllers/homepageController.js";
// import chatBotController from "../controllers/chatBotController.js";

let router = express.Router();

let initWebRoutes = (app)=> {
    router.get("/home",(req, res) =>getHomepage(req,res));
    return app.use("/", router);
};

export default initWebRoutes
