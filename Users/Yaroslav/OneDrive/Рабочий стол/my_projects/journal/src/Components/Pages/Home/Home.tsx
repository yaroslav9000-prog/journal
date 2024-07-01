import { Dispatch, SetStateAction, useEffect} from "react";
import { PostClass } from "../../../Models/Post";
import "./Home.css";
import { Link, NavLink } from "react-router-dom";
import PostBody from "../../MainLayout/PostBody/PostBody";
type Props = {
    posts: PostClass[];
    deletePost: (num: number)=>void;

}

function Home({posts, deletePost}:Props): JSX.Element {
    
    

    return (
        <div className="Home">        
            {posts.map((item:PostClass)=>( <PostBody item={item} deletePost={deletePost}/>))}
            
        </div>
        
    );
}

export default Home;
