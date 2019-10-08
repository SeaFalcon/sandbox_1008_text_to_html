import express from "express";
import { home, fileUpload } from "./controller";
import { uploadText } from "./middleware";

const Router = express.Router();

Router.get("/", home);
Router.post("/read", uploadText, fileUpload);

export default Router;
