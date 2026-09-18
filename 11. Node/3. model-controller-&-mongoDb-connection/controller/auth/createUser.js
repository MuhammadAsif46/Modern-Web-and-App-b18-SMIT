
const user = {
    name: "ahmed",
    email: "ahmed@gmail.com"
}

const createUser = (req, res) => {
    res.status(201).send({status: 201, message: "User Fetched", user: user})
}

export default createUser;