import express, {Request, Response, NextFunction} from "express";
import bodyParser from "body-parser";
import fileUpload from "express-fileupload";
import { config } from "./config/serverConfig";
import { authorsRouter } from "./routes/authorRouter";
import { booksRouter } from "./routes/booksRouter";
import { requestLogger } from "./Middleware/errorLogger";
const server = express();

server.use(requestLogger);

server.use(express.json());

server.use(fileUpload({createParentPath: true}))

server.use("/authors", authorsRouter);

server.use("/books", booksRouter);


server.get('/', (req: Request, res: Response)=>{
    res.status(200).json({"msg": "i work"});
})
//my api should serve three routes
// get all Authors
// get all books(instead of author id i should get his name)
//add new book(post method).

server.listen(config.PORT, config.host, ()=>{
    console.log(`Server is up and running on Port ${config.PORT} and host is: ${config.host}`);
})