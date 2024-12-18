import { faQuoteLeft, faRotate } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState, type ReactElement } from 'react';

import '@/styles/features/cards/Quote.scss';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons';
import axios from 'axios';

import { COLORS } from '%/colors.ts';

const API_KEY = '';
const DEPLOY_URL = 'eldarlrd.github.io/random-quote-machine';
const X_URL = 'https://twitter.com/intent/tweet?text=';

export const Quote = (): ReactElement => {
  const [quote, setQuote] = useState(null);
  // const { data = [], isLoading } = useApi(pathname, SCHEMAS.albums);

  // Random Quote
  const [random, setRandom] = useState(null);
  const rollQuote = Math.floor(Math.random() * quote?.length); // API Length
  const newQuote = () => {
    setRandom(rollQuote);
  };

  // Random Theme
  const rollTheme = Math.floor(Math.random() * COLORS.length);
  const [theme, setTheme] = useState(rollTheme);
  const newTheme = () => {
    setTheme(rollTheme);
  };

  // Style Changer
  useEffect(() => {
    const root = document.documentElement;

    root.style.setProperty(
      '--primary',
      theme ? COLORS[theme].primary : COLORS[theme].primary
    );

    root.style.setProperty(
      '--secondary',
      theme ? COLORS[theme].secondary : COLORS[theme].secondary
    );
  }, [theme]);

  useEffect(() => {
    if (quote) newQuote();
  }, [quote]);

  return (
    <main>
      <figure>
        <figcaption>
          <h3>
            <FontAwesomeIcon icon={faQuoteLeft} size='xl' />
            <blockquote>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vel
              ligula dignissim ante fermentum finibus.
            </blockquote>
          </h3>

          <q>- Unknown</q>
        </figcaption>

        <footer>
          <button type='button' title='Share'>
            <FontAwesomeIcon icon={faXTwitter} size='lg' />
          </button>
          <button type='button'>
            <FontAwesomeIcon icon={faRotate} size='lg' />
            <span>New</span>
          </button>
        </footer>
      </figure>
    </main>
  );
};

// <div id='quote-box'>
//   <h2 id='text'>
//     <FontAwesomeIcon icon={faQuoteLeft} />{' '}
//     {quote ?
//       quote[random]?.quote ?
//         quote[random]?.quote
//       : ''
//     : ''}
//   </h2>

//   <p id='author'>
//     -{' '}
//     {quote ?
//       quote[random]?.author ?
//         quote[random]?.author
//       : 'Unknown'
//     : ''}
//   </p>

//   <button
//     id='new-quote'
//     type='button'
//     onClick={() => {
//       newQuote();
//       newTheme();
//       setFetchNew(Math.random());
//     }}>
//     New Quote
//   </button>

//   <a
//     id='x-quote'
//     title='Post this quote!'
//     target='_blank'
//     type='text/html'
//     rel='noopener noreferrer nofollow external'
//     href={`
//         ${X_URL}"${quote ? quote[random]?.quote : ''}"${
//           quote ?
//             quote[random]?.author ?
//               ' - ' + quote[random]?.author
//             : ''
//           : ''
//         } > via ${DEPLOY_URL} %23quotes`}>
//     <FontAwesomeIcon icon={faSquareXTwitter} />
//   </a>
// </div>
