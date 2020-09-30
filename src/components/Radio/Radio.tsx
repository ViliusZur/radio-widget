import React, { useState } from 'react';
import styles from './radio.module.css';
import backArrow from '../../assets/icons/back-arrow.webp';
import switchButton from '../../assets/icons/switch.webp';
import IconButton from '../Common/IconButton/IconButton';
import Stations from './Stations/Stations';

interface Station {
  key: number;
  name: string;
  frequency: number;
  coverImage: string;
}
interface Props {
  stations?: Station[];
}

const Radio: React.FC<Props> = ({ stations }) => {
  const [selectedStation, setSelectedStation] = useState({ name: '' });

  const selectStation = (keyArr: string[]) => {
    if (stations) {
      const key: number = parseInt(keyArr[0]); // get the key in number type
      const index: number = stations.findIndex((x) => x.key === key); // find object in array with the key
      const station = stations[index];
      setSelectedStation(station);
    }
  };

  return (
    <div>
      <div data-testid="titleBar" className={styles.TitleContainer}>
        <div className={styles.Items}>
          <IconButton testid="back-arrow" src={backArrow} alt="back-arrow" />
          stations
          <IconButton testid="switch" src={switchButton} alt="switch" />
        </div>
      </div>
      <Stations stations={stations} onChange={selectStation} />
      <div data-testid="currentlyPlaying" className={styles.CurrentlyPlaying}>
        {selectedStation && selectedStation.name && (
          <div data-testid="currentlyPlayingText" className={styles.currentlyPlaying}>
            <span>currently playing</span> {selectedStation.name}
          </div>
        )}
      </div>
    </div>
  );
};

export default Radio;
