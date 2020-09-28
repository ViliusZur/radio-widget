import React from 'react';
import styles from './selectedStation.module.scss';

// import images
import minus from '../../../assets/icons/minus.webp';
import plus from '../../../assets/icons/plus.webp';

// interfaces
interface Props {
  station: { name: string; coverImage: string };
}

// displays buttons and an image for an expanded selected station
const SelectedStation: React.FC<Props> = ({ station }) => (
  <>
    <div className={styles.Container}>
      <div className={styles.Items}>
        <button className={styles.Invisible}>
          <img className={styles.PlusMinus} src={minus} alt="minus" />
        </button>
        <img className={styles.StationImage} src={station.coverImage} alt={station.name} />
        <button className={styles.Invisible}>
          <img className={styles.PlusMinus} src={plus} alt="plus" />
        </button>
      </div>
    </div>
  </>
);

export default SelectedStation;
