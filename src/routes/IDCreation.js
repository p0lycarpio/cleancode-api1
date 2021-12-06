import express from "express"

import {determinerCle} from '../services/cleServices.js'
const app = express()

// Route qui appelle determinerCle. Prend un entier 

app.get(["/client/:id/creation"], (req, res) => {
    let id, response
    if (isNaN(req.params.id)) {
        id = req.params.id
        response = "Input is NaN"
    } else {
        id = parseFloat(req.params.id)
        response = determinerCle(id, 1)
    }

    res.status(200).send({
        status: "OK",
        request: id,
        result: response
    })
})

export default app;
