import express, { Application, Request, Response, NextFunction } from "express";
import Server from "./src/index";
import { ROUTER as routes } from "./src/routes/routes.js";
import bodyParser from "body-parser";
import { isPlainLeftClick } from "@cloudscape-design/components/internal/events";

const app: Application = express();
const server: Server = new Server(app);
const PORT: number = process.env.PORT ? parseInt(process.env.PORT, 10) : 8080;

/*
 * PostMan likes to automatically set the Content-Type header to
 * text/plain, but the Express bodyParser doesn't accept JSON
 * bodies when the request has this Content-Type, so we override
 * that behavior to parse those Content-Types correctly
 */
app.use(bodyParser.json({ type: "text/plain" }));

app
  .listen(PORT, function () {
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
app.use("/", (req: Request, res: Response, next: NextFunction) => {
  console.log(
    "A new request received at " + new Date().toISOString(),
    req.originalUrl,
  );
  console.log(`Request body: [${JSON.stringify(req.body, null, 2)}]`);
  console.log(`Request params: [${JSON.stringify(req.params, null, 2)}]`);
  next();
});

app.use(routes);
