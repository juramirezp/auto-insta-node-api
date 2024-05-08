import express from "express";
import morgan from "morgan";
import cors from "cors";
import mongoose from "mongoose";
import { DB_HOST, DB_NAME, PORT } from "./config.js";
import connectToDB from "./db.js";
import rutasImages from "./Routes/Images.routes.js";

// const connection = DB_HOST;
// mongoose.connect(connection, { autoIndex: true }).then();

const app = express();
connectToDB();
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.static("public"));
app.use(rutasImages);

app.use((req, res) => {
	res.status(404).send({ status: false, errors: "Not found" });
});

console.log("App is running in port " + PORT);

export default app;
