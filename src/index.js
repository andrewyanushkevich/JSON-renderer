/* istanbul ignore file */
import React from 'react';
import ReactDOM from 'react-dom';

import * as serviceWorker from './serviceWorker';
import App from './App';

ReactDOM.hydrate(<App />, document.getElementById('root'));

serviceWorker.register();
