/**
 * @license AGPL-3.0-only
 * Random Quote Machine - A Random Quote Machine
 * Copyright (C) 2022-2025 Eldar Pashazade <eldarlrd@pm.me>
 *
 * This file is part of Random Quote Machine.
 *
 * Random Quote Machine is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, version 3.
 *
 * Random Quote Machine is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with Random Quote Machine. If not, see <https://www.gnu.org/licenses/>.
 */

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { App } from '@/App.tsx';

const root = document.getElementById('root');

const queryClient = new QueryClient();

if (root)
  createRoot(root).render(
    <StrictMode>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </StrictMode>
  );

const registerSW = (): void => {
  if ('serviceWorker' in navigator)
    window.addEventListener('load', () => {
      navigator.serviceWorker
        .register('/random-quote-machine/sw.js', {
          scope: '/random-quote-machine/'
        })
        .catch((error: unknown) => {
          if (error instanceof Error) console.error(error);
        });
    });
};

registerSW();
