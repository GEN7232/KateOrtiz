import React from "react";
import { CDBFooter, CDBFooterLink, CDBBox, CDBBtn, CDBIcon } from "cdbreact";
// import facebook from "../../assets/imgs/facebook.png";
import insta from "../../assets/imgs/insta.png";
import twitter from "../../assets/imgs/twitter.png";
import spotify from "../../assets/imgs/spotify.png";
import Tidal from "../../assets/imgs/Tidal.png";

export const Footer = () => {
  return (
    <div className="footer">
      <CDBFooter className="shadow">
        <CDBBox
          display="flex"
          flex="column"
          className="mx-auto py-5"
          style={{ width: "90%" }}
        >
          <CDBBox display="flex" justifyContent="between" className="flex-wrap">
            <CDBBox>
              <a
                href="https://www.instagram.com/iamkateortiz/?hl=en"
                className="d-flex align-items-center p-0 text-dark"
              >
                <img alt="Instagram" src={insta} width="50px" />
              </a>
            </CDBBox>
            <CDBBox>
              <a
                href="https://twitter.com/iamkateortiz?lang=en"
                className="d-flex align-items-center p-0 text-dark"
              >
                <img alt="Twitter" src={twitter} width="50px" />
              </a>
            </CDBBox>
            <CDBBox>
              <a
                href="https://open.spotify.com/artist/1q2b1sTWYODo34HBGOt1UV"
                className="d-flex align-items-center p-0 text-dark mt-1px"
              >
                <img alt="Spotify" src={spotify} width="50px" />
              </a>
            </CDBBox>
            <CDBBox>
              <a
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
            </CDBBox>
          </CDBBox>
          <small className="text-center mt-5">&copy; Kate Ortiz 2022</small>
        </CDBBox>
      </CDBFooter>
    </div>
  );
};

export default Footer;
