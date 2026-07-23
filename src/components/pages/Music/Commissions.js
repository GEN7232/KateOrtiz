import React from "react";

const podcasts = [
  {
    title: "Band Battles Intro",
    url: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A1562031628&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
    description: "Intro music for the Band Battles podcast",
  },
  {
    title: "Band Battles Outro with VO",
    url: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A1562029693&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
    description: "Outro music for the Band Battles podcast with voiceover",
  },
  {
    title: "Band Battles Outro without VO",
    url: "https://www.youtube.com/embed/qNQ8K21sstE?si=OcAb93rgVGe8-AJ_",
    description: "Outro music for the Band Battles podcast without voiceover",
  },
];

const videoCommissions = [
  {
    title: "Video Background",
    url: "https://www.youtube.com/embed/V3yGhIc0y2c?si=R0BEAsw4zGHn2Vcl",
    description: "Kate wrote the backing music for this video.",
  },
];

const Commissions = () => {
  return (
    <div id="commissions-container">
      <br></br>
      <br></br>
      <h1>Commissions</h1>
      <div className="podcasts">
        <h2>Podcasts</h2>
        <br></br>
        <p>
          Kate Ortiz wrote and performed the instruments for the following
          podcast intros/outros
        </p>
        {podcasts.map((podcast) => (
          <div
            className="player individual-podcast-with-description"
            key={podcast.title}
          >
            <iframe
              src={podcast.url}
              title={podcast.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        ))}
      </div>
      <hr></hr>
      <div className="video-commissions">
        <div className="video-desc">
          <h2>Video Background</h2>
          <br></br>
        </div>
        {videoCommissions.map((video) => (
          <div className="individual-video-with-description" key={video.title}>
            <div className="descriptions">
              <p>{video.description}</p>
            </div>
            <div className="player">
              <iframe
                src={video.url}
                title={video.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Commissions;
