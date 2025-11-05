import React from "react";
import { Container, Navbar } from 'react-bootstrap';
// import facebook from "../../assets/imgs/facebook.png";
import insta from "../../assets/imgs/insta.png";
import spotify from "../../assets/imgs/spotify.png";
import Tidal from "../../assets/imgs/Tidal.png";

export const Footer = () => {
  return (
    <div className="footer">
      <Navbar>
        <Container>
          <Container className="footer-flex">
            <Container>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.instagram.com/iamkateortiz/?hl=en"
                className="d-flex align-items-center p-0 text-dark"
              >
                <img alt="Instagram" src={insta} width="50px" />
              </a>
            </Container>
            <Container>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://open.spotify.com/artist/1q2b1sTWYODo34HBGOt1UV"
                className="d-flex align-items-center p-0 text-dark mt-1px"
              >
                <img alt="Spotify" src={spotify} width="50px" />
              </a>
            </Container>
            <Container>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://tidal.com/browse/artist/21095604"
                className="d-flex align-items-center p-0 text-dark"
              >
                <img
                  alt="Tidal"
                  src={Tidal}
                  width="50px"
                  className="tidal-footer"
                />
              </a>
            </Container>
          </Container>
          <small className="text-center">&copy; Kate Ortiz 2025</small>
        </Container>
      </Navbar>
    </div>
  );
};

export default Footer;
