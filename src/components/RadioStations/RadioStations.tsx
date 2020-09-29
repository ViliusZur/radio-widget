import React from 'react';
import { Accordion } from 'react-accessible-accordion';
import styles from './radioStations.module.scss';

// import components
import DisplayStation from './DisplayStation/DisplayStation';

// interfaces
interface Props {
  stations:
    | {
        key: number;
        name: string;
        frequency: number;
        coverImage: string;
      }[]
    | null;
  onChange: (e: string[]) => void;
}

// radio stations displays the stations received from parent component (radio widget)
// name of the Accordion package "react-accessible-accordion"
const RadioStations: React.FC<Props> = ({ stations, onChange }) => {
  if (stations) {
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
    return <div data-testid="radioStations" className={styles.Container} />;
  }
};

export default RadioStations;
