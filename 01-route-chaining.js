import express from "express";
import  cors from "cors";
import dotenv from "dotenv";

const app = express();
app.use (express.json());
app.use(cors());
dotenv.config();

const PORT = process.env.PORT ||3030;

app.route("/class")
    .get ((req, res) =>{
        res.send("This is a get method")
    })
    . delete((req,res) => {
        res.send("This is a delete method")
    })
    .put ((req, res) => {
        res.send("This is a put method")
    })
    .post ((req,res) => {
        res.send( "This is a post method")
    });


app.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT}`);
})