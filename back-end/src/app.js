import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import morgan from "morgan";

const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
    allowedHeaders: ['Content-Type', 'Authorization'],
}));

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static("public"));
app.use(cookieParser());
app.use(morgan("dev"));

// Importing Routes:
import adminRouter from "./routes/admin.routes.js";
import authRouter from "./routes/auth.routes.js";
import stationRouter from "./routes/station.routes.js";
import sidingRouter from "./routes/siding.routes.js"

// Routes Declaration
app.use("/api/admin", adminRouter);
app.use("/api/login", authRouter);
app.use("/api/station", stationRouter);
app.use("/api/siding", sidingRouter);

export { app };