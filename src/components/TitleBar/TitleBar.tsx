import React from 'react';
import styles from './titleBar.module.scss';

// import images
import backArrow from '../../assets/icons/back-arrow.webp';
import switchButton from '../../assets/icons/switch.webp';

// this component displays the orange top bar with buttons and "stations" text
// it is a static component

const TopBar: React.FC = () => (
	<>
		<div className={styles.Container}>
			<div className={styles.Items}>
				<button className={styles.Invisible}>
					<img className={styles.Buttons} src={backArrow} alt="back-arrow" />
				</button>
				<div className={styles.Text}>stations</div>
				<button className={styles.Invisible}>
					<img className={styles.Buttons} src={switchButton} alt="switch" />
				</button>
			</div>
		</div>
	</>
);

export default TopBar;
