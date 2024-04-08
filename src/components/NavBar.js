import { NavLink } from "react-router-dom";


function NavBar(){
    return(
        <>
            <NavLink className="nav-link" to="/">Home</NavLink>
            <NavLink className="nav-link" to="/teams">Teams</NavLink>
            <NavLink className="nav-link" to="/myTeam"> My Team</NavLink>
        </>
    );
}

export default NavBar;