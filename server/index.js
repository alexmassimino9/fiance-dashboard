import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import morgan from "morgan";
import helmet from "helmet";

//  configurations

dotenv.config();
const app = express();

app.use(express.json());
app.use(helmet());
