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
const deployURL = "https://eldarlrd.github.io/random-quote-machine";
// State Declaration
export default function App() {
  const [ quote, setQuote ] = useState(null);
// Random Quote
  const rollQuote = Math.floor(Math.random() * 1640); // API Length
  const [ random, setRandom ] = useState(rollQuote);
  const newQuote = () => setRandom(rollQuote);
// Random Theme
  const rollTheme = Math.floor(Math.random() * 10);
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
// Share Format
  const tweet = quote ?
    `${twitterURL}"${quote[random].text}"${quote[random].author ?
    " - " + quote[random].author : ""} > via ${deployURL} %23quotes`
    : twitterURL;
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
        href={tweet}>
        <FontAwesomeIcon icon={faSquareTwitter}/>
      </a>
    </div>
    </>
  );
}