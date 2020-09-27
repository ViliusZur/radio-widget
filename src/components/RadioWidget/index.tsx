import React from 'react';

import styles from './radioWidget.module.scss';
import TopBar from '../TopBar';
import RadioStations from '../RadioStations';

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
						names={['Station One', 'Station Two', 'Station Three']}
						numbers={[96.2, 45.0, 106.3]}
					/>
				</div>
			</>
		);
	}
}
