import express from 'express';
import cors from 'cors';
//import {conexionDB} from "./basedb.js";
import {connectToDB} from "./mongodb.js";
import {router} from "./Routes/routes.js";

const app = express();
app.use(cors());

app.use(express.json());
app.use('/',router);

app.listen(8000, ()=> {
    console.log('Servidor Corriendo en  http://localhost:8000/')
})