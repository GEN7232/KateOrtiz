import React from "react";
import ReactPlayer from "react-player";

const Videos = () => {
  return (
    <div id="videos-container">
      <header>
        <h1 id="videos-h1">Videos of Kate's Music</h1>
        <p>
          Subscribe to her{" "}
          <a href="https://www.youtube.com/channel/UCBZIeGh0Am7WLYvNBfbK0Nw">
            Youtube Channel
          </a>
        </p>
      </header>
        <div>
          <div className="videos">
            <div className="videos-flex">
              <div className="player-wrapper">
                <h2>"Just Like Poison" Lyric Video</h2>
                <ReactPlayer
                  className="react-player-poison"
                  url="https://www.youtube.com/watch?v=XlJEfVw0Ypc"
                  height="50%"
                  width="50%"
                />
              </div>
              <div className="poison-video">
                <p>
                  Vibey lyric video for "Just Like Poison"
                </p>
              </div>
            </div>    
            <hr></hr>        
            <div className="videos-flex">
              <div className="player-wrapper">
                <h2>"Just Like Poison" Live</h2>
                <ReactPlayer
                  className="react-player-poison"
                  url="https://www.youtube.com/watch?v=eVgK0L1-dr0"
                  height="50%"
                  width="50%"
                />
              </div>
              <div className="poison-video">
                <p>
                  Live performance video of "Just Like Poison" recorded at
                  Lakehouse Recording Studios as part of their Lakehouse Live
                  series. Featuring Genevieve Nelson on bass and Maria Ruiz on
                  drums.
                </p>
              </div>
            </div>
<hr></hr>
            <div class="videos-flex">
              <div className="player-wrapper">
                <h2>"Shine" Live</h2>
                <ReactPlayer
                  className="react-player-shine"
                  url="https://www.youtube.com/watch?v=LPZT373hIKc"
                  height="50%"
                  width="50%"
                />
              </div>
              <div className="shine-video">
                <p>
                  Live performance video of "Shine" recorded at Lakehouse
                  Recording Studios as part of their Lakehouse Live series.
                  Featuring Genevieve Nelson on bass and Maria Ruiz on drums.
                </p>
              </div>
            </div>
            <hr></hr>
            <div className="videos-flex">
              <div className="player-wrapper">
                <h2>"Apologize" Live</h2>
                <ReactPlayer
                  className="react-player-apologize"
                  url="https://www.youtube.com/watch?v=Z2fV8bj53C8"
                  height="50%"
                  width="50%"
                />
              </div>
              <div className="apologize-video">
                <p>
                  Live performance video recorded at Lakehouse Recording
                  Studios. Featuring Genevieve Nelson on bass, Rob Tanico on
                  guitar and background vocals, and K Kiatpreecha on drums.
                </p>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
};

export default Videos;
