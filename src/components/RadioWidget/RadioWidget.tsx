import React from 'react';

// import components
import styles from './radioWidget.module.scss';
import TopBar from '../TopBar/TopBar';
import RadioStations from '../RadioStations/RadioStations';
import CurrentlyPlaying from '../CurrentlyPlaying/CurrentlyPlaying';

// interface for state
interface MyState {
	selectedStationName: string | null;
	selectedStationNumber: number | null;
}

// list of stations. CHANGE TO JSON
const stations: { name: string; number: number }[] = [
	{ name: 'Station One', number: 96.3 },
	{ name: 'Station Two', number: 98 },
	{ name: 'Station Three', number: 89.5 },
	{ name: 'Station Four', number: 100.2 },
	{ name: 'Station Five', number: 112.5 },
	{ name: 'Station Six', number: 95.2 },
	{ name: 'Station Seven', number: 87.8 },
	{ name: 'Station Eight', number: 99.8 },
];

export default class RadioWidget extends React.Component {
	state: MyState = {
		selectedStationName: null,
		selectedStationNumber: null,
	};

	selectStation = (name: string, number: number) => {
		// updates state with the selected station
		this.setState(() => ({
			selectedStationName: name,
			selectedStationNumber: number,
		}));
	};

	render() {
		return (
			<>
				<div className={styles.Container}>
					<TopBar />
					<RadioStations stations={stations} onClick={this.selectStation} />
					<CurrentlyPlaying name={this.state.selectedStationName} />
				</div>
			</>
		);
	}
}
