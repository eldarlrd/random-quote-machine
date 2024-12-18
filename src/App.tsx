import '@/App.scss';
import '@fontsource-variable/cormorant/index.css';
import 'modern-normalize/modern-normalize.css';
import { type ReactElement } from 'react';

import { Header } from '@/features/banners/Header.tsx';
import { Quote } from '@/features/cards/Quote.tsx';

export const App = (): ReactElement => (
  <>
    <Header />
    <Quote />
  </>
);
