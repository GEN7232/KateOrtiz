import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ReactPlayer from "react-player";

const Mini = () => {
  return (
    <div id="mini-songs-container">
      <br></br>
      <h1>Mini Songs</h1>
      <br></br>
      <p className="mini-title">
        Short loop based songs pefect for the backing track to your video or
        other creative project!
      </p>
      <Container>
        <Row>
          <Col>
            <br></br>
            <div>
              <h2>"Galactic Shimmer"</h2>
              <br></br>
              <p className="mini-text">
                A sparkly synth meets a grooving bass and drum beat for cool,
                but also kind of weird vibes.
              </p>
              <br></br>
              <div className="player-wrapper">
                <ReactPlayer
                  className="react-player-mini"
                  url="https://soundcloud.com/user-534750572/galactic-shimmer?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
                  height="100%"
                  width="100%"
                />
              </div>
            </div>
            <hr></hr>
            <div>
              <h2>"Final Boss"</h2>
              <br></br>
              <p className="mini-text">
                A driving bass with hard rock drums meet an out of this world
                synth lead.
              </p>
              <br></br>
              <div className="player-wrapper">
                <ReactPlayer
                  className="react-player-mini"
                  url="https://soundcloud.com/user-534750572/final-boss?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
                  height="100%"
                  width="100%"
                />
              </div>
            </div>
<hr></hr>
            <div>
              <h2>"Dramatic Orchestra"</h2>
              <br></br>
              <p className="mini-text">
                A lush and emotional piece featuring strings.
              </p>
              <br></br>
              <div className="player-wrapper">
                <ReactPlayer
                  className="react-player-mini"
                  url="https://soundcloud.com/user-534750572/dramatic-orchestra"
                  height="100%"
                  width="100%"
                />
              </div>
            </div>
<hr></hr>
            <div>
              <h2>"Innovation"</h2>
              <br></br>
              <p className="mini-text">
                A synthy kick-clap song with some dreamy pads.
              </p>
              <br></br>
              <div className="player-wrapper">
                <ReactPlayer
                  className="react-player-mini"
                  url="https://soundcloud.com/user-534750572/innovation"
                  height="100%"
                  width="100%"
                />
              </div>
            </div>
            <hr></hr>
            <div>
              <h2>"Jungle Fun"</h2>
              <br></br>
              <p className="mini-text">
                A bouncy tune featuring marimba and as well as unpitched
                percussion.
              </p>
              <br></br>
              <div className="player-wrapper">
                <ReactPlayer
                  className="react-player-mini"
                  url="https://soundcloud.com/user-534750572/jungle-fun"
                  height="100%"
                  width="100%"
                />
              </div>
            </div>
            <hr></hr> 
            <div>
              <h2>"Viking Battle"</h2>
              <br></br>
              <p className="mini-text">
                An epic combination of today's synth sounds and music of the
                past.
              </p>
              <br></br>
              <div className="player-wrapper">
                <ReactPlayer
                  className="react-player-mini"
                  url="https://soundcloud.com/user-534750572/viking-battle"
                  height="100%"
                  width="100%"
                />
              </div>
            </div>
          </Col>

        </Row>
      </Container>
    </div>
  );
};

export default Mini;
