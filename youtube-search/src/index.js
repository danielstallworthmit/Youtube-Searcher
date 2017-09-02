import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.css';
import SearchBar from './components/search_bar';
import registerServiceWorker from './registerServiceWorker';
import YOUTUBE_KEY from './app-env'
console.log(YOUTUBE_KEY)



ReactDOM.render(<SearchBar />, document.getElementById('root'));
registerServiceWorker();
