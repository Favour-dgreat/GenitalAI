import { Link } from "react-router-dom";
import MobileMenu from "./MobileMenu";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Sidebar = ({ isActive, setIsActive }: any) => {

    return (
        <div className={` ${isActive ? "mobile-menu-visible" : ""}`}>
            <div className="mobile-menu">
                <nav className="menu-box">
                    <div onClick={() => setIsActive(false)} className="close-btn"><i className="fas fa-times"></i></div>
                    <div className="nav-logo">
                        <Link to="/"><img src="/assets/img/images/logo.png" alt="Logo" /></Link>
                    </div>
                    <div className="menu-outer">
                        <MobileMenu setIsActive={setIsActive} />
                    </div>
                    <div className="social-links">
                        <ul className="clearfix list-wrap">
                            <li><a href="https://t.me/gentialaiportal"><i className="fab fa-telegram"></i></a></li>
                            <li><a href="https://twitter.com/GentialAiERC"><i className="fab fa-twitter"></i></a></li>
                            <li><a href="#"><i> <img src="./assets/img/images/dextools-logo.png" alt="" /> </i></a></li>
                        </ul>
                    </div>
                </nav>
            </div>
            <div onClick={() => setIsActive(false)} className="menu-backdrop"></div>
        </div>
    )
}

export default Sidebar