import  mongoose from "mongoose";
//const uri2 = "mongodb+srv://clasesosmer:Colombia2024*?@cluster0.touxv.mongodb.net/datapoli?retryWrites=true&w=majority&appName=Cluster0";

const pass = "Colombia2024*?"
//mongodb+srv://clasesosmer:<db_password>@cluster0.touxv.mongodb.net/
const stringDB = "mongodb+srv://clasesosmer:Colombia2024*?@cluster0.touxv.mongodb.net/datapoli";
//const stringDB = `mongodb+srv://clasesosmer:${pass}@cluster0.umdc50x.mongodb.net/datapoli?retryWrites=true&w=majority&appName=Cluster0`
console.log(" 😎PASO POR ACA🚴‍♀️ con exito a la bd:🚀 ")
/*
export const  conexionDB =  mongoose.connect(stringDB).then(()=> {
  console.log(" 😎La conexion fue realizada 🚴‍♀️ con exito a la bd:🚀 ")
}).catch((error) => console.error("Problemas al conectar a la Base de datos de Mongodb🥵",error));
*/

export const conexionDB =  async() => {
 try {
   console.log(" 😎La conexion fue realizada 🚴‍♀️ con exito a la bd:🚀 ")
    mongoose.set("strictQuery", true);
    await mongoose.connect(stringDB).then(()=> {
      console.log(" 😎La conexion fue realizada 🚴‍♀️ con exito a la bd:🚀 ")
 }).catch((error) => console.error("Problemas al conectar a la Base de datos de Mongodb🥵",error));
   
  } catch (error) {
    throw new Error("Error a la hora de iniciar la BD ver logs");
  }
};

export default conexionDB;