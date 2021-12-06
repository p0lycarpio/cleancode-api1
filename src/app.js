import express from "express"
import allRoutes from './routes/routes.js';
import {SERVER_PORT} from './config/constantes/constantes.js'

const app = express()

app.use(allRoutes);

app.listen(SERVER_PORT, () => {
    console.log(`🚀 Serveur à l'écoute sur http://localhost:${SERVER_PORT}`)
})