import CustomAPIError from "../errors/custom-error.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export function login(req, res) {
    const { username, password } = req.body;

    // check if empty username or password!
    if (!username || !password) {
        throw new CustomAPIError("Please provide a username and password!", 400);
    }

    const id = new Date().getDate();

    // it should has expiration period
    const token = jwt.sign({ id, username }, process.env.SECRET_KEY);

    res.json({ msg: "User Created!", token });
}

export function dashboard(req, res) {
    const { username } = req.user;

    const number = Math.floor(Math.random() * 100);

    res.json({ msg: `Hello, ${username}`, secret: `Here's your lucky number: ${number}` });
}
