import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ReactPlayer from "react-player";

const Videos = () => {
  return (
    <div>
      <header>
        <h1 id="videos-h1">Videos of Kate's Music</h1>
        <h4 id="h4">
          Subscribe to her{" "}
          <a href="https://www.youtube.com/channel/UCBZIeGh0Am7WLYvNBfbK0Nw">
            Youtube Channel
          </a>
        </h4>
      </header>
      <Container>
        <Row>
          <div className="videos">
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

            {/* <div className="videos-flex">
              <br></br>
              <div className="player-wrapper">
                <h2>"Here at Last" Music Video</h2>
                <ReactPlayer
                  className="react-player-here"
                  url="https://www.youtube.com/watch?v=ceSz-IH-mR8"
                  height="50%"
                  width="50%"
                />
              </div>
              <div className="here-at-last-video">
                <p>
                  Music Video by TG Gainey Productions as part of his
                  Picks-A-Lation Creation Series
                </p>
              </div>
            </div> */}
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default Videos;
