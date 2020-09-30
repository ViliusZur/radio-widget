import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

import './styles/index.css';
import retrieveData from './lib/retrieveData';
import Radio from './components/Radio/Radio';

interface Station {
  key: number;
  name: string;
  frequency: number;
  coverImage: string;
}

const stations: Station[] = retrieveData(); // get stations

ReactDOM.render(
  <React.StrictMode>
    <div className='Centered'>
      <Radio stations={stations} />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.register();
