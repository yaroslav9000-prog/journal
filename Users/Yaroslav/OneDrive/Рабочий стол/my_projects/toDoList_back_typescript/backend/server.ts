// first i need to import express and set basics.
import express, {Request, Response} from "express";
import cors from "cors";
import {config} from "./Utils/config";
import {logger} from "./Utils/logger";
import fileUpload from "express-fileupload";

const server = express();

server.use(cors());

server.use(express.json());

server.use("/",logger)

server.get('/', (req : Request, res: Response)=>{
    res.status(200).send("Hello Mr Freeman");
})



server.listen(config.PORT, ()=>{
    console.log(`The server is up and running on ${config.PORT} and hosted on ${config.HOST}.`);
})

