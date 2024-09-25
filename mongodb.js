import dotenv from 'dotenv';
import mongoose from 'mongoose';
dotenv.config();

const connectionString = process.env.DB_STRING;


export const connectToDB =  mongoose.connect(connectionString).then(()=> {
    console.log(" 😎La conexion fue realizada 🚴‍♀️ con exito a la bd:🚀 ")
}).catch((error) => console.error("Problemas al conectar a la Base de datos de Mongodb🥵",error));

export default connectToDB;

console.log('DB_STRING:', process.env.DB_STRING);




