import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { PostClass } from "../../../Models/Post";
import Nav from "../Nav/Nav";
import "./Hub.css";


interface Props {
    search: string;
    setSearch: (value: string)=>void;
}
function Hub({search, setSearch}: Props): JSX.Element {
    
    const handleSearch = (value: string)=>{
        setSearch(value)
    }
    return (
        <div className="Hub">
			<input type="text" onChange={(e)=>handleSearch(e.target.value)} placeholder="Look for post"/>
            <ul >
                <Nav name={"Home"}/>
                <Nav name={"Post"}/>
                <Nav name={"About"}/>
            </ul>
        </div>
    );
}

export default Hub;
