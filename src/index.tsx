import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

import './styles/index.scss';
import RadioWidget from './components/RadioWidget/RadioWidget';

// radio widget is the main component, it collects all other components
// it is wrapped in a div "Centered" so it would be in the center of the screen

ReactDOM.render(
	<React.StrictMode>
		<div className="Centered">
			<RadioWidget />
		</div>
	</React.StrictMode>,
	document.getElementById('root')
);

serviceWorker.unregister();
