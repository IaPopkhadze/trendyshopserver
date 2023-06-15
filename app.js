import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import cookieParser from "cookie-parser";
import session from "express-session";
import ProductRouter from "./routes/ProductRoutes.js";

const app = express();
const port = process.env.PORT | 5000;

app.use(cors({ credentials: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

app.get("/", (req, res) => res.send("Hello World!"));

app.use(ProductRouter);

app.listen(port, console.log("server is running on port:", port));
