import React from 'react';
import styles from './radioStations.module.scss';

// interface for props
interface Props {
	stations: { name: string; number: number }[];
	onClick: (name: string, number: number) => void;
}

const RadioStations: React.FC<Props> = ({ stations, onClick }) => (
	<>
		<div className={styles.Container}>
			<div className={styles.StationsContainer}>
				{stations.map((station, i) => (
					<button
						key={`button ${i}`}
						className={styles.Station}
						onClick={() => onClick(station.name, station.number)}
					>
						{station.name}
						<div key={`div ${i}`} className={styles.number}>
							{station.number}
						</div>
					</button>
				))}
			</div>
		</div>
	</>
);

export default RadioStations;
