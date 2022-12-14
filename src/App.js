import logo from './logo.svg';
import './App.css';

import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { useSpring, animated, config } from "react-spring";
import "./styles.css";
import blobs from "blobs";

const options = {
  complexity: 0.3,
  contrast: 0.6,
  guides: true,
  size: 1000,
  color: "hsl(6.13, 73.23%, 49.8%)",
  stroke: 0,
};

const Background = ({ svg, fill }) => (
  <div>
    <svg viewBox="0 0 1000 1000" className="wheel" width="600">
      <defs>
        {/* Blue gradient inside the blob */}
        <radialGradient id="radial-gradient" cx="10%" fx="10%" fr="0%" r="80%">
          <stop offset="20%" stop-color="#5568C3" />
          <stop offset="95%" stop-color="#27336F" />
        </radialGradient>
      </defs>

      {
        // <Lines />
      }
      <g transform="translate(0,0)">
        <animated.path class="blob-gradient" d={svg} />
      </g>
    </svg>
  </div>
);

function App() {

  const [blob, change] = useState(blobs.editable(options));

  console.log(blob.children[0].children[0].attributes.d);

  const props3 = useSpring({
    svg: blob.children[0].children[0].attributes.d,
    fill: blob.children[0].children[0].attributes.fill,
    config: {duration: 5000}
  });

  console.log(props3.svg);

  useEffect(() => {
    //Change blob aspect every seconds
    setInterval(() => {
      change(blobs.editable(options))
    }, 5000);
  }, [])

  return (
    <div className="App">
      <header className="App-header">

      <div className="App" onClick={() => change(blobs.editable(options))}>
        <Background svg={props3.svg} fill={props3.fill} />
      </div>

        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
export default App;
