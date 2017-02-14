import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Provider from './components/Provider';

// Render the main component into the dom
ReactDOM.render(<Provider><App /></Provider>, document.getElementById('app'));
