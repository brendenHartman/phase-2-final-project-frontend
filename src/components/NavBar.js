import { NavLink } from "react-router-dom";


function NavBar(){
    return(
        <div className="navBar">
            <NavLink className="nav-link" to="/">Home</NavLink>
            <NavLink className="nav-link" to="/myTeam"> My Team</NavLink>
            <NavLink className="nav-link" to="/teams">Teams</NavLink>
        </div>
    );
}

export default NavBar;