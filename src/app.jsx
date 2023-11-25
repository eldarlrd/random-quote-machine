import { faSquareXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React, { useState, useEffect } from 'react';

import './app.scss';

const THEMES = [
  {
    primary: 'steelblue',
    secondary: 'saddlebrown'
  },
  {
    primary: 'firebrick',
    secondary: '#343a40'
  },
  {
    primary: 'thistle',
    secondary: 'teal'
  },
  {
    primary: 'darkseagreen',
    secondary: 'rebeccapurple'
  },
  {
    primary: 'darkslateblue',
    secondary: 'seagreen'
  },
  {
    primary: 'darkslategray',
    secondary: 'deeppink'
  },
  {
    primary: 'lightsalmon',
    secondary: 'maroon'
  },
  {
    primary: '#e5b35e',
    secondary: 'darkolivegreen'
  },
  {
    primary: '#653208',
    secondary: 'royalblue'
  },
  {
    primary: 'plum',
    secondary: 'mediumvioletred'
  }
];

const API_KEY = process.env.REACT_APP_API_KEY;
const API_URL = 'https://api.api-ninjas.com/v1/quotes';
const SOURCE_URL = 'https://github.com/eldarlrd/random-quote-machine';
const DEPLOY_URL = 'eldarlrd.github.io/random-quote-machine';
const X_URL = 'https://twitter.com/intent/tweet?text=';

export const App = () => {
  const [quote, setQuote] = useState(null);

  // Random Quote
  const [random, setRandom] = useState(null);
  const [fetchNew, setFetchNew] = useState(null);
  const rollQuote = Math.floor(Math.random() * quote?.length); // API Length
  const newQuote = () => setRandom(rollQuote);

  // Random Theme
  const rollTheme = Math.floor(Math.random() * THEMES.length);
  const [theme, setTheme] = useState(rollTheme);
  const newTheme = () => setTheme(rollTheme);

  // Style Changer
  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty(
      '--primary',
      theme ? THEMES[theme].primary : THEMES[theme].primary
    );

    root?.style.setProperty(
      '--secondary',
      theme ? THEMES[theme].secondary : THEMES[theme].secondary
    );
  }, [theme]);

  // API Fetch
  useEffect(() => {
    axios
      .get(API_URL, {
        headers: {
          'X-Api-Key': API_KEY
        }
      })
      .then(response => {
        setQuote(response.data);
        return;
      })
      .catch(error => {
        console.error(error);
      });
  }, [fetchNew]);

  useEffect(() => {
    if (quote) newQuote();
  }, [quote]);

  return (
    <>
      <header>
        Random Quote Machine
        <br />© 2022 - 2023{' '}
        <a
          title='Go to the Source'
          target='_blank'
          type='text/html'
          rel='noopener noreferrer nofollow external author'
          href={SOURCE_URL}>
          eldarlrd
        </a>
      </header>

      <div id='quote-box'>
        <h2 id='text'>
          <FontAwesomeIcon icon={faQuoteLeft} />{' '}
          {quote ? (quote[random]?.quote ? quote[random]?.quote : '') : ''}
        </h2>

        <p id='author'>
          -{' '}
          {quote
            ? quote[random]?.author
              ? quote[random]?.author
              : 'Unknown'
            : ''}
        </p>

        <button
          id='new-quote'
          type='button'
          onClick={() => {
            newQuote();
            newTheme();
            setFetchNew(Math.random());
          }}>
          New Quote
        </button>

        <a
          id='x-quote'
          title='Post this quote!'
          target='_blank'
          type='text/html'
          rel='noopener noreferrer nofollow external'
          href={`
          ${X_URL}"${quote ? quote[random]?.quote : ''}"${
            quote
              ? quote[random]?.author
                ? ' - ' + quote[random]?.author
                : ''
              : ''
          } > via ${DEPLOY_URL} %23quotes`}>
          <FontAwesomeIcon icon={faSquareXTwitter} />
        </a>
      </div>
    </>
  );
};
