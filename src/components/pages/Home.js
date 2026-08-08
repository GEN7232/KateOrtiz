import Kate from "../../assets/imgs/kate2023.jpeg";
import React from "react";
import spotify from "../../assets/imgs/spotify.png";
import apple from "../../assets/imgs/apple-music-logo.png";
import youtube from "../../assets/imgs/youtube-music.png";
import Tidal from "../../assets/imgs/Tidal.png";
import amazon from "../../assets/imgs/amazon.png";
import bandcamp from "../../assets/imgs/bandcamp-button-square-black-512.png";

const latestReleaseLinks = [
  {
    name: "Spotify",
    url: "https://open.spotify.com/track/2DjXAdbISnB92bysn826db?si=50896983a66e4ef2",
    imgSrc: spotify,
  },
  {
    name: "Apple Music",
    url: "https://music.apple.com/us/song/just-like-poison/1619797240",
    imgSrc: apple,
  },
  {
    name: "Bandcamp",
    url: "https://kateortiz.bandcamp.com/track/just-like-poison",
    imgSrc: bandcamp,
  },
  {
    name: "Tidal",
    url: "https://tidal.com/track/225370899/u",
    imgSrc: Tidal,
  },
  {
    name: "Youtube Music",
    url: "https://youtu.be/XlJEfVw0Ypc?si=JkSb9XpVr5gibpfi",
    imgSrc: youtube,
  },
  {
    name: "Amazon Music",
    url: "https://amazon.com/music/player/albums/B09Y6ZS79M?marketplaceId=ATVPDKIKX0DER&musicTerritory=US&ref=dm_sh_K83PdpDwFlyZVFD7zjb9PT4TR&trackAsin=B09Y6B1S4V",
    imgSrc: amazon,
  },
];

function Home() {
  const latestTitleAltText = `Listen to "Just Like Poison"`;
  return (
    <div>
      <br></br>
      <br></br>
      <h1>Kate Ortiz</h1>
      <h3>Songwriter and Producer</h3>
      <hr></hr>
      <h3>Latest Release</h3>
      <h4 id="latest-text">"Just Like Poison" Lyric Video</h4>
      <div id="latest-release-container">
        <iframe
          src="https://www.youtube.com/embed/XlJEfVw0Ypc?si=Jjl9O3ZnrJVTU8ys"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullsCcreen
        ></iframe>
      </div>

      <div id="latest-release-links">
        {latestReleaseLinks.map((link) => (
          <a
            key={link.name} href={link.url} target="_blank" rel="noreferrer" title="Listen to Just Like Poison on {link.name}">
            <img alt={`${latestTitleAltText} on ${link.name}`} src={link.imgSrc}></img>
          </a>
        ))}
      </div>

      <hr></hr>
      <img className="katepic" src={Kate} alt="Kate Ortiz"></img>
      <div className="bio">
        <p>
          Kate Ortiz is a songwriter, producer, and multi-instrumentalist
          working out of Asbury Park, New Jersey. She is able to write in many
          different styles, using a variety of instruments. Her roots are in
          hard rock; however, these days you'll find her writing pop, latin,
          rock, and more. Click through to the music tabs to check out some of
          her latest work. She started in sixth grade when she made a deal with
          her parents: if she got straight A's for a whole year, they would buy
          her a guitar. Ever since then, she's been playing guitar, singing,
          drumming, playing bass, writing, producing, and more.
        </p>
      </div>
      <hr></hr>
    </div>
  );
}

export default Home;
