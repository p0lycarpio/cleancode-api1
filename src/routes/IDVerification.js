import express from "express"

import verifyKeyValidity from '../services/verifyID.js'
const app = express()

app.get('/client/:id/verification', (req, res) => {
    const id = req.params.id
    let response = verifyKeyValidity(id)

    res.status(200).send({
        status: "OK",
        request: id,
        result: response
    })
})
export default app;
