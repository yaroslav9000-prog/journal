import { Routes , Route} from "react-router-dom";
import "./Switch.css";
import App from "../App/App";
import Home from "../../Pages/Home/Home";
import Post from "../../Pages/Post/Post";
import About from "../../Pages/About/About";
import { PostClass } from "../../../Models/Post";
import { Dispatch, SetStateAction } from "react";
import NotFound from "../../Pages/NotFound/NotFound";
import PostPage from "../../Pages/PostPage/PostPage";

type Props = {
    posts: PostClass[],
    setPosts: Dispatch<SetStateAction<PostClass[]>>,
    deletePost: (num:number)=> void,
    searchResult: PostClass[]
}

function Switch({posts, setPosts, deletePost, searchResult}: Props): JSX.Element {
    
    return (
        <div className="Switch">
			<Routes>
                <Route path="/home" element={<Home posts={searchResult} deletePost={deletePost}/>}/>
                <Route path="/" element={<Home posts={searchResult} deletePost={deletePost}/>}/>
                <Route path="/post" element={<Post posts={posts} setPosts={setPosts}/>}/>
                <Route path="/post/:id" element={<PostPage posts={posts} deletePost={deletePost}/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="*" element={<NotFound/>}/>
            </Routes>
        </div>
    );
}

export default Switch;
