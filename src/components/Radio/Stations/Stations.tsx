import React from 'react';
import { Accordion } from 'react-accessible-accordion';
import styles from './stations.module.css';
import DisplayStation from './DisplayStation/DisplayStation';

interface Station {
  key: number;
  name: string;
  frequency: number;
  coverImage: string;
}
interface Props {
  stations?: Station[];
  onChange: (e: string[]) => void;
}

// stations displays the stations received from parent component (radio).
// name of the Accordion package "react-accessible-accordion"
const Stations: React.FC<Props> = ({ stations, onChange }) => (
  <div data-testid='stations' className={styles.Container}>
    <div data-testid='stationsContainer' className={styles.Stations}>
      <Accordion
        data-testid='accordion'
        allowZeroExpanded
        onChange={(e) => onChange(e)}>
        {stations &&
          stations.map((station) => (
            <DisplayStation key={station.key} station={station} />
          ))}
      </Accordion>
    </div>
  </div>
);

export default Stations;
