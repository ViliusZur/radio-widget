import React from 'react';
import styles from './selectedStation.module.scss';

// interfaces
interface Props {
	station: { key: number; name: string; number: number; image: string };
}

// displays buttons and an image for an expanded selected station
const SelectedStation: React.FC<Props> = ({ station }) => (
	<>
		<div className={styles.Container}>
			<div className={styles.Items}>
				<button className={styles.Invisible}>
					<img
						className={styles.PlusMinus}
						src="/icons/minus.webp"
						alt="minus"
					/>
				</button>
				<img
					className={styles.StationImage}
					src={station.image}
					alt={station.name}
				/>
				<button className={styles.Invisible}>
					<img className={styles.PlusMinus} src="/icons/plus.webp" alt="plus" />
				</button>
			</div>
		</div>
	</>
);

export default SelectedStation;
