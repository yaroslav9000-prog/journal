import Nav from "../Nav/Nav";
import "./Hub.css";

function Hub(): JSX.Element {
    return (
        <div className="Hub">
			<input type="text" placeholder="Look for post"/>
            <ul >
                <Nav name={"Home"}/>
                <Nav name={"Post"}/>
                <Nav name={"About"}/>
            </ul>
        </div>
    );
}

export default Hub;
