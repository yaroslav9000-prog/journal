import express, {Request, Response, NextFunction} from "express";
import { execute } from "../dal_mySQL/dal_mySQL";
import { addBook, getAllBooks } from "../Controllers/booksController";

const booksRouter = express.Router();

booksRouter.get("/api/books", async(req: Request, res: Response, next: NextFunction)=>{
    try{
        const books = await getAllBooks();
        await res.status(200).json(books);
    }catch(err){
        console.log(err)
    }
    next()
})
booksRouter.post("/api/books/add", async(req: Request, res: Response, next: NextFunction)=>{
    try{
        await addBook(`${req.body.title}`, req.body.pages, req.body.price, req.body.authorID);
        res.status(200).json({"msg": "book was successfully added"});
    }catch(err){
        console.log(err);
    }
    next()
})



export{
    booksRouter,
}