import React from './mini-react.js';
import App from './App.js'

React.render(
  // <App title="Fiber Demo"/>,
  React.createElement(App, {
    title: "Fiber Demo"
  }),
  document.getElementById('root')
);