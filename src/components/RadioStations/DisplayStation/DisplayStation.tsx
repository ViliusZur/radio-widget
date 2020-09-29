import React from 'react';
import { AccordionItem, AccordionItemButton, AccordionItemPanel } from 'react-accessible-accordion';
import styles from './displayStations.module.scss';

// import components
import SelectedStation from '../SelectedStation/SelectedStation';

// interfaces
interface Props {
  station: { key: number; name: string; frequency: number; coverImage: string } | null;
}

// displays a single station using accordion item. When selected, the station expands showing plus, minus buttons and a picture
const DisplayStation: React.FC<Props> = ({ station }) => {
  if (station) {
    return (
      <div data-testid={`station-${station.key}`}>
        <AccordionItem
          data-testid="accordionItem"
          className={styles.AccordionItem}
          id={`${station.key}`}
          uuid={`${station.key}`}>
          <AccordionItemPanel data-testid="accordionItemPanel" className={styles.AccordionPanel}>
            <SelectedStation station={station} />
          </AccordionItemPanel>
          <AccordionItemButton data-testid="accordionItemBtn" className={styles.Station}>
            {station.name}
            <div data-testid="frequency" className={styles.number}>
              {station.frequency}
            </div>
          </AccordionItemButton>
        </AccordionItem>
      </div>
    );
  } else {
    return <></>;
  }
};

export default DisplayStation;
