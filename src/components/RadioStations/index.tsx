import React from 'react';
import styles from './radioStations.module.scss';

interface Props {
	names: string[];
	numbers: number[];
}

const RadioStations: React.FC<Props> = ({ names, numbers }) => (
	<>
		<div className={styles.Container}>
			<div className={styles.StationsContainer}>
				{names.map((name, i) => (
					<div className={styles.Station}>
						{name}
						<div className={styles.number}>{numbers[i]}</div>
					</div>
				))}
			</div>
		</div>
	</>
);

export default RadioStations;
