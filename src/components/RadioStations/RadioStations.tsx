import React from 'react';
import { Accordion } from 'react-accessible-accordion';
import styles from './radioStations.module.scss';

// import components
import DisplayStation from './DisplayStation/DisplayStation';

// interface for props
interface Props {
	stations: {
		key: number;
		name: string;
		frequency: number;
		coverImage: string;
	}[];
	onChange: (e: string[]) => void;
}

// radio stations displays the stations received from parent component (radio widget)
// name of the Accordion package "react-accessible-accordion"
const RadioStations: React.FC<Props> = ({ stations, onChange }) => (
	<>
		<div className={styles.Container}>
			<div className={styles.StationsContainer}>
				<Accordion allowZeroExpanded onChange={(e) => onChange(e)}>
					{stations.map((station) => (
						<DisplayStation key={station.key} station={station} />
					))}
				</Accordion>
			</div>
		</div>
	</>
);

export default RadioStations;
