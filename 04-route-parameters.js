import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import data from "./data/data-mock.json" assert {type: "json"};

const app = express();
app.use (express.json);
