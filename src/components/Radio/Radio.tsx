import React from 'react';
import styles from './radio.module.css';
import backArrow from '../../assets/icons/back-arrow.webp';
import switchButton from '../../assets/icons/switch.webp';
import IconButton from '../Common/IconButton/IconButton';
import Stations from './Stations/Stations';

interface Station {
  key: number;
  name: string;
  frequency: number;
  coverImage: string;
}
interface PropsType {
  stations?: Station[];
}
interface StateType {
  selectedStation?: Station;
}

// radio widget is the main component, it holds the state of the widget.
export default class RadioWidget extends React.Component<PropsType, StateType> {
  constructor(props: PropsType) {
    super(props);
  }

  state: StateType = {
    selectedStation: undefined,
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
    const allStations = this.props.stations;
    const station = this.state.selectedStation;
    return (
      <div>
        <div data-testid="titleBar" className={styles.TitleContainer}>
          <div className={styles.Items}>
            <IconButton src={backArrow} alt={'back-arrow'} />
            stations
            <IconButton src={switchButton} alt="switch" />
          </div>
        </div>
        <Stations stations={allStations} onChange={this.selectStation} />
        <div data-testid="currentlyPlaying" className={styles.CurrentlyPlaying}>
          {station && (
            <>
              <div data-testid="currentlyPlayingText" className={styles.currentlyPlaying}>
                currently playing
              </div>
              {station.name}
            </>
          )}
        </div>
      </div>
    );
  }
}
