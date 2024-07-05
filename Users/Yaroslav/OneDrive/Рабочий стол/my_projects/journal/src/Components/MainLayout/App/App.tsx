import { useEffect, useState} from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import "./App.css";
import { PostClass } from "../../../Models/Post";
import Main from "../Main/Main";
import api from "../../../api/posts";
import { format } from "date-fns";



function App(): JSX.Element {
    const [posts, setPosts] = useState<PostClass[]>([]);
        // server activation command for axios server
        // npx json-server -p 4200 -w data/db.json
        useEffect(()=>{
            const fetchPosts = async ()=>{
                try{
                    const response = await api.get("/posts");
                    const postClassArray = response.data.map((item: PostClass)=>(
                        new PostClass(item.id, item.title, item.body, item.date)
                    ))
                    
                    setPosts([...postClassArray]);
                    console.log(posts);
                }catch(err: any){
                    if(err.response){
                    console.log(err.response.data);
                    console.log(err.response.status);
                    console.log(err.response.headers);
                    }else{
                        console.log(`Error message: ${err.message}`);
                    }
                }
            }
            fetchPosts();
        },[])



    const deletePost = async (value:number)=>{
            try{
            await api.delete(`/posts/${value}`)
            const newArray = posts.filter((item:PostClass)=>(item.id != value))
            setPosts(newArray);
            }catch(err:any){
                if(err.response){
                    console.log(err.response.data);
                    console.log(err.response.status);
                    console.log(err.response.headers);
                }else{
                    console.log(`Error message: ${err.message} ${format(new Date, "HH:mm:ss")}`);
                }
            }
        };

        
    return (
        <div className="App">
			<header>
                <Header/>
            </header>
            <body>  
                <Main posts={posts} deletePost={deletePost} setPosts={setPosts}/>
            </body>
            <footer>
                <Footer/>
            </footer>
        </div>
    );
}

export default App;
