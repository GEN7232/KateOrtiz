import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ReactPlayer from "react-player";

const Mini = () => {
    return (
        <div>
            <br></br>
            <h1>Mini Songs</h1>
            <br></br>
            <h4 className="mini-title">Short loop based songs pefect for the backing track to your video or other creative project!</h4>
            <Container>
                <Row>
                    <Col>
                    <br></br>
                    <br></br>
                    <div>
                        <h2>"Galactic Shimmer"</h2>
                        <br></br>
                        <div className="player-wrapper">
                            <ReactPlayer className="react-player-mini" url="https://soundcloud.com/user-534750572/galactic-shimmer?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" height="100%" width="100%"/>
                        </div>
                    </div>
                    <br></br>
                    <br></br>
                    <div>
                        <h2>"Final Boss"</h2>
                        <br></br>
                        <div className="player-wrapper">
                            <ReactPlayer className="react-player-mini" url="https://soundcloud.com/user-534750572/final-boss?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" height="100%" width="100%"/>
                        </div>
                    </div>
                    <br></br>
                    <br></br>
                    <div>
                        <h2>"Dramatic Orchestra"</h2>
                        <br></br>
                        <div className="player-wrapper">
                            <ReactPlayer className="react-player-mini" url="https://soundcloud.com/user-534750572/dramatic-orchestra" height="100%" width="100%"/>
                        </div>
                    </div>
                    <br></br>
                    <br></br>
                    <div>
                        <h2>"Innovation"</h2>
                        <br></br>
                        <div className="player-wrapper">
                            <ReactPlayer className="react-player-mini" url="https://soundcloud.com/user-534750572/innovation" height="100%" width="100%"/>
                        </div>
                    </div>
                    <br></br>
                    <br></br>
                    <div>
                        <h2>"Jungle Fun"</h2>
                        <br></br>
                        <div className="player-wrapper">
                            <ReactPlayer className="react-player-mini" url="https://soundcloud.com/user-534750572/jungle-fun" height="100%" width="100%"/>
                        </div>
                    </div>
                    <br></br>
                    <br></br>
                    <div>
                        <h2>"Viking Battle"</h2>
                        <br></br>
                        <div className="player-wrapper">
                            <ReactPlayer className="react-player-mini" url="https://soundcloud.com/user-534750572/viking-battle" height="100%" width="100%"/>
                        </div>
                    </div>
                    </Col>
                    <Col>
                        <div className="mini-descriptions">
                            <h4 className="mini-text">A sparkly synth meets a grooving bass and drum beat for cool, but also kind of weird vibes.</h4>
                        </div>
                        <div className="mini-descriptions2">
                            <h4 className="mini-text">A driving bass with hard rock drums meet an out of this world synth lead.</h4>
                        </div>
                        <br></br>
                        <div className="mini-descriptions2">
                            <h4 className="mini-text">A lush and emotional piece featuring strings.</h4>
                        </div>
                        <br></br>
                        <div className="mini-descriptions2">
                            <h4 className="mini-text">A synthy kick-clap song with some dreamy pads.</h4>
                        </div>
                        <div className="mini-descriptions2">
                            <h4 className="mini-text">A bouncy tune featuring marimba and as well as unpitched percussion.</h4>
                        </div>
                        <div className="mini-descriptions2">
                            <h4 className="mini-text">An epic combination of today's synth sounds and music of the past.</h4>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Mini;