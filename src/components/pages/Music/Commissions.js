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
          podcast intros/outros
        </h4>
        <div className="player-wrapper">
          {/* <h2>Band Battles Intro Music</h2>
                <br></br> */}
          <ReactPlayer
            url="https://soundcloud.com/user-534750572/band-battles-intro?si=9ec94c1c94f8478fa0e4e5768de041fb&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
            className="react-player1"
            // width="100%"
            // height="100%"
          />
          <ReactPlayer
            url="https://soundcloud.com/user-534750572/band-battles-outro-with-vo?si=ca225b9d25414de4a3a49c6a87f52e9e&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
            className="react-player2"
            // width="100%"
            // height="100%"
          />          
          {/* <br></br>
                <br></br>
                <br></br>
                <h2>Kreskin's Amazing Experience Intro music</h2>
                <br></br> */}
          <ReactPlayer
            url="https://www.youtube.com/watch?v=qNQ8K21sstE"
            className="react-player3"
            // width="100%"
            // height="100%"
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
            className="react-player4"
            // width="100%"
            // height="100%"
          />
        </div>
      </div>
    </div>
  );
};

export default Commissions;
