import express, { application } from "express";
import cors from "cors";
import dotenv from "dotenv"

const app = express();
    app.use(express.json() );
    app.use( cors() );
dotenv.config();

const PORT = process.env.PORT || 3030;

app.use(express.static("public"));

//If we want a special page we can also do:
//app.use ("/varlince", express.static("images"));

// app.get("/", (req, res) => {
//     res.send ("root")
// })


app.listen(PORT,() => {
    console.log(`Listening to http://localhost:${PORT}`);
})