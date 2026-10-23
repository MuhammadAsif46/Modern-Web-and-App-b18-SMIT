import express from "express"

const app = express()

const PORT = process.env.PORT || 5000

const users = [
    {id: 1, username: "Jhon"},
    {id: 2, username: "Elia"},
    {id: 3, username: "Clerk"},
]

app.get("/", (req, res)=>{
    res.send("Hello CI/CD")
})
app.get("/users", (req, res)=>{
    res.send(users)
})

app.listen(PORT, ()=>{
    console.log("Server is running on Port" + PORT);
})