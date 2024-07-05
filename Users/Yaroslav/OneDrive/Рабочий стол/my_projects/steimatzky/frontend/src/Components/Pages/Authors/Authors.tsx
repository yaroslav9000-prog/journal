import { Author } from "../../../Models/author";
import "./Authors.css";
import { useEffect, useState } from "react";
import {getAllAuthors} from "../../../../../backend/Controllers/authorsController";
function Authors(): JSX.Element {
    const [authors, setAuthors] = useState<Author[]>([]);
    useEffect(()=>{

            const getAuthors = async () =>{
            const data = await fetch('http://localhost:3500/api/authors');
            const readyData = await data.json();
            
            setAuthors(readyData.map((item: { idAuthors: number; fname: string; lname: string; })=> {return new Author(item.idAuthors, item.fname, item.lname)}));
            console.log(authors);
            }
            getAuthors();
            // console.log(authors);
        },[])
    return (
        <div className="Authors">
			{authors?
            authors.map((item)=><div style={{width:"7em", height:"10em",border:"solid black 1px", padding:"2em", margin:"1em"}}><h3>{item.authorID}</h3><h3>{item.fname} {item.lname}</h3></div>):<h1>authors</h1>}
        </div>
    );
}

export default Authors;
