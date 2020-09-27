import React from 'react';
import styles from './currentlyPlaying.module.scss';

interface Props {
	name: string | null;
}

const CurrentlyPlaying: React.FC<Props> = ({ name }) => {
	if (!name) {
		return <div className={styles.Container} />;
	} else {
		return (
			<>
				<div className={styles.Container}>
					<div className={styles.Text}>
						<div className={styles.currentlyPlaying}>currently playing </div>
						<div className={styles.name}>{name}</div>
					</div>
				</div>
			</>
		);
	}
};

export default CurrentlyPlaying;
