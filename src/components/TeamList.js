import Team from "./Team";
import { useState, useEffect } from "react";
import NavBar from "./NavBar";

function TeamList(){
const [teams, setTeams] = useState([]);

useEffect(() => {
    fetch("http://localhost:3000/teams")
    .then(r => r.json())
    .then(data => setTeams(data))
    .catch(error => console.log(error))
}, [])

    return(
        <>
            <NavBar />
            {teams.map((team) => <Team key={team.id} team={team}/>)}
        </>
    );
}

export default TeamList;