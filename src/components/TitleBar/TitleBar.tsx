import React from 'react';
import styles from './titleBar.module.scss';

// import images
import backArrow from '../../assets/icons/back-arrow.webp';
import switchButton from '../../assets/icons/switch.webp';

// this component displays the orange top bar with buttons and "stations" text
// it is a static component

const TopBar: React.FC = () => (
  <div data-testid="titleBar" className={styles.Container}>
    <div data-testid="items" className={styles.Items}>
      <button data-testid="backBtn" className={styles.Invisible}>
        <img data-testid="backArrow" className={styles.Buttons} src={backArrow} alt="back-arrow" />
      </button>
      <div data-testid="title" className={styles.Text}>
        stations
      </div>
      <button data-testid="switchBtn" className={styles.Invisible}>
        <img data-testid="switch" className={styles.Buttons} src={switchButton} alt="switch" />
      </button>
    </div>
  </div>
);

export default TopBar;
