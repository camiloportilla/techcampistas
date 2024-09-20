import {usuario} from '../Models/usuario.js'

//Aca guardamos un usario en la base de datos
export const regusuario = (req,res) => {
const user = usuario(req.body)
user
.save()
.then((data) => res.json(data))
.catch((error) => res.json({message: error}))
}

//aca Mostramos todos los usuario de la base de datos de la colección users
export const mostrarusuarios = (req,res) => {
    usuario
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}))
    
    }

export default regusuario;