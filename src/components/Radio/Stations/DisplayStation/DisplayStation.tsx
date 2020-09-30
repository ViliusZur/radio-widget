import React from 'react';
import { AccordionItem, AccordionItemButton, AccordionItemPanel } from 'react-accessible-accordion';
import styles from './displayStations.module.css';
import SelectedStation from '../SelectedStation/SelectedStation';

interface Station {
  key: number;
  name: string;
  frequency: number;
  coverImage: string;
}
interface Props {
  station: Station;
}

// displays a single station using accordion item. When selected, the station expands showing plus, minus buttons and a picture
const DisplayStation: React.FC<Props> = ({ station }) => (
  <AccordionItem
    data-testid={`accordionItem-${station.key}`}
    uuid={`${station.key}`}
    className={styles.Child}>
    <AccordionItemPanel data-testid="accordionItemPanel" className={styles.AccordionPanel}>
      <SelectedStation station={station} />
    </AccordionItemPanel>
    <AccordionItemButton data-testid={`accordionBtn-${station.key}`} className={styles.Station}>
      {station.name}
      <div data-testid="frequency" className={styles.number}>
        {station.frequency}
      </div>
    </AccordionItemButton>
  </AccordionItem>
);

export default DisplayStation;
