import { Dispatch, SetStateAction, useEffect } from "react";
import { PostClass } from "../../../Models/Post";
import "./PostPage.css";
import { useParams } from "react-router-dom";

type Props = {
    posts: PostClass[];
    deletePost: (num: number)=>void;
}
function PostPage({posts, deletePost}: Props): JSX.Element {
    const {id} = useParams();
    const myPost = posts.filter((item:PostClass)=>item.id.toString() == id)
    
    return (
        <div className="PostPage">
            
                <div key={myPost[0].id}>
                <h3>{myPost[0].title}</h3>
                <h4>{myPost[0].date}</h4>
                <p>{`${myPost[0].body}`}</p>
                <button style={{backgroundColor:"red"}} onClick={()=>deletePost(myPost[0].id)}>delete</button>
                <hr />
                </div>
            
        </div>
    );
}

export default PostPage;
