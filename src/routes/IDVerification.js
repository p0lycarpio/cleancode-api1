import express from "express"

import {verifierCle} from '../services/cleServices.js'
const app = express()

app.get(["/client/:id/verification"], (req, res) => {
    const id = req.params.id
    let response = verifierCle(id, 0)

    res.status(200).send({
        status: "OK",
        request: id,
        result: response
    })
})

export default app;
