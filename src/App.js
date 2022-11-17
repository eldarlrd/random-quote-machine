// Boilerplate
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import { faSquareTwitter } from "@fortawesome/free-brands-svg-icons";
import "./App.scss";
const twitterURL = "https://twitter.com/";
// Render
export default function App() {
  return (
    <div id="quote-box">
      <h2 id="text">
        <FontAwesomeIcon icon={faQuoteLeft}/> It's the wood that should fear your hand, not the other way around. No wonder you can't do it, you acquiesce to defeat before you even begin.
      </h2>
      <p id="author">- Pai Mei</p>
      <button id="new-quote">New Quote</button>
      <a
        id="tweet-quote"
        target="_blank"
        rel="noreferrer"
        href={twitterURL}>
        <FontAwesomeIcon icon={faSquareTwitter}/>
      </a>
    </div>
  );
}