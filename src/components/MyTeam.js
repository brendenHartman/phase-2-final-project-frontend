import NavBar from "./NavBar";
import Team from "./Team";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function MyTeam(){
    const navigate = useNavigate();

    const [teamId, setId] = useState(30)
    const[myTeam, setMyTeam] = useState({
        name: "My Team",
        location: "Plz Enter A Location",
        conference: "East/West"
    });
     console.log(myTeam)
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
            setId(teamId + 1)
            console.log(data)
        });
    }
    return(
    <>
        <NavBar /> 
        <h1>Create Your Own Team!</h1>
        <form onSubmit={handleCreateTeam}>
            <input type="text" placeholder="enter a team name..." onChange={handleNameChange}/>
            <input type="text" placeholder="enter your teams location..." onChange={handleLocationChange}/>
            <h4>East conference, or West conference?</h4>
            <label for="East">East</label>
            <input id="East" type="radio" value="East" name="conB" onClick={handleConferenceChange}/>
            <label for="West">West</label>
            <input id="West" type="radio" value="West" name="conB" onClick={handleConferenceChange}/>
            <input type="submit" value="Create Team"/>
        </form>
        {<Team key="30" team={myTeam}/>}
    </>
    );
}


export default MyTeam;