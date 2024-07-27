import { NavLink } from "react-router-dom";
import { PostClass } from "../../../Models/Post";
import "./PostBody.css";
import { useState } from "react";

type Props = {
    item : PostClass
    deletePost: (num: number) => void
}

 

function PostBody({item, deletePost}: Props): JSX.Element {
    const [clicked, setClicked] = useState<boolean>(false);
    const expandPost = ()=>{
        setClicked(!clicked);
    }
    return (
        <div className="PostBody" onClick={()=>{expandPost()}}>
	
                <NavLink style={{color:"black"}} to={`/post/${item.id}`}><h3>{item.title}</h3></NavLink>
                <h4>{item.date}</h4>
                <p className="halfPost" >{clicked?`${item.body}`: `${item.body.slice(0, 31)}. . . .` }</p>
                <button style={{backgroundColor:"red"}} onClick={()=>deletePost(item.id)}>delete</button>
                <hr />
        </div>
    );
}

export default PostBody;
