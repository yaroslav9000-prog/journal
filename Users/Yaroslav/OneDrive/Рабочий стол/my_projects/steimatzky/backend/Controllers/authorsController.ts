import express from "express";
import {execute} from "../dal_mySQL/dal_mySQL"
const getAllAuthors = async ()=>{
    try{
    const sql = `SELECT * from authors`
    const result = await execute(sql);
    }catch(err){
        console.log(err);
    }
}
export{
    getAllAuthors
}