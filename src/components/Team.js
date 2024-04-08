

function Team({team}){
    return(
    <>
        <h1>{team.name}</h1>
        <h3>Location: {team.location}</h3>
        <h3>Conference: {team.conference}</h3>
    </>
    );
}

export default Team;