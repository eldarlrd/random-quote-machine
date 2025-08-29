import { faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faQuoteLeft, faRotate } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState, type ReactElement } from 'react';

import '@/styles/features/cards/Quote.scss';
import { COLORS } from '%/colors.ts';
import { type QuoteObject, quoteSchema } from '%/schemas.ts';
import { useApi } from '@/hooks/useApi.ts';

const QUOTE_KEY = '/v1/quotes';
const X_URL = 'https://x.com/intent/post?text=';
const SITE_URL = 'eldarlrd.is-a.dev/random-quote-machine';

const initialState: QuoteObject = {
  quote: undefined,
  author: undefined,
  category: undefined
};

const getRandomTheme = (): number => Math.floor(Math.random() * COLORS.length);

export const Quote = (): ReactElement => {
  const [theme, setTheme] = useState(getRandomTheme());

  const {
    data: quoteSet = [initialState],
    isRefetching,
    isFetching,
    refetch
  } = useApi<QuoteObject[]>(QUOTE_KEY, quoteSchema);

  // Theme Switch
  useEffect(() => {
    const root = document.documentElement;

    root.style.setProperty('--foreground', COLORS[theme].foreground);
    root.style.setProperty('--background', COLORS[theme].background);
  }, [theme]);

  // New Quote
  useEffect(() => {
    if (!isRefetching) {
      let newTheme = getRandomTheme();

      while (newTheme === theme) newTheme = getRandomTheme();

      setTheme(newTheme);
    }
  }, [isRefetching]); // eslint-disable-line react-hooks/exhaustive-deps

  const { quote = 'Loading...', author = 'Unknown' } = quoteSet[0]; // Always a single element

  return (
    <main>
      <figure>
        <figcaption>
          <h3>
            <FontAwesomeIcon icon={faQuoteLeft} size='lg' />
            <blockquote>{quote}</blockquote>
          </h3>

          <q>- {author}</q>
        </figcaption>

        <footer>
          <a
            target='_blank'
            title='Share'
            type='text/html'
            rel='external noreferrer'
            href={`${X_URL}"${quote}" - ${author} %7C ${SITE_URL} %23quotes`}>
            <FontAwesomeIcon icon={faXTwitter} size='lg' />
          </a>

          <button
            type='button'
            disabled={isFetching}
            onClick={() => void refetch()}>
            <FontAwesomeIcon icon={faRotate} size='lg' spin={isFetching} />
            <span>New</span>
          </button>
        </footer>
      </figure>
    </main>
  );
};
