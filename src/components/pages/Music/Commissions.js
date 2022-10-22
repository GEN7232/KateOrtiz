import React from "react";
import ReactPlayer from "react-player";

const Commissions = () => {
  return (
    <div>
      <br></br>
      <br></br>
      <h1>Commissions</h1>
      <div className="podcasts">
        <h3>Podcasts</h3>
        <br></br>
        <h4>
          Kate Ortiz wrote and performed the instruments for the following
          podcast introductions
        </h4>
        <div className="player-wrapper">
          {/* <h2>Band Battles Intro Music</h2>
                <br></br> */}
          <ReactPlayer
            url="https://soundcloud.com/user-489550250/band-battles-episode-4-michael-jackson-v-prince"
            className="react-player1"
            width="50%"
            height="50%"
          />
          {/* <br></br>
                <br></br>
                <br></br>
                <h2>Kreskin's Amazing Experience Intro music</h2>
                <br></br> */}
          <ReactPlayer
            url="https://www.youtube.com/watch?v=qNQ8K21sstE"
            className="react-player2"
            width="50%"
            height="50%"
          />
        </div>
      </div>
      <div className="video-commissions">
        <div className="video-desc">
          <h3>Video Background</h3>
          <br></br>
          <h4>Kate wrote the backing music for the following video.</h4>
        </div>
        <div className="player-wrapper">
          <ReactPlayer
            url="https://www.youtube.com/watch?v=V3yGhIc0y2c"
            className="react-player3"
            width="50%"
            height="50%"
          />
        </div>
      </div>
    </div>
  );
};

export default Commissions;
