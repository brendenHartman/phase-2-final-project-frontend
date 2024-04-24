import NavBar from "./NavBar";
import Team from "./Team";
import { useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";

function MyTeam(){
    const navigate = useNavigate();
    const {handleSetTeams}  = useOutletContext();
    const [teamId, setId] = useState(30)
    const[myTeam, setMyTeam] = useState({
        id: teamId.toString(),
        name: "",
        location: "",
        conference: "East/West"
    });
    function handleNameChange(event){
        setMyTeam({...myTeam, name: event.target.value})
    }

    function handleLocationChange(event){
        setMyTeam({...myTeam, location: event.target.value})
    }

    function handleConferenceChange(event){
        setMyTeam({...myTeam, conference: event.target.value})
    }

    function handleCreateTeam(event){
        navigate("/successMessage")
        event.preventDefault();
        fetch("http://localhost:3000/teams", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(myTeam)
        })
        .then(r => r.json())
        .then(data => {
            handleSetTeams(myTeam);
            setId(teamId + 1);
        });
    }
    return(
    <div className="myTeam">
        <NavBar /> 
        <h1>Create Your Own Team!</h1>
        <form onSubmit={handleCreateTeam}>
            <input type="text" onChange={handleNameChange} value={myTeam.name}/>
            <input type="text" onChange={handleLocationChange} value={myTeam.location}/>
            <h4>East conference, or West conference?</h4>
            <div className="radios">
                <label htmlFor="East">East</label>
                <input id="East" type="radio" value="East" name="conB" onClick={handleConferenceChange}/>
                <label htmlFor="West">West</label>
                <input id="West" type="radio" value="West" name="conB" onClick={handleConferenceChange}/>
            </div>
            <input type="submit" value="Create Team"/>
        </form>
        {<Team key="30" team={myTeam}/>}
    </div>
    );
}


export default MyTeam;