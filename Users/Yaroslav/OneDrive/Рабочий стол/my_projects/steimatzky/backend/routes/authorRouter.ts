import express, {Request, Response, NextFunction} from "express";
import { getAllAuthors } from "../Controllers/authorsController";
const authorsRouter = express.Router();

authorsRouter.get("/authors", async(req: Request, res: Response)=>{
    //res.status(200).json(getAllAuthors)
    try{
        const authors = await getAllAuthors();
        res.status(200).json(authors);
    }catch(err){
        console.log(err);
    }
});


export{
    authorsRouter
}
