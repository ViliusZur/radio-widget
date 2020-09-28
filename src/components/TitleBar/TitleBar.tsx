import React from 'react';
import styles from './titleBar.module.scss';

// this component displays the orange top bar with buttons and "stations" text
// it is a static component

const TopBar: React.FC = () => (
	<>
		<div className={styles.Container}>
			<div className={styles.Items}>
				<button className={styles.Invisible}>
					<img
						className={styles.Buttons}
						src="/icons/back-arrow.webp"
						alt="back-arrow"
					/>
				</button>
				<div className={styles.Text}>stations</div>
				<button className={styles.Invisible}>
					<img
						className={styles.Buttons}
						src="/icons/switch.webp"
						alt="switch"
					/>
				</button>
			</div>
		</div>
	</>
);

export default TopBar;
