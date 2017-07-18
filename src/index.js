import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Converter from './Converter';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <div>
        <App />
        <Converter />
    </div>,
    document.getElementById('root')
);
registerServiceWorker();
