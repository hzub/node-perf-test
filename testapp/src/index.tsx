import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { moduleSetsFn } from './moduleSets';

// Include reference to module sets so it will be surely included in the input file set
console.info(typeof moduleSetsFn);

ReactDOM.render(<App />, document.getElementById('root'));
