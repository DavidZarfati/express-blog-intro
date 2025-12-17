import express from "express"

const app = express()
const port = 3000

const posts = [
    {
        title: "I Am BatMan",
        content: "storia di un pipistrello ubriaco",
        path: "./BOH",
        tags: ["animals", "heroes", "addictions"]
    },
    {
        title: "I Am BatMan",
        content: "storia di un pipistrello ubriaco",
        path: "./BOH",
        tags: ["animals", "heroes", "addictions"]
    },
    {
        title: "I Am BatMan",
        content: "storia di un pipistrello ubriaco",
        path: "./BOH",
        tags: ["animals", "heroes", "addictions"]
    },
    {
        title: "I Am BatMan",
        content: "storia di un pipistrello ubriaco",
        path: "./BOH",
        tags: ["animals", "heroes", "addictions"]
    },
    {
        title: "I Am BatMan",
        content: "storia di un pipistrello ubriaco",
        path: "./BOH",
        tags: ["animals", "heroes", "addictions"]
    }
]




app.get("/", (req, res) => {
    console.log("sono console log 1");
    res.send("Server Del Mio Blog")
})
app.get("/bacheca", (req, res) => {
    console.log("sono console log dei post");

    const postList = posts.map((post) => ({
        title: post.title,
        content: post.content,
        imageUrl: post.path,
        tags: post.tags
    }))

    res.json(postList)
})






app.listen(port, function () {
    console.log("il server è in ascolto sulla porta " + port);
})
