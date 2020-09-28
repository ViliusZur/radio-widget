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

// get stations from imported data
let stations: Station[] = [...data.stations];

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
