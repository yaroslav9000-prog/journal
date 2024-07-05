import "./MainLayOut.css";
import Header from "../Header/Header";
import MainRouter from "../MainRouter/MainRouter";
import SideMenu from "../SideMenu/SideMenu";
import Footer from "../Footer/Footer";
function MainLayOut(): JSX.Element {
    return (
        <div className="MainLayOut">
			<header>
                <Header/>
            </header>
            <aside>
                <SideMenu/>
            </aside>
            <main>
                <MainRouter/>
            </main>
            <footer>
               <Footer/> 
            </footer>
        </div>
    );
}

export default MainLayOut;
