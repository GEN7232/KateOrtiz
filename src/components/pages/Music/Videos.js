import React from "react";

const videos = [
  {
    title: '"Just Like Poison" Lyric Video',
    url: "https://www.youtube.com/embed/XlJEfVw0Ypc?si=JZhQgDswbO3dk8EJ",
    description: 'Vibey lyric video for "Just Like Poison"',
  },
  {
    title: '"Just Like Poison" Live',
    url: "https://www.youtube.com/embed/eVgK0L1-dr0?si=1Re1QdyL08d3W5LK",
    description:
      'Live performance video of "Just Like Poison" recorded at Lakehouse Recording Studios as part of their Lakehouse Live series. Featuring Genevieve Nelson on bass and Maria Ruiz on drums.',
  },
  {
    title: '"Shine" Live',
    url: "https://www.youtube.com/embed/LPZT373hIKc?si=imUFqCVhnvqDCN2S",
    description:
      'Live performance video of "Shine" recorded at Lakehouse Recording Studios as part of their Lakehouse Live series. Featuring Genevieve Nelson on bass and Maria Ruiz on drums.',
  },
  {
    title: '"Apologize" Live',
    url: "https://www.youtube.com/embed/Z2fV8bj53C8?si=0ZrPKVAs6UqF7nG1",
    description:
      'Live performance video recorded at Lakehouse Recording Studios. Featuring Genevieve Nelson on bass, Rob Tanico on guitar and background vocals, and K Kiatpreecha on drums.',
  },
];

const Videos = () => {
  return (
    <div id="videos-container">
      <header>
        <h1 id="videos-h1">Videos of Kate's Music</h1>
        <p>
          Subscribe to her{" "}
          <a href="https://www.youtube.com/channel/UCBZIeGh0Am7WLYvNBfbK0Nw">
            Youtube Channel
          </a>
        </p>
      </header>
      <div>
        <div className="videos">
          {videos.map((video) => (
            <div className="individual-video-with-description" key={video.title}>
              <div className="player">
                <h2>{video.title}</h2>
                    <iframe
                      src={video.url}         
                      title={video.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                    />
              </div>
              <div className="descriptions">
                <p>{video.description}</p>
              </div>
              <hr></hr>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}


export default Videos;
