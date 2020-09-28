import React from 'react';
import styles from './radioWidget.module.scss';
import data from '../../assets/data/stations.json';

// import components
import TitleBar from '../TitleBar/TitleBar';
import RadioStations from '../RadioStations/RadioStations';
import CurrentlyPlaying from '../CurrentlyPlaying/CurrentlyPlaying';

// interfaces
interface Station {
	key: number;
	name: string;
	frequency: number;
	coverImage: string;
}
interface MyState {
	selectedStation: Station | null;
}

let stations: Station[] = [...data.stations];
console.log('stations', stations);

/*
// list of stations. CHANGE TO JSON
const stations: Station[] = [
	{
		key: 1,
		name: 'Station One',
		frequency: 96.3,
		coverImage: '/stations/one.jpg',
	},
	{
		key: 2,
		name: 'Station Two',
		frequency: 98,
		coverImage: '/stations/two.jpg',
	},
	{
		key: 3,
		name: 'Station Three',
		frequency: 89.5,
		coverImage: '/stations/three.jpg',
	},
	{
		key: 4,
		name: 'Station Four',
		frequency: 100.2,
		coverImage: '/stations/four.jpg',
	},
	{
		key: 5,
		name: 'Station Five',
		frequency: 112.5,
		coverImage: '/stations/one.jpg',
	},
	{
		key: 6,
		name: 'Station Six',
		frequency: 95.2,
		coverImage: '/stations/two.jpg',
	},
	{
		key: 7,
		name: 'Station Seven',
		frequency: 87.8,
		coverImage: '/stations/three.jpg',
	},
	{
		key: 8,
		name: 'Station Eight',
		frequency: 99.8,
		coverImage: '/stations/four.jpg',
	},
];
*/
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
					<TitleBar />
					<RadioStations stations={stations} onChange={this.selectStation} />
					<CurrentlyPlaying station={this.state.selectedStation} />
				</div>
			</>
		);
	}
}
