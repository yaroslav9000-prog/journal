import express, {Request, Response, NextFunction} from "express";
import { getAllAuthors } from "../Controllers/authorsController";
const authorsRouter = express.Router();

authorsRouter.route("/api/authors")

authorsRouter.get("/api/authors", async(req: Request, res: Response, next: NextFunction)=>{
    //res.status(200).json(getAllAuthors)
    try{
        const authors = await getAllAuthors();
        res.status(200).json(authors);
    }catch(err){
        console.log(err);
    }
    next();
});


export{
    authorsRouter
}
