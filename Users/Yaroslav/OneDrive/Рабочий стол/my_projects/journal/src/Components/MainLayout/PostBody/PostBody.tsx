import { NavLink } from "react-router-dom";
import { PostClass } from "../../../Models/Post";
import "./PostBody.css";

type Props = {
    item : PostClass
    deletePost: (num: number) => void
}

function PostBody({item, deletePost}: Props): JSX.Element {
    return (
        <div className="PostBody">
	
                <NavLink style={{color:"black"}} to={`/post/${item.id}`}><h3>{item.title}</h3></NavLink>
                <h4>{item.date}</h4>
                <p className="halfPost">{item.body.length > 30? `${item.body.slice(0, 31)}. . . .`: `${item.body}`}</p>
                <button style={{backgroundColor:"red"}} onClick={()=>deletePost(item.id)}>delete</button>
                <hr />
        </div>
    );
}

export default PostBody;
