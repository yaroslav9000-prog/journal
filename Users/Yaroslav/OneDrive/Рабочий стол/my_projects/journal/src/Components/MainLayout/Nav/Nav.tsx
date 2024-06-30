import { NavLink } from "react-router-dom";
import "./Nav.css";

type Props = {
    name: string;
}

function Nav({name }: Props): JSX.Element {
    let lowerName = name.toLowerCase();
    
    return (
        <nav className="Nav">
            <NavLink style={{color:"aliceblue"}} to={`/${lowerName}`}>{lowerName}</NavLink>
        </nav>
    );
}

export default Nav;
