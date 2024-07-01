import { Route, Routes } from "react-router-dom";
import "./Main.css";
import App from "../App/App";
import Home from "../../Pages/Home/Home";
import About from "../../Pages/About/About";
import Nav from "../Nav/Nav";
import Post from "../../Pages/Post/Post";
import Hub from "../Hub/Hub";
import Switch from "../Switch/Switch";
import { PostClass } from "../../../Models/Post";
import { Dispatch, SetStateAction, useContext, useState, createContext, useEffect } from "react";


type Props = {
    posts:  PostClass[],
    setPosts: Dispatch<SetStateAction<PostClass[]>>,
    deletePost: (num: number)=>void;

}

function Main({posts, setPosts, deletePost}: Props): JSX.Element {
    const [search, setSearch] = useState("");
    const [searchResult, setSearchResult] = useState<PostClass[]>([]);
    useEffect(()=>{
        console.log(search);
        const filteredSearch  = posts.filter((item:PostClass)=>(((item.body).toLowerCase()).includes(search.toLowerCase())
        ||  (item.title).toLowerCase().includes(search.toLowerCase())))
    
    setSearchResult(filteredSearch.reverse());
    console.log(filteredSearch);
},[search])
    return (
        <div className="Main">
            <Hub search={search} setSearch={setSearch}/>
            <Switch posts={posts} searchResult={searchResult} deletePost={deletePost} setPosts={setPosts}/>
        </div>
    );
}

export default Main;
