import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/App';

// Replace ReactDOM.render with createRoot
const rootElement = document.getElementById('root');
createRoot(rootElement).render(<App />);
