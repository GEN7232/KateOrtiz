import React from "react";
import ReactPlayer from "react-player";

const Commissions = () => {
  return (
    <div id="commissions-container">
      <br></br>
      <br></br>
      <h1>Commissions</h1>
      <div className="podcasts">
        <h2>Podcasts</h2>
        <br></br>
        <p>
          Kate Ortiz wrote and performed the instruments for the following
          podcast intros/outros
        </p>
        <div className="player-wrapper">
          <ReactPlayer
            url="https://soundcloud.com/user-534750572/band-battles-intro?si=9ec94c1c94f8478fa0e4e5768de041fb&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
            className="react-player1"
          />
          <ReactPlayer
            url="https://soundcloud.com/user-534750572/band-battles-outro-with-vo?si=ca225b9d25414de4a3a49c6a87f52e9e&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
            className="react-player2"

          />          

          <ReactPlayer
            url="https://www.youtube.com/watch?v=qNQ8K21sstE"
            className="react-player3"

          />
        </div>
      </div>
      <hr></hr>
      <div className="video-commissions">
        <div className="video-desc">
          <h2>Video Background</h2>
          <br></br>
          <p>Kate wrote the backing music for the following video.</p>
        </div>
        <div className="player-wrapper">
          <ReactPlayer
            url="https://www.youtube.com/watch?v=V3yGhIc0y2c"
            className="react-player4"
          />
        </div>
      </div>
    </div>
  );
};

export default Commissions;
