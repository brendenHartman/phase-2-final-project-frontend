

function Team({team, handleRemove}){

    return(
    <>
        <h1>{team.name}</h1>
        <h3>Location: {team.location}</h3>
        <h3>Conference: {team.conference}</h3>
        <input id={team.id} type="button" value="Remove" onClick={handleRemove}/>
    </>
    );
}

export default Team;