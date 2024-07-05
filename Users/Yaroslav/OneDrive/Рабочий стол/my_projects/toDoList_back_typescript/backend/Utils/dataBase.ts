import fs from "fs";
import path from "path";
import { ToDo } from "../Model/ToDo";
const myData = {
    tasks: require("../data/users.json"),
    setData: function(newData: ToDo){this.data = []}
}