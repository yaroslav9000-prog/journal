import { NavLink } from "react-router-dom";
import "./SideMenu.css";

function SideMenu(): JSX.Element {
    return (
        <div className="SideMenu">
			<ul>
                <li><NavLink  to="/">Home</NavLink></li>
                <li><NavLink to="/authors">Authors</NavLink></li>
                <li><NavLink to="/books">Books</NavLink></li>
                <li><NavLink to="/books/add">Add new book</NavLink></li>
                
            </ul>
        </div>
    );
}

export default SideMenu;
