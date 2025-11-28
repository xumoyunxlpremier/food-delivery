import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";

//app config
const app = express();
const port = 4000;

//middleware
app.use(express.json()); //request
app.use(cors()); //gives access to backend from the frontend

//Db connection
connectDB();

//api endpoint
app.use("/api/food", foodRouter)

app.get("/", (req, res) => {
  res.send("Api working");
}); // http method

//run the express server

app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});



//mongodb+srv://Xumoyun:mee_youukh1809x@cluster0.iksbd24.mongodb.net/?appName=Cluster0

