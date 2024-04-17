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

function handleRemove(event){
    const teamID = event.target.id;
    fetch(`http://localhost:3000/teams/${teamID}`, {
        method: "DELETE",
    })
    .then((r) => r.json())
    .then((data) => {
        setTeams(teams.filter(team => team.id != teamID))
        console.log(data)
    })
}

    return(
        <div>
            <NavBar />
            <div className="teamList">
                {teams.map((team) => <Team key={team.id} team={team} handleRemove={handleRemove}/>)}
            </div>
        </div>
    );
}

export default TeamList;