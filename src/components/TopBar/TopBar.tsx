import React from 'react';
import styles from './topBar.module.scss';

const TopBar: React.FC = () => (
	<>
		<div className={styles.Container}>
			<img src="/icons/back-arrow.webp" alt="back-arrow" />
			<div className={styles.Text}>stations</div>
			<img src="/icons/switch.webp" alt="switch" />
		</div>
	</>
);

export default TopBar;
