import express, { Application } from "express";
import cors, { CorsOptions } from "cors";
import cookieParser from "cookie-parser";
import morgan from "morgan";

export default class Server {
  constructor(app: Application) {
    this.config(app);
  }

  private config(app: Application): void {
    const corsOptions: CorsOptions = {
      origin: "http://localhost:8081",
    };

    app.use(cors(corsOptions));
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use(cookieParser());
    app.use(
      morgan(
        ":method :url status[:status] content-length[:res[content-length]] - :response-time ms",
      ),
    );
  }
}
