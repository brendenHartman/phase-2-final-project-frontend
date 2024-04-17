

function Team({team, handleRemove}){

    return(
    <div className="teamCard">
        <h1 className="teamHeader">{team.name}</h1>
        <h3>Location: {team.location}</h3>
        <h3>Conference: {team.conference}</h3>
        <input id={team.id} type="button" value="Remove" onClick={handleRemove}/>
    </div>
    );
}

export default Team;