import express from "express"

const router = express.Router()

const users = [
    {
        id: 1,
        name: "Ali",
        email: "ali@gmail.com"
    },
    {
        id: 2,
        name: "Ahmed",
        email: "ahmed@gmail.com"
    }
]

router.get("/users", (req, res) => {
    res.status(200).send({ status: 200, message: "Users Fetched", users })
})

export default router;