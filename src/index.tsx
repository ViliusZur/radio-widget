import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

import './styles/index.scss';
import data from './assets/data/stations.json';
import RadioWidget from './components/RadioWidget/RadioWidget';

// interfaces
interface Station {
  key: number;
  name: string;
  frequency: number;
  coverImage: string;
}

// get stations from imported data
let stations: Station[] = [...data.stations];

// radio widget is the main component, it collects all other components
// it is wrapped in a div "Centered" so it would be in the center of the screen
ReactDOM.render(
  <React.StrictMode>
    <div className="Centered">
      <RadioWidget stations={stations} />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
