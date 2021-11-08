import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />
        <footer>
          This project was coded by Cheavon Pottinger and is{" "}
          <a
            href="https://github.com/Trinity737/Boom"
            Target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on Github
          </a>{" "}
          and{" "}
          <a
            href="https://blissful-poincare-cfa49e.netlify.app/"
            rel="noopener norenderer"
          >
            hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
