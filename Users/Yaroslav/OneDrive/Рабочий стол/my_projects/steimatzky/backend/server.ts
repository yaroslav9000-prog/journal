import express, {Request, Response, NextFunction} from "express";
import bodyParser from "body-parser";
import fileUpload from "express-fileupload";
import { config } from "./config/serverConfig";
import { authorsRouter } from "./routes/authorRouter";
import { booksRouter } from "./routes/booksRouter";
import { requestLogger } from "./Middleware/errorLogger";
import { RouteNotFound } from "./Middleware/ClientsErrors";
import ErrorHandler from "./routes/routeNotFound";
import cors from "cors"
const server = express();

let isAdmin = false;

const corsOptions = {
    origin: "*", //allow any origin
    methods: ["GET","POST"], //which methods i will allow
    allowedHeaders: ["Content-Type","Authorization"], //which headers i will get
    exposedHeaders: ["Authorization"] //which headers i will expose
}

const serverCors = {
    origin: "127.0.0.1",
    methods: ["POST"],
    allowedHeaders: ["Content-Type","Authorization"],
    exposedHeaders: ["Authorization"]
}

server.use(cors(corsOptions))

server.use(requestLogger);

server.use(express.json());

server.use(express.static("upload"));

server.use(fileUpload({createParentPath: true}))

server.use(authorsRouter);

server.use(booksRouter);



server.get('/', (req: Request, res: Response)=>{
    res.status(200).json({"msg": "i work"});
})
//my api should serve three routes
// get all Authors
// get all books(instead of author id i should get his name)
//add new book(post method).

// server.use("*", ErrorHandler);

server.listen(config.PORT, config.host, ()=>{
    console.log(`Server is up and running on Port ${config.PORT} and host is: ${config.host}`);
})