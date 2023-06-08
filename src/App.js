// Boilerplate
import React, { useState, useEffect } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import { faSquareTwitter } from "@fortawesome/free-brands-svg-icons";
import themes from "./themes.json";
import "./App.scss";
// URLs
const quoteURL = "https://type.fit/api/quotes";
const githubURL = "https://github.com/eldarlrd";
const twitterURL = "https://twitter.com/intent/tweet?text=";
const deployURL = "eldarlrd.github.io/random-quote-machine";
// State Declaration
export default function App() {
  const [ quote, setQuote ] = useState(null);
  // Random Quote
  const [ random, setRandom ] = useState(null);
  const rollQuote = Math.floor(Math.random() * quote?.length); // API Length
  const newQuote = () => {
    setRandom(rollQuote);
  };
  // Share Format
// Random Theme
  const rollTheme = Math.floor(Math.random() * themes.length);
  const [ theme, setTheme ] = useState(rollTheme);
  const newTheme = () => setTheme(rollTheme);
// Style Changer
  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty(
      "--primary",
      theme ? themes[theme].primary : themes[theme].primary
    );

    root?.style.setProperty(
      "--secondary",
      theme ? themes[theme].secondary : themes[theme].secondary
      );
    }, [theme]);
// API Fetch
  useEffect(() => {
    axios.get(quoteURL).then(response => {
      setQuote(response.data);
    });
  }, []);

  useEffect(() => {
  if (quote)
    newQuote();
  }, [quote]);
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
        <FontAwesomeIcon icon={faQuoteLeft} /> {
          quote ?
            quote[random]?.text
              ? quote[random]?.text
              : '' : ''}
      </h2>

      <p id="author">- {
        quote
          ? quote[random]?.author
              ? quote[random]?.author
              : 'Unknown' : ''}
      </p>

      <button
        id="new-quote"
        onClick={() => {newQuote(); newTheme()}}>
          New Quote
      </button>

      <a
        id="tweet-quote"
        title="Tweet this quote!"
        target="_blank"
        rel="noreferrer"
        href={`
          ${twitterURL}"${quote ? quote[random]?.text : ''}"${quote ? quote[random]?.author
          ? ' - ' + quote[random]?.author : '' : ''} > via ${deployURL} %23quotes`}>
        <FontAwesomeIcon icon={faSquareTwitter} />
      </a>
    </div>
    </>
  );
}