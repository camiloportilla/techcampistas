import express from 'express';
import { regusuario,mostrarusuarios } from "../Controllers/usercontrolers.js";
import {connectToDB} from "../mongodb.js";

export const router = express.Router();

    //rutas apra los usuarios
    router.post('/reguser',regusuario);
    router.get('/shuser',mostrarusuarios);
    /*router.get('/shuser/:id', onlyuser);
    router.put('/upuser/:id', upusuario);
    router.delete('/delete/:id',delusuario);*/

    router.get('/', (req, res) => {
        res.send('End point Ejemplo');
    });

export default router;