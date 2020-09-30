import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

import './styles/index.scss';
import retrieveData from './lib/retrieveData';
import Radio from './components/Radio/Radio';

interface Station {
  key: number;
  name: string;
  frequency: number;
  coverImage: string;
}

// get stations
let stations: Station[] = retrieveData();

// radio widget is the main component, it collects all other components
// it is wrapped in a div "Centered" so it would be in the center of the screen
ReactDOM.render(
  <React.StrictMode>
    <div className="Centered">
      <Radio stations={stations} />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.register();
