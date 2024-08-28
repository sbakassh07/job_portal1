//imports packages

import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'
import cors from 'cors'
import morgan from 'morgan'
import 'express-async-errors';
//files import
import connectDB from './config/db.js';

//routes import
import testRoutes from "./routes/testRoutes.js";
import authRoutes from './routes/authRoutes.js';
import errorMiddelware from './middelwares/errorMiddleware.js'



// dot ENV config 
dotenv.config()
//mongoDB connection
connectDB();

//rest object
const app = express()

//middleware
app.use(express.json());
app.use(cors())
app.use(morgan("dev"))

//route
app.use("/api/v1/test",testRoutes)
app.use('/api/v1/auth',authRoutes)

//validation middleware
app.use(errorMiddelware)


//port
const PORT = process.env.PORT || 8080

//listen
app.listen(PORT, ()=>{
    console.log(`Node server Running In ${process.env.DEV_MODE} mode on port no ${PORT}`.bgCyan.white);
});
