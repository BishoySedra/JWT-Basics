import Express from "express"
import notFound from "./middleware/not-found.js";
import errorHandlerMiddleware from "./middleware/error-handler.js";
import mainRoute from "./routes/main.js"

const app = Express();

app.use(Express.json());
app.use(Express.static("public"));

app.use("/api/v1", mainRoute);

app.use(errorHandlerMiddleware);
app.use(notFound);

try {
    const port = parseInt(process.env.PORT);
    app.listen(port, console.log(`Server running on ${port}!`));
} catch (error) {
    console.log(error);
}