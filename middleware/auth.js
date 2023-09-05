import CustomAPIError from "../errors/custom-error.js";
import jwt from "jsonwebtoken";

function authenticate(req, res, next) {
    const authorizationHeader = req.headers.authorization;

    if (!authorizationHeader || !authorizationHeader.startsWith("Bearer ")) {
        throw new CustomAPIError("Not authorized to perform this action!", 401);
    }

    const token = authorizationHeader.split(' ')[1];

    try {
        const { username, id } = jwt.verify(token, process.env.SECRET_KEY);
        req.user = { username, id };
        next();
    } catch (error) {
        // console.error("Error:", error.message);
        throw new CustomAPIError("Not authorized to perform this action!", 401);
    }
}

export default authenticate;