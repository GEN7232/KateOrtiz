import Kate from "../../assets/imgs/kate2023.jpeg";
import FunSong from "../../assets/imgs/FunSongArt.jpg"
import React from "react";
import spotify from "../../assets/imgs/spotify.png";
import apple from "../../assets/imgs/apple-music-logo.png";
import youtube from "../../assets/imgs/youtube-music.png";
import Tidal from "../../assets/imgs/Tidal.png";
import soundcloud from "../../assets/imgs/soundcloud.png"
import amazon from "../../assets/imgs/amazon.png"
import deezer from "../../assets/imgs/deezer.png"
import poison from "../../assets/imgs/Just-Like-Poison.jpg"

function Home() {
  return (
    <div>
      <br></br>
      <br></br>
      <h1>Kate Ortiz</h1>
      <h3>Songwriter and Producer</h3>
      <hr></hr>
      <h3>Upcoming Releases</h3>
      <a 
        id="presave"
        rel="noreferrer"
        target="_blank"
        href="https://distrokid.com/hyperfollow/kateortiz/a-really-fun-song-about-wanting-to-die?fbclid=PAAaZOHTznlKlcZOsOQfohjxe9mq3hWkBk0HMDr4WZozFdPijzzazXNfkwU1Q">
          <div>
            <img alt="Pre-Save Kate Ortiz's next single, 'A Really Fun Song About Wanting to Die'" src={FunSong}></img>
          </div>
          <br></br>
          <div id="presave-text">
          Pre-Save her next single 
          <br></br>
          "A Really Fun Song About Wanting to Die"
          </div>
        </a>
        <hr></hr>
        <h3>Latest Release</h3>
        <h4 id="latest-text">  
          "Just Like Poison"
        </h4>
        <div id="latest-pic-container">
          <img id="lastest-pic" src={poison} alt="Listen to Kate Ortiz's latest single 'Just Like Poison'"></img>
        </div>

        <div id="latest-icon-container">
          <a id="latest-spotify"
            target="_blank"
            rel="noreferrer"
            href="https://open.spotify.com/album/3o0KQ5iSzWkndsTphBDzNN?si=qTlk6yJbRaaainEIr6HwZw">
            <img alt="Listen to 'Just Like Posion' on Spotify" src={spotify}></img>
          </a>
          <a
            id="latest-apple"
            target="_blank"
            rel="noreferrer"
            href="https://music.apple.com/us/album/just-like-poison-single/1619797239">
            <img alt="Listen to 'Just Like Posion' on Apple Music" src={apple}></img>
          </a>
          <a
            id="latest-tidal"
            target="_blank"
            rel="noreferrer"
            href="https://tidal.com/browse/album/225370897">
            <img alt="Listen to 'Just Like Posion' on Tidal" src={Tidal}></img>
          </a>
          <a
            id="latest-youtube"
            target="_blank"
            rel="noreferrer"
            href="https://youtu.be/FnY21zutWho">
            <img alt="Listen to 'Just Like Posion' on Youtube Music" src={youtube}></img>
          </a>
          <a
            id="latest-soundcloud"
            target="_blank"
            rel="noreferrer"
            href="https://soundcloud.com/user-534750572/just-like-poison">
            <img alt="Listen to 'Just Like Posion' on SoundCloud" src={soundcloud}></img>
          </a>
          <a
            id="latest-amazon"
            target="_blank"
            rel="noreferrer"
            href="https://music.amazon.com/albums/B09Y6ZS79M?marketplaceId=ATVPDKIKX0DER&musicTerritory=US&ref=dm_sh_3GqC309xfz6R2xWYUXDmnZ3wM&trackAsin=B09Y6B1S4V">
            <img alt="Listen to 'Just Like Posion' on Amazon Music" src={amazon}></img>
          </a>
          <a
            id="latest-deezer"
            target="_blank"
            rel="noreferrer"
            href="https://deezer.page.link/PkVPTFjx9ccEBez16">
            <img alt="Listen to 'Just Like Posion' on Deezer" src={deezer}></img>
          </a>
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
