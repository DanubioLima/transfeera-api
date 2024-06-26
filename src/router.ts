import ReceiverController from "./receivers/receiver-controller";
import express from "express";

const receiverController = new ReceiverController();

const routes = express.Router();

routes.get("/", (_, res) => res.send("Hello World!"));

routes.post("/receivers", receiverController.create);
routes.delete("/receivers", receiverController.delete);
routes.get("/receivers", receiverController.list);
routes.put("/receivers/:id", receiverController.update);

export default routes;
