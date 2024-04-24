import { Outlet } from "react-router-dom";
import { useState, useEffect } from 'react'

function App(){
    const [teams, setTeams] = useState([]);

    useEffect(() => {
       fetch("http://localhost:3000/teams")
       .then(r => r.json())
       .then(data => setTeams(data))
       .catch(error => console.log(error))
    }, [])

    function handleSetTeams(myTeam){
        setTeams([...teams, myTeam])
    }

    function handleRemoveTeam(teamID){
        setTeams(teams.filter(team => team.id != teamID))
    }

    const context = {handleSetTeams, handleRemoveTeam, teams};
    return(
        <>
            <Outlet context={context}/>
        </>
    )
}

export default App;