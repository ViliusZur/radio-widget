import React from 'react';
import styles from './radioWidget.module.scss';

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
interface PropsType {
  stations: Station[] | null;
}
interface StateType {
  selectedStation: Station | null;
}

// radio widget is the main component, it holds the state of the widget.
export default class RadioWidget extends React.Component<PropsType, StateType> {
  constructor(props: PropsType) {
    super(props);
  }

  state: StateType = {
    selectedStation: null,
  };

  selectStation = (keyArr: string[]) => {
    // updates state with the selected station
    if (this.props.stations) {
      const key: number = parseInt(keyArr[0]); // get the key in number type
      const index: number = this.props.stations.findIndex((x) => x.key === key); // find object in array with the key
      const station = this.props.stations[index];

      this.setState(() => ({
        selectedStation: station,
      }));
    }
  };

  render() {
    return (
      <>
        <div data-testid="widget" className={styles.Container}>
          <TitleBar />
          <RadioStations stations={this.props.stations} onChange={this.selectStation} />
          <CurrentlyPlaying station={this.state.selectedStation} />
        </div>
      </>
    );
  }
}
