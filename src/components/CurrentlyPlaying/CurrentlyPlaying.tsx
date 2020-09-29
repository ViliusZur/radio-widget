import React from 'react';
import styles from './currentlyPlaying.module.scss';

// interfaces
interface Props {
  station: { name: string } | null;
}

// displays a selected station in the footer area of the widget
const CurrentlyPlaying: React.FC<Props> = ({ station }) => {
  if (station) {
    // display the name of the selected station
    return (
      <>
        <div data-testid="currentlyPlaying" className={styles.Container}>
          <div data-testid="textContainer" className={styles.Text}>
            <div data-testid="currentlyPlayingText" className={styles.currentlyPlaying}>
              currently playing
            </div>
            <div data-testid="stationName" className={styles.name}>
              {station.name}
            </div>
          </div>
        </div>
      </>
    );
  } else {
    // don't display a station if nothing is selected
    return <div data-testid="currentlyPlaying" className={styles.Container} />;
  }
};

export default CurrentlyPlaying;
