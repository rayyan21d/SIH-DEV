import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(cookieParser());


// Importing Routes:
import adminRouter from "./routes/admin.routes.js";
import authRouter from "./routes/auth.routes.js";

// Routes Declaration
app.use("/api/admin", adminRouter);
app.use("/api/login", authRouter);



export { app };