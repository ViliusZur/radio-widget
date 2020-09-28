import React from 'react';
import styles from './currentlyPlaying.module.scss';

// interface for props
interface Props {
	station: { name: string } | null;
}

// displays a selected station in the footer area of the widget
const CurrentlyPlaying: React.FC<Props> = ({ station }) => {
	if (station) {
		// display the name of the selected station
		return (
			<>
				<div className={styles.Container}>
					<div className={styles.Text}>
						<div className={styles.currentlyPlaying}>currently playing </div>
						<div className={styles.name}>{station.name}</div>
					</div>
				</div>
			</>
		);
	} else {
		// don't display a station if nothing is selected
		return <div className={styles.Container} />;
	}
};

export default CurrentlyPlaying;
