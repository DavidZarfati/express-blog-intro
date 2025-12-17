import express from "express"

const app = express()
const port = 3000


app.get("/", (req, res) => {
    console.log("sono console log 1");
    res.send("Server Del Mio Blog")
})






app.listen(port, function () {
    console.log("il server è in ascolto sulla porta " + port);
})
