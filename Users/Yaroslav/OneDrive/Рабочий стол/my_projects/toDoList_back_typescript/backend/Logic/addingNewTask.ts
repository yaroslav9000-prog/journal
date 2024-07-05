import { ToDo } from "../Model/ToDo";
import { Request, Response, NextFunction } from "express";
import fs from "fs";
import path from"path";
const todoData = {
    data : require("../data/users.json"),
    setData: function(newData: ToDo){this.data = [...this.data, newData]}
}

//A command to run typescript files from terminal. ***npx ts-node fileName.ts***

const createNewToDo = async (toDo: string, date: string) =>{
    const newTodo = new ToDo(toDo, date);
    const isDuplicate = todoData.data.filter((item: ToDo)=> {return item.date ==newTodo.date && item.toDo == newTodo.toDo});
    if(isDuplicate) return "ToDo already exists";
    todoData.setData(newTodo);
}
// createNewToDo("milk the cow", "15-05-2024");
// console.log("pipa");
createNewToDo("milk the cow", "24-05-2024");