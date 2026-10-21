import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './containers/App/App';

import './theme/index.css';

const rootElement = document.getElementById('root');
createRoot(rootElement).render(<App />);
