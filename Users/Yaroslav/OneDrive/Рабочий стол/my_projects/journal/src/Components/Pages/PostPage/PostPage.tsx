import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { PostClass } from "../../../Models/Post";
import "./PostPage.css";
import { Link, useParams } from "react-router-dom";

type Props = {
    posts: PostClass[];
    deletePost: (num: number)=>void;
}
function PostPage({posts, deletePost}: Props): JSX.Element {
    const {id} = useParams();
    const myPost = posts.filter((item:PostClass)=>item.id.toString() == id)
    const [text, setText] = useState();
    const handleEdit = async (id: number)=>{
        
    }
    
    return (
        <div className="PostPage">
            
                <div key={myPost[0].id}>
                <h3>{myPost[0].title}</h3>
                <h4>{myPost[0].date}</h4>
                <p>{`${myPost[0].body}`}</p>
                <Link to="/home">
                <button style={{backgroundColor:"red"}} onClick={()=>deletePost(myPost[0].id)}>delete</button>
                </Link>
                <button style={{backgroundColor:"blue"}} >edit</button>
                <hr />
                </div>
            
        </div>
    );
}

export default PostPage;
