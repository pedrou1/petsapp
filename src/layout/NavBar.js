import { Link } from "react-router-dom";
import "../bootstrap.min.css";
import style from "./Navbar.module.css";

const NavBar = () => {
    return ( 
<header className={style.header}>
<nav className="navbar navbar-dark navbar-expand-md fixed-top bg-dark">
    <div className="container-fluid"><a className="navbar-brand" href="#">PETS</a><button data-toggle="collapse" className="navbar-toggler" data-target="#navcol-1"><span className="sr-only">Toggle navigation</span><span className="navbar-toggler-icon"></span></button>
        <div className="collapse navbar-collapse" id="navcol-1">
            <ul className="nav navbar-nav text-right text-white ml-auto">
            <li className="nav-item" role="presentation"><Link to="/">Pets</Link></li>
                <Link to="/manage-pets">New Pet</Link>
            </ul>
        </div>
    </div>
</nav>
</header>

     );
}
 
export default NavBar;









