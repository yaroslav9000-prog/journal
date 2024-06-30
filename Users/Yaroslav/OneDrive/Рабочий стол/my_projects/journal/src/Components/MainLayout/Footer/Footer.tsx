import "./Footer.css";
import { compareAsc, format } from "date-fns";


function Footer(): JSX.Element {
    const date = format(new Date(), 'dd-MM-yyyy hh:MM:ss');
    return (
        <div className="Footer">
			<h3>Copyright &#169; {date}</h3>
        </div>
    );
}

export default Footer;
