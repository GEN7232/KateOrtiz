import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ReactPlayer from "react-player";

const Videos = () => {
    return (
        <div>
            <header>
                <h1>Videos of Kate's Music</h1>
                <h4>Subscribe to her <a href="https://www.youtube.com/channel/UCBZIeGh0Am7WLYvNBfbK0Nw">
                    Youtube Channel</a></h4>
            </header>
            <Container className="desktop">
                <Row>
                <Col xs={6} className="video-div">
                    <div className="videos">
                        <h2>"Apologize" Live</h2>
                        <br></br>
                        <div className="player-wrapper">
                            <ReactPlayer className="react-player-apologize" url="https://www.youtube.com/watch?v=Z2fV8bj53C8" height="100%" width= "100%"/>
                        </div>
                    </div>
                    <div className="videos">
                        <h2>"Here at Last" Music Video</h2>
                        <br></br>
                        <div className="player-wrapper">
                            <ReactPlayer className="react-player-here" url="https://www.youtube.com/watch?v=ceSz-IH-mR8" height="100%" width="100%" />
                        </div>
                    </div>
                    {/* <div className="videos">
                        <h2>"Rotten" Acoustic Live</h2>
                        <div className="player-wrapper"></div>
                            <ReactPlayer className="react-player-rotten" url="https://www.youtube.com/watch?v=AScKm-A3S20" height="40%" width="37"/>
                        </div>
                    <div className="videos">
                        <h2>"Stay" by Lisa Loeb</h2>
                        <br></br>
                        <div className="player-wrapper">
                            <ReactPlayer className="react-player-stay" url="https://www.youtube.com/watch?v=AKxk16hSosw" height="100%" width="100%" />
                        </div>
                    </div> */}
                </Col>
                    <Col>
                        <div className="descriptions">
                            <br></br>
                            <div className="apologize-video">
                                <p>Live performance video recorded at Lakehouse Recording Studios. Featuring Genevieve Nelson on bass, Rob Tanico on guitar and background vocals, and K Kiatpreecha on drums.</p>
                            </div>
                            <br></br>

                            <br></br>
                            <div className="here-at-last-video">
                                <p>Music Video by TG Gainey Productions as part of his Picks-A-Lation Creation Series</p>
                            </div>
                            {/* <div className="rotten-live">
                                <p>Acoustic version of "Rotten" performed live at The Chubby Pickle in Atlantic Highlands, NJ.</p>
                            </div>
                            <br></br>
                            <div className="stay">
                                <p>Acoustic cover of "Stay" by Lisa Loeb.</p>
                            </div> */}
                        </div>
                    </Col>
                </Row>
            </Container>
            <Container className="mobile">
                <Col>
                <div className="videos">
                        <h2>"Apologize" Live</h2>
                        <br></br>
                        <div className="player-wrapper">
                            <ReactPlayer className="react-player-apologize" url="https://www.youtube.com/watch?v=Z2fV8bj53C8" height="100%" width= "100%"/>
                        </div>
                        <br></br>
                        <p className="center">Live performance video recorded at Lakehouse Recording Studios. Featuring Genevieve Nelson on bass, Rob Tanico on guitar and background vocals, and K Kiatpreecha on drums.</p>
                    </div>
                    
                    <div className="videos">
                        <h2>"Here at Last" Music Video</h2>
                        <br></br>
                        <div className="player-wrapper">
                            <ReactPlayer className="react-player-here" url="https://www.youtube.com/watch?v=ceSz-IH-mR8" height="100%" width="100%" />
                        </div>
                        <br></br>
                            <p className="center">Music Video by TG Gainey Productions as part of his Picks-A-Lation Creation Series</p>
                    </div>
          
                </Col>
            </Container>
        </div>
    )
};

export default Videos;