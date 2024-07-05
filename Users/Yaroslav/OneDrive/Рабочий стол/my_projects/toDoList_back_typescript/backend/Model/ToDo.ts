import fs from "fs";
const todoData = {
    data: require("../data/users.json")
}
export class ToDo{
    public toDo: string;
    public date: string;
    public id: number;
    constructor(toDo: string, date: string){
        this.toDo = toDo;
        this.date = date;
    }
    
}