// Boilerplate
import React from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import { faSquareTwitter } from "@fortawesome/free-brands-svg-icons";
import "./App.scss";
// URLs
const quoteURL = "https://type.fit/api/quotes";
const githubURL = "https://github.com/eldarlrd";
const twitterURL = "https://twitter.com/intent/tweet";
// State Declaration
export default function App() {
  const [ quote, setQuote ] = React.useState(null);
// Randomizer
  const roll = Math.floor((Math.random() * 1000));
  const [ random, setRandom ] = React.useState(roll);
  const newRoll = () => setRandom(roll);
// API Fetch
  React.useEffect(() => {
    axios.get(quoteURL).then(response => {
      setQuote(response.data);
    });
  }, []);
// Render
  return (
    <>
    <header>
      Random Quote Machine
      <br />
      by <a
        target="_blank"
        rel="noreferrer"
        href={githubURL}>
        eldarlrd</a>
    </header>
    <div id="quote-box">
      <h2 id="text">
        <FontAwesomeIcon icon={faQuoteLeft}/> {
        quote
        ? quote[random].text
        : "" }
      </h2>
      <p id="author">- {
        quote
        ? quote[random].author
          ? quote[random].author
          : "Unknown"
        : "" }
      </p>
      <button id="new-quote" onClick={newRoll}>New Quote</button>
      <a
        id="tweet-quote"
        title="Tweet this quote!"
        target="_blank"
        rel="noreferrer"
        href={twitterURL}>
        <FontAwesomeIcon icon={faSquareTwitter}/>
      </a>
    </div>
    </>
  );
}