import React from 'react';
import { Accordion } from 'react-accessible-accordion';
import styles from './radioStations.module.scss';

// import components
import DisplayStation from './DisplayStation/DisplayStation';

// interfaces
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

// radio stations displays the stations received from parent component (radio widget)
// name of the Accordion package "react-accessible-accordion"
const RadioStations: React.FC<Props> = ({ stations, onChange }) => {
  if (stations) {
    // display stations
    return (
      <div data-testid="radioStations" className={styles.Container}>
        <div data-testid="stationsContainer" className={styles.StationsContainer}>
          <Accordion data-testid="accordion" allowZeroExpanded onChange={(e) => onChange(e)}>
            {stations.map((station) => (
              <DisplayStation key={station.key} station={station} />
            ))}
          </Accordion>
        </div>
      </div>
    );
  } else {
    // display only the container if no stations are passed as props
    return <div data-testid="radioStations" className={styles.Container} />;
  }
};

export default RadioStations;
