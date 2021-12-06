import express from "express"
import programme from './script.js'
const app = express()
const router = express.Router();
const port = 8080

app.post("/foo", function (req, res) {
    res.send('foo');
});


app.get('/:id/', (req, res) => {
    const id = req.params.id
    res.send(id)
})

app.get('/client/:id/verification', (req, res) => {
    const id = req.params.id
    let response = programme(id)

    res.status(200).send({
        status: "OK",
        request: id,
        result: response
    })
})


//////////////
var routes = [];
app.use("/", router);

app._router.stack.forEach(function (middleware) {
    if (middleware.route) { // routes registered directly on the app
        let path = middleware.route.path
        let method = Object.keys(middleware.route.methods)[0].toUpperCase()
        routes.push({
            "path": path,
            "method": method
        });
        return app._router.stack
    }
});

app.get('/', (req, res) => {
    res.send({
        routes
    })
})
/////////////

app.listen(port, () => {
    console.log(`Serveur à l'écoute sur http://localhost:${port}`)
})