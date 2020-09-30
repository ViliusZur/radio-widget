import React from 'react';
import styles from './selectedStation.module.css';
import minus from '../../../../assets/icons/minus.webp';
import plus from '../../../../assets/icons/plus.webp';
import IconButton from '../../../Common/IconButton/IconButton';

interface Props {
  station: { name: string; coverImage: string };
}

// displays buttons and an image for an expanded selected station
const SelectedStation: React.FC<Props> = ({ station }) => (
  <div data-testid="selectedStation" className={styles.Items}>
    <IconButton testid="minus" src={minus} alt="minus" />
    <img
      data-testid="stationImage"
      className={styles.StationImage}
      src={station.coverImage}
      alt={station.name}
    />
    <IconButton testid="plus" src={plus} alt="plus" />
  </div>
);

export default SelectedStation;
