import express from "express";
import cors from "cors";
import { errorHandler } from "./helpers/error-handler.js";
import router from "./processing/processing.controller.js";

const app = express();

app.use(express.json({ limit: "1MB" }));
app.use(cors());

app.use("/", router);

app.use(errorHandler);

app.listen(3057, () => console.log(`API3 Commons listening on port 3057!`));
