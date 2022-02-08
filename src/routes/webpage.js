import express from "express";
import {getHomepage} from "../controllers/homepageController.js";
import chatBotController from "../controllers/chatBotController.js";

let router = express.Router();

let initWebRoutes = (app)=> {
    router.get("/home",(req, res) =>getHomepage(req,res));
    router.get("/webhook",(req, res) =>chatBotController.getWebhook(req,res));
    router.post("/webhook",(req, res) => chatBotController.postWebhook(req,res));

    return app.use("/", router);
};

export default initWebRoutes
