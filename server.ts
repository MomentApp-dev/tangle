import express, { Application, Request, Response, NextFunction } from "express";
import Server from "./src/index";
import { ROUTER as routes } from './src/routes/routes.js';

const app: Application = express();
const server: Server = new Server(app);
const PORT: number = process.env.PORT ? parseInt(process.env.PORT, 10) : 8080;

app
    .listen(PORT, "localhost", function () {
        console.log(`Server is running on port ${PORT}.`);
    })
    .on("error", (err: any) => {
        if (err.code === "EADDRINUSE") {
            console.log("Error: address already in use");
        } else {
            console.log(err);
        }
    });

// middleware interceptor
app.use('/', (req: Request, res: Response, next: NextFunction) => {
    console.log("A new request received at " + new Date().toISOString(), req.originalUrl);
    console.log(`Request body: [${JSON.stringify(req.body)}]`);
    console.log(`Request params: [${JSON.stringify(req.params)}]`);
    next();
});

app.use(routes);