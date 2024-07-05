import { Book } from './../Models/Books';
import express from "express";
import { execute } from "../dal_mySQL/dal_mySQL";
const getAllBooks = async () =>{
    try{
        const sql = `
        SELECT idBooks, title, pages, price, CONCAT(authors.fname, " ",authors.lname) 
        AS "Author" from books 
        INNER JOIN authors
        ON authors.idAuthors = books.idAuthors 
        `;
        return await execute(sql);
    }catch(err){
        console.log(err)
    }
}
const addBook = async  (title: string, pages: number, price: number, authorID: number)=>{
    try{
    const sql = `INSERT INTO books VALUES(0, "${title}", ${pages}, ${price}, ${authorID})`
    await execute(sql);
    }catch(err){
        console.log(err);
    }
}
export{
    getAllBooks,
    addBook
}