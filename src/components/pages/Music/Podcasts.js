import React from "react";
import ReactPlayer from "react-player";


const Podcasts = () => {
    return (
        <div className="podcasts">
            <h1>Podcasts</h1>
            <br></br>
            <h4>Kate Ortiz wrote and performed the instruments for the following podcast introductions</h4>
            <div className='player-wrapper'>
                {/* <h2>Band Battles Intro Music</h2>
                <br></br> */}
                <ReactPlayer url="https://soundcloud.com/user-489550250/band-battles-episode-4-michael-jackson-v-prince"       className="react-player1" width="50%" height="50%"/>
                {/* <br></br>
                <br></br>
                <br></br>
                <h2>Kreskin's Amazing Experience Intro music</h2>
                <br></br> */}
                <ReactPlayer url="https://www.youtube.com/watch?v=qNQ8K21sstE" className="react-player2" width="50%" height="50%"/>
            </div>
        </div>
    );
};

export default Podcasts;