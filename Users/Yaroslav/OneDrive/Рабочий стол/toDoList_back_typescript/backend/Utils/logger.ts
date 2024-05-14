import {Request, Response, NextFunction} from "express";
import path from "path";
import * as fs from "fs";



const  logger= (req: Request, res: Response, next: NextFunction)=>{
    const myDate = new Date().toISOString();
    fs.appendFile(path.join(__dirname,"..", "logs", "log.txt"), `Request: ${req.method}, URL: ${req.url} Time: ${myDate} \n`,(error)=>{
        if(error) console.log(error.message);
    })
    next();
}

export{
    logger
}
// I should log errors, warns, info, verbose, debug
