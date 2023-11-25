/**
 * @license AGPL-3.0-only
 * Random Quote Machine - A Random Quote Machine
 * Copyright (C) 2022-2023 Eldar Pashazade <eldarlrd@pm.me>
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

import React from 'react';
import ReactDOM from 'react-dom/client';

import { App } from './app.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
