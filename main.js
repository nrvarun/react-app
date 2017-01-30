import React from 'react';
import ReactDom from 'react-dom';

import App from './js/app.jsx';

require('./css/style.scss');

ReactDom.render(<App />, document.getElementById('app'));
