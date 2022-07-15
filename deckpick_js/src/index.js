// Library imports.
import React from 'react';
import ReactDOM from 'react-dom/client';

// Component imports.
import App from './views/App';
import StackState from './states/stackState';

window.React = React;
window.model = new StackState;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App stack_state={window.model} />
  </React.StrictMode>
);
