import express from "express";
import mongoose from "mongoose";
import userRoute from "./routes/user.route.js"; 
import authRoute from './routes/auth.route.js'
import dotenv from "dotenv";


dotenv.config();
const app = express();
app.get("/", (req, res) => {
  res.send("hello students");
});
const PORT = process.env.PORT || 3000;
const URL = process.env.URL;
app.use(express.json())

app.use("/api/userRoute", userRoute);
app.use('/api/authRoute', authRoute)

app.listen(PORT, () => {
  console.log(`The server is running on port ${PORT}`);
});
mongoose
  .connect(URL)
  .then(() => console.log("the connection is seccesfully created"))
  .catch((err) => console.log("connection serror ocurred ", err));

  app.use((err, req, res, next)=>{
    const statusCode=err.statusCode || 500;
    const message=err.message || "Internal Server Error";
    res.status(statusCode).json({success:false, statusCode, message})
  })
//4 are argument indecat for express server as it is error handler midleware and next make the the next midlware to run contnuing from the current 
// if we give the error to next(err) it stope calling non error next midlware and focus on error and it pass eror to error midle ware 