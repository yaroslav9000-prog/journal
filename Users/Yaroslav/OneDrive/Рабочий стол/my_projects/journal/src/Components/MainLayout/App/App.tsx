import { useState } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import "./App.css";
import { PostClass } from "../../../Models/Post";
import Main from "../Main/Main";



function App(): JSX.Element {
    const [posts, setPosts] = useState<PostClass[]>([
        new PostClass(1, "Stolen chocolate",`
                I hate chocolate. Always hated it. When people asked me why I explained that for me it’s like eating slugs. The chocolate just gets slimey in your mouth. Slimey sugar.
    But then I moved to Japan. Chocolate here is so much tastier. I love it. I became a big chocolate lover 🥹 🍫
            `, "22-6-2024 15:30:20"),
            new PostClass(2, "A lot of shirts", "It can get expensive being a Nets fan", "22-6-2024 12:15:12"),
            new PostClass(3, "NBA stuff", "DRAFTEES ARRIVE FOR NIGHT ONE!", "21-06-2024 07:45:00"),
            new PostClass(4,"Breaking bad", "See you later Albuquerque! I’ll be in you again someday soon 🤙 50r", "27-06-2024 20:30:33")
        ]);
    return (
        <div className="App">
			<header>
                <Header/>
            </header>
            <body>  
                <Main posts={posts} setPosts={setPosts}/>
            </body>
            <footer>
                <Footer/>
            </footer>
        </div>
    );
}

export default App;
