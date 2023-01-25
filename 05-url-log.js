import express from "express"
import cors from "cors"
import dotenv from "dotenv"

const app = express();
app.use(express.json() );
app.use ( cors() );
dotenv.config();
app.use(urlLog);

const PORT = process.env.PORT ||3030;

app.get("/", (req,res) =>{
    console.log ("05-url-log:  this is the root");
})

//this is a middleware software that is listening to all that
//the users are typing 
function urlLog(req, res, next){
    const logResult = `${req.protocol}:// ${req.hostname} ${req.originalUrl} ${new Date()}`
    console.log(logResult)
    next();
}

app.listen (PORT, () => {
    console.log(`Listening on http://localhost:${PORT}`)
})
