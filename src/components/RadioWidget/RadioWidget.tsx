import React from 'react';

// import components
import styles from './radioWidget.module.scss';
import TopBar from '../TitleBar/TitleBar';
import RadioStations from '../RadioStations/RadioStations';
import CurrentlyPlaying from '../CurrentlyPlaying/CurrentlyPlaying';

// interfaces
interface Station {
	key: number;
	name: string;
	number: number;
	image: string;
}
interface MyState {
	selectedStation: Station | null;
}

// list of stations. CHANGE TO JSON
const stations: Station[] = [
	{ key: 1, name: 'Station One', number: 96.3, image: '/stations/one.jpg' },
	{ key: 2, name: 'Station Two', number: 98, image: '/stations/two.jpg' },
	{ key: 3, name: 'Station Three', number: 89.5, image: '/stations/three.jpg' },
	{ key: 4, name: 'Station Four', number: 100.2, image: '/stations/four.jpg' },
	{ key: 5, name: 'Station Five', number: 112.5, image: '/stations/one.jpg' },
	{ key: 6, name: 'Station Six', number: 95.2, image: '/stations/two.jpg' },
	{ key: 7, name: 'Station Seven', number: 87.8, image: '/stations/three.jpg' },
	{ key: 8, name: 'Station Eight', number: 99.8, image: '/stations/four.jpg' },
];

// radio widget is the main component, it holds the state of the widget.
export default class RadioWidget extends React.Component {
	state: MyState = {
		selectedStation: null,
	};

	selectStation = (keyArr: string[]) => {
		// updates state with the selected station

		const key: number = parseInt(keyArr[0]); // get the key in number type
		const index: number = stations.findIndex((x) => x.key === key); // find object in array with the key

		this.setState(() => ({
			selectedStation: stations[index],
		}));
	};

	render() {
		return (
			<>
				<div className={styles.Container}>
					<TopBar />
					<RadioStations stations={stations} onChange={this.selectStation} />
					<CurrentlyPlaying station={this.state.selectedStation} />
				</div>
			</>
		);
	}
}
