import NavBar from "./NavBar";

function Home(){
    return(
        <div className="home">
            <NavBar />
            <h2>Welcome to my MLS fan REACT app</h2>
            <p>The App is very simple you can click on the 'Teams' navigation to view all teams in the league currently!!</p>
            <p>You can also add your own passion to the MLS league by chosing the 'MYTEAM' navigation!!</p>
            <p>Here you can fill out the information for your own team and post it to the teams page!!</p>
            <h2>Have Fun!</h2>
        </div>
    );
}

export default Home;
