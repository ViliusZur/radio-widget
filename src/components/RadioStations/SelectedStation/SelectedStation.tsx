import React from 'react';
import styles from './selectedStation.module.scss';

// import images
import minus from '../../../assets/icons/minus.webp';
import plus from '../../../assets/icons/plus.webp';

// interfaces
interface Props {
  station: { name: string; coverImage: string } | null;
}

// displays buttons and an image for an expanded selected station
const SelectedStation: React.FC<Props> = ({ station }) => {
  if (station) {
    return (
      <div data-testid="selectedStation" className={styles.Container}>
        <div data-testid="items" className={styles.Items}>
          <button data-testid="btn1" className={styles.Invisible}>
            <img data-testid="minus" className={styles.PlusMinus} src={minus} alt="minus" />
          </button>
          <img
            data-testid="stationImage"
            className={styles.StationImage}
            src={station.coverImage}
            alt={station.name}
          />
          <button data-testid="btn2" className={styles.Invisible}>
            <img data-testid="plus" className={styles.PlusMinus} src={plus} alt="plus" />
          </button>
        </div>
      </div>
    );
  } else {
    return <></>;
  }
};

export default SelectedStation;
