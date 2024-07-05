import { Dispatch, SetStateAction, useEffect, useState } from "react";
import "./Post.css";
import { PostClass } from "../../../Models/Post";
//import { format } from "util";
import { compareAsc, format } from "date-fns";
import api from "../../../api/posts";
type Props = {
    posts: PostClass[];
    setPosts:  Dispatch<SetStateAction<PostClass[]>>;
} 


function Post({posts, setPosts}: Props): JSX.Element {

    const [title, setTitle] = useState<string>("");
    const [body, setBody] = useState<string>("");

    

    const updateTitle = (data:any)=>{
        setTitle(data);
    }
    const updateBody = (data:any)=>{
        setBody(data);
    }
    const updateList = async (title: string, body: string, e:any) =>{
        e.preventDefault();
        try{
            const currentDate = format(new Date(), "dd-MM-yyyy hh:MM:ss");
            const currentId = +posts[posts.length -1].id + 1;
            const newItem = new PostClass(currentId, title, body, currentDate);
            await api.post("posts",newItem);
            setPosts([...posts, newItem]);
        }catch(err:any){
            console.log(err.response.data);
            console.log(err.response.status);
            console.log(err.response.headers);
        }
    }
    
    return (
        <form style={{width:"20em"}} action="">
            <h1>New Post</h1>
            <label htmlFor="Title">Title:</label><br />
            <input type="text" id="Title" onChange={(e)=>updateTitle(e.target.value)}/><br />
            <label htmlFor="Post">Post:</label><br />
            <textarea onChange={(e)=>updateBody(e.target.value)}></textarea><br />
            <button onClick={(e)=>updateList(title, body, e)}>Submit</button>
        </form>
    );
}

export default Post;
