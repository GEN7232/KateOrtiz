/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ReactPlayer from "react-player";
import spotify from "../../../assets/imgs/spotify.png";
import apple from "../../../assets/imgs/apple-music-logo.png";
import youtube from "../../../assets/imgs/youtube-music.png";
import Tidal from "../../../assets/imgs/Tidal.png";
import soundcloud from "../../../assets/imgs/soundcloud.png";
import amazon from "../../../assets/imgs/amazon.png";
import deezer from "../../../assets/imgs/deezer.png";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Singles = () => {
  return (
    <div className="single-wrapper">
      <header>
        <h1>Songs released as singles</h1>
        <h4>All songs were written and produced by Kate Ortiz</h4>
      </header>
      <Container className="desktop">
        <Row>
          <Col className="find-spotify">
            <p className="instruments">
              Kate Ortiz sang and played guitar and piano on every song, and
              played bass and drums on "Just Like Poison", "Here at Last",
              "Rotten", "Let Me Out of My Cage", and "That Isn't Me".
            </p>
            <h2>
              Find all these tracks and more on &nbsp;
              <a
                href="https://open.spotify.com/artist/1q2b1sTWYODo34HBGOt1UV?si=JMvbQvUpR--SliXZs29LwA"
                target="_blank"
              >
                Spotify, &nbsp;
                <br></br>
              </a>
              <a
                href="https://music.apple.com/us/artist/kate-ortiz/1529541219"
                target="_blank"
              >
                Apple Music, &nbsp;
              </a>
              <a
                href="https://tidal.com/browse/artist/21095604"
                target="_blank"
              >
                Tidal,
              </a>
              &nbsp; and other streaming platforms.
            </h2>
            <br></br>
            <div className="logos">
              <a
                href="https://open.spotify.com/artist/1q2b1sTWYODo34HBGOt1UV?si=JMvbQvUpR--SliXZs29LwA"
                target="_blank"
              >
                <img id="spotify" src={spotify} alt="Spotify"></img>
              </a>
              <a
                href="https://music.apple.com/us/artist/kate-ortiz/1529541219"
                target="_blank"
              >
                <img id="apple" src={apple} alt="Apple Music"></img>
              </a>
              <a
                href="https://tidal.com/browse/artist/21095604"
                target="_blank"
              >
                <img id="tidal" src={Tidal} alt="Tidal"></img>
              </a>
            </div>
            <div className="logos">
              <a
                href="https://music.youtube.com/channel/UC1zUhEZakwBFm3BSb1al1wQ"
                target="_blank"
              >
                <img id="youtube-music" src={youtube} alt="Youtube Music"></img>
              </a>
              <a href="https://soundcloud.com/user-534750572" target="_blank">
                <img src={soundcloud} alt="SoundCloud"></img>
              </a>
              <a
                href="https://music.amazon.com/artists/B07G7JRG92/kate-ortiz?marketplaceId=ATVPDKIKX0DER&musicTerritory=US&ref=dm_sh_5uwegbE6PBroDR6m0C7aRNhiS"
                target="_blank"
              >
                <img src={amazon} alt="Amazon Music"></img>
              </a>
            </div>
          </Col>
          <Col>
            <div className="singles">
              <div className="player">
                <h2>"A Really Fun Song About Wanting to Die"</h2>
                <br></br>
                <ReactPlayer
                  url="https://soundcloud.com/user-534750572/a-really-fun-song-about-wanting-to-die"
                  height="100%"
                  width="100%"
                />
              </div>
              <div className="player">
                <h2>"Just Like Poison"</h2>
                <br></br>
                <div className="player-wrapper">
                  <ReactPlayer
                    className="react-player poison-player"
                    url="https://soundcloud.com/user-534750572/just-like-poison"
                    height="100%"
                    width="100%"
                  />
                </div>
              </div>

              <div className="player">
                <h2>"Apologize"</h2>
                <br></br>
                <ReactPlayer
                  url="https://soundcloud.com/user-534750572/apologize-1"
                  height="100%"
                  width="100%"
                />
              </div>

              <div className="player">
                <h2>"Trouble"</h2>
                <br></br>
                <ReactPlayer
                  url="https://soundcloud.com/user-534750572/trouble-1"
                  height="100%"
                  width="100%"
                />
              </div>

              <div className="player">
                <h2>"Rotten"</h2>
                <br></br>
                <ReactPlayer
                  url="https://soundcloud.com/user-534750572/rotten"
                  height="100%"
                  width="100%"
                />
              </div>

              <div className="player">
                <h2>"Let Me Out of My Cage"</h2>
                <br></br>
                <ReactPlayer
                  url="https://soundcloud.com/user-534750572/let-me-out-of-my-cage"
                  height="100%"
                  width="100%"
                />
              </div>

              <div className="player">
                <h2>"Here at Last"</h2>
                <br></br>
                <ReactPlayer
                  url="https://soundcloud.com/user-534750572/here-at-last"
                  height="100%"
                  width="100%"
                />
              </div>

              <div className="player">
                <h2>"That Isn't Me"</h2>
                <br></br>
                <ReactPlayer
                  url="https://soundcloud.com/user-534750572/that-isnt-me"
                  height="100%"
                  width="100%"
                />
              </div>

              <div className="player">
                <h2>"Nothing at All"</h2>
                <br></br>
                <ReactPlayer
                  url="https://soundcloud.com/user-534750572/nothing-at-all"
                  height="100%"
                  width="100%"
                />
              </div>

              <div className="player">
                <h2>"Shine"</h2>
                <br></br>
                <ReactPlayer
                  url="https://soundcloud.com/user-534750572/shine"
                  height="100%"
                  width="100%"
                />
              </div>

              <div className="player">
                <h2>"With You"</h2>
                <br></br>
                <ReactPlayer
                  url="https://soundcloud.com/user-534750572/with-you"
                  height="100%"
                  width="100%"
                />
              </div>
            </div>
          </Col>
          <Col>
            <div className="descriptions">
              <div className="die">
                <p>
                  A modern ska song engineered and co-produced by Genevieve
                  Nelson. Kate feels better now by the way...
                </p>
              </div>
              <div className="poison">
                <p>
                  A spacey dark pop-rock song engineered and co-produced by
                  Genevieve Nelson. It was inspired by the hypnagagic state.
                </p>
              </div>
              <div className="apologize">
                <p>
                  An exercise in what Kate Ortiz would write if she were working
                  with Kelly Clarkson, "Apologize" is a pop-rock banger
                  engineered by Jeff Kalemba.
                </p>
              </div>
              <div className="trouble">
                <p>
                  An homage to Kate Ortiz's latina roots while struggling with
                  personal identity. It was engienered by Jeff Kalemba.
                </p>
              </div>
              <div className="rotten">
                <p>
                  A driving ballad with striking horns, powerful vocals and a
                  piano reminscient of the past. "Rotten" was engineered by
                  Genevieve Nelson.
                </p>
              </div>
              <div className="let-me-out">
                <p>
                  A synthy dark pop song featuring irregular percussion about
                  self-discovery. Engineered by Genevieve Nelson.
                </p>
              </div>
              <div className="here-at-last">
                <p>
                  A ballad utiltizing some amazing vintage Silvertone guitars
                  about finally coming to terms with who you are. Made Maria
                  cry. Engineered by Genevieve Nelson
                </p>
              </div>
              <div className="that-isnt-me">
                <p>
                  A devastingly melancholy song featuring some pretty cool sub
                  bass licks. Engineered by Genevieve Nelson
                </p>
              </div>
              <div className="nothing-at-all">
                <p>
                  A rock ballad exploring the inner workings of a person that
                  does not know how to fully express themselves emotionally.
                  Engineered by Jeff Kalemba.
                </p>
              </div>
              <div className="shine">
                <p>
                  An alternative rock exercise in what Kate thought she would
                  write if she worked for Disney. Engineered by Jeff Kalemba.
                </p>
              </div>
              <div className="with-you">
                <p>
                  Reminscient of mid 2000s emo rock, "With You" tells a story
                  about someone trying to make things work with a partner
                  despite everyone's flaws. Engineered by Jeff Kalemba.
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <Container className="mobile">
        <p className="instruments">
          Kate Ortiz sang and played guitar and piano on every song, and played
          bass and drums on "Just Like Poison", "Here at Last", "Rotten", "Let
          Me Out of My Cage", and "That Isn't Me".
        </p>
        <h2>
          Find all these tracks and more on &nbsp;
          <a
            href="https://open.spotify.com/artist/1q2b1sTWYODo34HBGOt1UV?si=JMvbQvUpR--SliXZs29LwA"
            target="_blank"
          >
            Spotify, &nbsp;
          </a>
          <a
            href="https://music.apple.com/us/artist/kate-ortiz/1529541219"
            target="_blank"
          >
            Apple Music, &nbsp;
          </a>
          <a href="https://tidal.com/browse/artist/21095604" target="_blank">
            Tidal,
          </a>
          &nbsp; and other streaming platforms.
        </h2>
        <br></br>
        <div className="logos">
          <a
            href="https://open.spotify.com/artist/1q2b1sTWYODo34HBGOt1UV?si=JMvbQvUpR--SliXZs29LwA"
            target="_blank"
          >
            <img id="spotify-small" src={spotify} alt="Spotify"></img>
          </a>
          <a
            href="https://music.apple.com/us/artist/kate-ortiz/1529541219"
            target="_blank"
          >
            <img id="apple" src={apple} alt="Apple Music"></img>
          </a>
          <a href="https://tidal.com/browse/artist/21095604" target="_blank">
            <img id="tidal" src={Tidal} alt="Tidal"></img>
          </a>
        </div>
        <br></br>
        <div className="logos">
          <a
            href="https://music.youtube.com/channel/UC1zUhEZakwBFm3BSb1al1wQ"
            target="_blank"
          >
            <img id="youtube-music" src={youtube} alt="Youtube Music"></img>
          </a>
          <a href="https://soundcloud.com/user-534750572" target="_blank">
            <img src={soundcloud} alt="SoundCloud"></img>
          </a>
          <a
            href="https://music.amazon.com/artists/B07G7JRG92/kate-ortiz?marketplaceId=ATVPDKIKX0DER&musicTerritory=US&ref=dm_sh_5uwegbE6PBroDR6m0C7aRNhiS"
            target="_blank"
          >
            <img src={amazon} alt="Amazon Music"></img>
          </a>
        </div>
        <div className="singles">
          <div className="player">
            <h2>"A Really Fun Song About Wanting to Die"</h2>
            <br></br>
            <ReactPlayer
              url="https://soundcloud.com/user-534750572/a-really-fun-song-about-wanting-to-die"
              height="100%"
              width="100%"
            />
          </div>
          <div class="descriptions2">
            <p>
              A modern ska song engineered and co-produced by Genevieve Nelson.
              Kate feels better now by the way...
            </p>
          </div>
          <div className="player">
            <h2>"Just Like Poison"</h2>
            <br></br>
            <div className="player-wrapper">
              <ReactPlayer
                className="react-player poison-player2"
                url="https://soundcloud.com/user-534750572/just-like-poison"
                height="100%"
                width="100%"
              />
            </div>
          </div>
          <div className="descriptions2">
            <p>
              A spacey dark pop-rock song engineered and co-produced by
              Genevieve Nelson. It was inspired by the hypnagagic state.
            </p>
          </div>

          <div className="player">
            <h2>"Apologize"</h2>
            <br></br>
            <ReactPlayer
              url="https://soundcloud.com/user-534750572/apologize-1"
              height="100%"
              width="100%"
            />
          </div>
          <div className="descriptions2">
            <p>
              An exercise in what Kate Ortiz would write if she were working
              with Kelly Clarkson, "Apologize" is a pop-rock banger engineered
              by Jeff Kalemba.
            </p>
          </div>

          <div className="player">
            <h2>"Trouble"</h2>
            <br></br>
            <ReactPlayer
              url="https://soundcloud.com/user-534750572/trouble-1"
              height="100%"
              width="100%"
            />
          </div>
          <div className="descriptions2">
            <p>
              An homage to Kate Ortiz's latina roots while struggling with
              personal identity. It was engienered by Jeff Kalemba.
            </p>
          </div>

          <div className="player">
            <h2>"Rotten"</h2>
            <br></br>
            <ReactPlayer
              url="https://soundcloud.com/user-534750572/rotten"
              height="100%"
              width="100%"
            />
          </div>
          <div className="descriptions2">
            <p>
              A driving ballad with striking horns, powerful vocals and a piano
              reminscient of the past. "Rotten" was engineered by Genevieve
              Nelson.
            </p>
          </div>
          <div className="player">
            <h2>"Let Me Out of My Cage"</h2>
            <br></br>
            <ReactPlayer
              url="https://soundcloud.com/user-534750572/let-me-out-of-my-cage"
              height="100%"
              width="100%"
            />
          </div>
          <div className="descriptions2">
            <p>
              A synthy dark pop song featuring irregular percussion about
              self-discovery. Engineered by Genevieve Nelson.
            </p>
          </div>
          <div className="player">
            <h2>"Here at Last"</h2>
            <br></br>
            <ReactPlayer
              url="https://soundcloud.com/user-534750572/here-at-last"
              height="100%"
              width="100%"
            />
          </div>
          <div className="descriptions2">
            <p>
              A ballad utiltizing some amazing vintage Silvertone guitars about
              finally coming to terms with who you are. Made Maria cry.
              Engineered by Genevieve Nelson
            </p>
          </div>
          <div className="player">
            <h2>"That Isn't Me"</h2>
            <br></br>
            <ReactPlayer
              url="https://soundcloud.com/user-534750572/that-isnt-me"
              height="100%"
              width="100%"
            />
          </div>
          <div className="descriptions2">
            <p>
              A devastingly melancholy song featuring some pretty cool sub bass
              licks. Engineered by Genevieve Nelson
            </p>
          </div>
          <div className="player">
            <h2>"Nothing at All"</h2>
            <br></br>
            <ReactPlayer
              url="https://soundcloud.com/user-534750572/nothing-at-all"
              height="100%"
              width="100%"
            />
          </div>
          <div className="descriptions2">
            <p>
              A rock ballad exploring the inner workings of a person that does
              not know how to fully express themselves emotionally. Engineered
              by Jeff Kalemba.
            </p>
          </div>
          <div className="player">
            <h2>"Shine"</h2>
            <br></br>
            <ReactPlayer
              url="https://soundcloud.com/user-534750572/shine"
              height="100%"
              width="100%"
            />
          </div>
          <div className="descriptions2">
            <p>
              An alternative rock exercise in what Kate thought she would write
              if she worked for Disney. Engineered by Jeff Kalemba.
            </p>
          </div>
          <div className="player">
            <h2>"With You"</h2>
            <br></br>
            <ReactPlayer
              url="https://soundcloud.com/user-534750572/with-you"
              height="100%"
              width="100%"
            />
          </div>
          <div className="with-you">
            <p className="with-you-desc">
              Reminscient of mid 2000s emo rock, "With You" tells a story about
              someone trying to make things work with a partner despite
              everyone's flaws. Engineered by Jeff Kalemba.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Singles;
