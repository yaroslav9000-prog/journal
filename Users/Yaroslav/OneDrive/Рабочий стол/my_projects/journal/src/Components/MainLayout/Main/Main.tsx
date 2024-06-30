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
import { Dispatch, SetStateAction } from "react";

type Props = {
    posts:  PostClass[],
    setPosts: Dispatch<SetStateAction<PostClass[]>>,
}

function Main({posts, setPosts}: Props): JSX.Element {
    return (
        <div className="Main">
            <Hub/>
            <Switch posts={posts} setPosts={setPosts}/>
        </div>
    );
}

export default Main;
