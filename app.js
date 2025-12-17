import express from "express"

const app = express()
const port = 3000

app.use(express.static("public"))

const posts = [
    {
        title: "I Am BatMan",
        content: "storia di un pipistrello ubriaco",
        path: "images/ciambellone.jpeg",
        tags: ["animals", "heroes", "addictions"]
    },
    {
        title: "I Am BatMan",
        content: "storia di un pipistrello ubriaco",
        path: "images/cracker_barbabietola.jpeg",
        tags: ["animals", "heroes", "addictions"]
    },
    {
        title: "I Am BatMan",
        content: "storia di un pipistrello ubriaco",
        path: "images/pane_fritto_dolce.jpeg",
        tags: ["animals", "heroes", "addictions"]
    },
    {
        title: "I Am BatMan",
        content: "storia di un pipistrello ubriaco",
        path: "images/pasta_barbabietola.jpeg",
        tags: ["animals", "heroes", "addictions"]
    },
    {
        title: "I Am BatMan",
        content: "storia di un pipistrello ubriaco",
        path: "images/torta_paesana.jpeg",
        tags: ["animals", "heroes", "addictions"]
    }
]




app.get("/", (req, res) => {
    console.log("sono console log 1");
    res.send("Server Del Mio Blog")
})
app.get("/bacheca", (req, res) => {
    console.log("sono console log dei post");
    const contatore = posts.length
    const postList = posts.map((post) => ({
        title: post.title,
        content: post.content,
        imageUrl: post.path,
        tags: post.tags,
        totalePost: contatore
    }))
    res.json(postList)
})






app.listen(port, function () {
    console.log("il server è in ascolto sulla porta " + port);
})
