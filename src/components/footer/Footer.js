import React from "react";
import insta from "../../assets/imgs/insta.png";
import spotify from "../../assets/imgs/spotify.png";
import Tidal from "../../assets/imgs/Tidal.png";
import BandCamp from "../../assets/imgs/bandcamp-button-square-black-512.png"

const footerButtons = [
  {
    title: "Instagram",
    url: "https://www.instagram.com/iamkateortiz/?hl=en",
    img: insta,
  },
  {
    title: "Spotify",
    url: "https://open.spotify.com/artist/1q2b1sTWYODo34HBGOt1UV",
    img: spotify,
  },
  {
    title: "Tidal",
    url: "https://tidal.com/browse/artist/21095604",
    img: Tidal,
  },
  {
    title: "Bandcamp",
    url: "https://kateortiz.bandcamp.com/",
    img: BandCamp,
  },
];

export const Footer = () => {
  return (
    <div className="footer">
      {footerButtons.map((button) => (
        <a
          href={button.url}
          target="_blank"
          rel="noopener noreferrer"
          key={button.title}
        >
          <img src={button.img} alt={button.title} />
        </a>
      ))}
      <span className="footer-text">© 2026 Kate Ortiz</span>
    </div>
  );
};


export default Footer;
