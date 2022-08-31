import Kate from "../../assets/imgs/Kate.jpeg";
import React from "react";


function Home () {
    return (
        <div>
            <br></br>
            <h1>Kate Ortiz</h1>
            <h3>Songwriter and Producer</h3>
            <img className="katepic" src={Kate} alt="Kate Ortiz">
            </img>
            <div className="bio">
                <p>
                    Kate Ortiz is a songwriter, producer, and multi-instrumentalist working out of Asbury Park, New Jersey. She is able to write in many different styles using a variety of instruments. Her roots are in hard rock, however these days you'll find her writing pop, latin, rock, and more. Click through to the music tabs to check out some of her latest work. She started in sixth grade when she made a deal with her parents: if she got straight A's for a whole year, they would buy her a guitar. Even since then she's been playing guitar, singing, drumming, playing bass, writing, producing and more.
                </p>
            </div>

        </div>
    );
};

export default Home;