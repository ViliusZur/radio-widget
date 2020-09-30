import React from 'react';
import { AccordionItem, AccordionItemButton, AccordionItemPanel } from 'react-accessible-accordion';
import styles from './displayStations.module.scss';

// import components
import SelectedStation from '../SelectedStation/SelectedStation';

// interfaces
interface Station {
  key: number;
  name: string;
  frequency: number;
  coverImage: string;
}
interface Props {
  station?: Station;
}

// displays a single station using accordion item. When selected, the station expands showing plus, minus buttons and a picture
const DisplayStation: React.FC<Props> = ({ station }) => {
  if (station) {
    // display the station
    return (
      <div className={styles.Child} data-testid={`station-${station.key}`}>
        <AccordionItem
          data-testid={`accordionItem-${station.key}`}
          className={styles.AccordionItem}
          id={`${station.key}`}
          uuid={`${station.key}`}>
          <AccordionItemPanel data-testid="accordionItemPanel" className={styles.AccordionPanel}>
            <SelectedStation station={station} />
          </AccordionItemPanel>
          <AccordionItemButton
            data-testid={`accordionItemBtn-${station.key}`}
            className={styles.Station}>
            {station.name}
            <div data-testid="frequency" className={styles.number}>
              {station.frequency}
            </div>
          </AccordionItemButton>
        </AccordionItem>
      </div>
    );
  } else {
    // don't display if no station is passed as prop
    return <></>;
  }
};

export default DisplayStation;
