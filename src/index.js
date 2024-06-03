import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import Auth0 from './Auth/Auth0'
import App from './App';

const root = createRoot(document.getElementById('root'));

root.render(
  <Router>
    <Auth0>
      <App />
    </Auth0>
  </Router>
);
