// Library imports.
import React from 'react';
import ReactDOM from 'react-dom/client';

// Component imports.
import App from './views/App';
import { ApplicationState } from './models/applicationState';

window.React = React;

const application_state = new ApplicationState();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App application_state={application_state} />
  </React.StrictMode>
);
