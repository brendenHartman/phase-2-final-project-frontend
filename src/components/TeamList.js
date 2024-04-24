import Team from "./Team";
import NavBar from "./NavBar";
import { useOutletContext } from "react-router-dom";

function TeamList(){

const {teams, handleRemoveTeam} = useOutletContext();

function handleRemove(event){
    const teamID = event.target.id;
    fetch(`http://localhost:3000/teams/${teamID}`, {
        method: "DELETE",
    })
    .then((r) => r.json())
    .then((data) => {
        handleRemoveTeam(teamID)
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