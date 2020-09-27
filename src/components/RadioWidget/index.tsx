import React from 'react';

import styles from './radioWidget.module.scss';
import TopBar from '../TopBar';
import RadioStations from '../RadioStations';
import CurrentlyPlaying from '../CurrentlyPlaying';

interface MyState {
	selectedStation: string | null;
}

export default class RadioWidget extends React.Component {
	state: MyState = {
		selectedStation: null,
	};

	render() {
		return (
			<>
				<div className={styles.Container}>
					<TopBar />
					<RadioStations
						names={[
							'Station One',
							'Station Two',
							'Station Three',
							'Station Four',
							'Station Five',
							'Station Six',
							'Station Seven',
							'Station Eight',
						]}
						numbers={[96.2, 45.0, 106.3, 50, 89.5, 90, 112.2, 87]}
					/>
					<CurrentlyPlaying name={'null'} />
				</div>
			</>
		);
	}
}
