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
    
    
    useEffect(()=>{
        console.log("pp");
        console.log(posts)
    },[])
    return (
        <div className="Home">        
            {posts.map((item:PostClass, index)=>( <PostBody key={index} item={item} deletePost={deletePost}/>))}
            
        </div>
        
    );
}

export default Home;
