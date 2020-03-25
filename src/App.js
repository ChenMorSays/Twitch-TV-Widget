import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Helmet} from "react-helmet";

function App() {
  return (
    <div id="container">
      <div id="monitor">
        <div id="monitorscreen">
            <Helmet>
                <script src="https://player.twitch.tv/js/embed/v1.js"></script>
                <script>{` var options = { width: 1024,
                    height: 500,
                    channel: "chenmorsays",
                  };

                var player = new Twitch.Player("monitorscreen", options);
                player.setVolume(0.5);`
                }</script>
            </Helmet>
        </div>
      </div>
    </div>
  );
}

export default App;
