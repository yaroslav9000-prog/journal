import AddBook from "../../Pages/addBook/addBook";
import Authors from "../../Pages/Authors/Authors";
import Books from "../../Pages/Books/Books";
import Home from "../../Pages/Home/Home";
import "./MainRouter.css";
import { Router, Routes, Route} from "react-router-dom";
function MainRouter(): JSX.Element {
    return (
        <div className="MainRouter">
			<Routes>
                <Route index path="/" element={<Home/>}/>
                <Route path="/authors" element={<Authors/>}/>
                <Route path="/books" element={<Books/>}/>
                <Route path="/books/add" element={<AddBook/>}/>
            </Routes>
        </div>
    );
}

export default MainRouter;
