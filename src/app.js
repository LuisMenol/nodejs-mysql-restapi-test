import express from "express";
import employeesRoutes from './routes/employees.router.js';
import indexRoutes from './routes/index.router.js';


const app = express()

//middlewares
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


//Routes
app.use(indexRoutes);
app.use('/api', employeesRoutes);



export { app };
