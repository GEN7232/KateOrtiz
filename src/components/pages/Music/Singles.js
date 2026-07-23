import React from "react";

const singles = [
  {
    title: "“Christmas (Go Fuck Yourself)”",
    url: "https://www.youtube.com/embed/jKVtFtyrC88?si=5j6nJxWDPx4sIUqP",
    description: "The Christmas breakup song you didn't know you needed.",
  },
  {
    title: "“Christmas (Go F Yourself) (Radio Edit)”",
    url: "https://www.youtube.com/embed/MPnyhAiK55M?si=NoPB8rdEZNcPKJne",
    description: "The same Christmas song, but squeaky clean.",
  },
  {
    title: "“A Really Fun Song About Wanting to Die”",
    url: "https://www.youtube.com/embed/ipEDFJRQtp8?si=oeAA3pBQbgdn8vM8",
    description:
      "A modern ska song with attitude. Kate feels better now by the way...",
  },
  {
    title: "“Just Like Poison”",
    url: "https://www.youtube.com/embed/XlJEfVw0Ypc?si=Jjl9O3ZnrJVTU8ys",
    description:
      "A spacey dark pop-rock song inspired by semi-sleepless nights and the hypnagogic state.",
  },
  {
    title: "“Apologize”",
    url: "https://www.youtube.com/embed/DV16f0mFRW0?si=usYYPwsKNHmrh3_o",
    description:
      'An exercise in what Kate Ortiz would write if she were working with Kelly Clarkson, "Apologize" is an absolute pop-rock banger.',
  },
  {
    title: "“Trouble”",
    url: "https://www.youtube.com/embed/9ZQPVAl3Vdo?si=DOTVR9dN6FqY61BO",
    description:
      "An homage to Kate Ortiz's Latina roots while struggling with personal identity.",
  },
  {
    title: "“Rotten”",
    url: "https://www.youtube.com/embed/IVX6-n1mdzQ?si=ufzWk7OWODxIVHd7",
    description:
      "A driving ballad with striking horns, powerful vocals and a piano reminiscent of the past.",
  },
  {
    title: "“Let Me Out of My Cage”",
    url: "https://www.youtube.com/embed/NyWYQ7gp8YU?si=5fXG9kDaGv1rCzyC",
    description:
      "A synthy dark pop song featuring irregular percussion about self-discovery.",
  },
  {
    title: "“Here at Last”",
    url: "https://www.youtube.com/embed/WOcrQfD_mFg?si=XlwMDifPKnaG_igP",
    description:
      "A ballad utilizing some amazing vintage Silvertone guitars about finally coming to terms with who you are.",
  },
  {
    title: "“That Isn't Me”",
    url: "https://www.youtube.com/embed/PmK2oE1IZIk?si=q38YfDe6gEdEPUVb",
    description:
      "A devastatingly melancholy song featuring some pretty cool sub bass licks.",
  },
  {
    title: "“Nothing At All”",
    url: "https://www.youtube.com/embed/lUrht2xWHe0?si=lSHObbBM0NuMG-sP",
    description:
      "A rock ballad exploring the inner workings of a person that does not know how to fully express themselves emotionally.",
  },
  {
    title: "“Shine”",
    url: "https://www.youtube.com/embed/I3hnuZGbdEg?si=GDYA56hvG2o7-zMu",
    description:
      "An alternative rock exercise in what Kate thought she would write if she worked for Disney.",
  },
  {
    title: "“With You”",
    url: "https://www.youtube.com/embed/BJBxZuZjrug?si=N6nZfoEw1SKBE04P",
    description:
      'Reminiscent of mid 2000s emo rock, "With You" tells a story about someone trying to make things work with a partner despite everyone\'s flaws.',
  },
];

const Singles = () => {
  return (
    <div className="single-wrapper">
      <header>
        <h1>Songs released as singles</h1>
        <p>All songs were written and produced by Kate Ortiz</p>
      </header>
      <div>
        <div className="blurb-and-links">
          <p>
            Find all these tracks and more on &nbsp;
            <a
              href="https://open.spotify.com/artist/1q2b1sTWYODo34HBGOt1UV?si=JMvbQvUpR--SliXZs29LwA"
              target="_blank"
              rel="noopener noreferrer"
            >
              Spotify,
            </a>
            &nbsp;
            <a
              href="https://music.apple.com/us/artist/kate-ortiz/1529541219"
              target="_blank"
              rel="noopener noreferrer"
            >
              Apple Music,
            </a>
            &nbsp;
            <a
              href="https://tidal.com/browse/artist/21095604"
              target="_blank"
              rel="noopener noreferrer"
            >
              Tidal,
            </a>
            &nbsp; and other streaming platforms.
          </p>
        </div>

        <div>
          <div>
            <div className="singles">
              {singles.map((single) => (
                <div
                  className="individual-single-with-description"
                  key={single.title}
                >
                  <div className="player">
                    <h2>{single.title}</h2>
                    <br></br>
                    <iframe
                      src={single.url}
                      title={single.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                    />
                  </div>
                  <div className="descriptions">
                    <p>{single.description}</p>
                  </div>
                  <hr></hr>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Singles;
