import express, {Request, Response, NextFunction} from "express";

const booksRouter = express.Router();

booksRouter.get("/api/books", async(req: Request, res: Response)=>{
    
})



export{
    booksRouter,
}