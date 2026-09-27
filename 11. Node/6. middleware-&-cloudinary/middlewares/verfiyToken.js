import jwt from "jsonwebtoken";

const verifyToken = (req, res, next) => {
    const { authorization } = req.headers;
    // console.log("token",authorization);

    const token = authorization && authorization.split(" ")[1];
    console.log(token);

    jwt.verify(token, process.env.JWT_SECRET_KEY, function (err, decoded) {
        if(err){
            return res.status(401).json({ status: 401, message: "unauthorized", error: err.message });
        }
        next();
    });

}

export default verifyToken;
