import { type ReactElement } from 'react';
import '@/styles/features/banners/Header.scss';

const SOURCE_URL = 'https://github.com/eldarlrd/random-quote-machine';

export const Header = (): ReactElement => (
  <header>
    <h1>Random Quote Machine</h1>

    <h2>
      © 2022 - 2024
      <a
        title='Source'
        target='_blank'
        type='text/html'
        rel='author external noreferrer'
        href={SOURCE_URL}>
        eldarlrd
      </a>
    </h2>
  </header>
);
