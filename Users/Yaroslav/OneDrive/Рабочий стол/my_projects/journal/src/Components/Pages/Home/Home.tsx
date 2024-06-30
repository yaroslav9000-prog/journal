import { Dispatch, SetStateAction } from "react";
import { PostClass } from "../../../Models/Post";
import "./Home.css";
import { Link, NavLink } from "react-router-dom";

type Props = {
    posts: PostClass[];
    deletePost: (num: number)=>void;
}

function Home({posts, deletePost}:Props): JSX.Element {
    
    return (
        <div className="Home">
			{posts.map((item:PostClass)=>(
                <div key={item.id}>
                <NavLink style={{color:"black"}} to={`/post/${item.id}`}><h3>{item.title}</h3></NavLink>
                <h4>{item.date}</h4>
                <p className="halfPost">{item.body.length > 30? `${item.body.slice(0, 31)}. . . .`: `${item.body}`}</p>
                <button style={{backgroundColor:"red"}} onClick={()=>deletePost(item.id)}>delete</button>
                <hr />
                </div>
            ))}
        </div>
    );
}

export default Home;
