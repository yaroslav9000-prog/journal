import { Link } from "react-router-dom";
import "./Header.css";


function Header(): JSX.Element {
    
        
    
    
    return (
        <div className="Header">
			<Link to="/home">
                <h1>My journal</h1>
            </Link>
        </div>
    );
}

export default Header;
