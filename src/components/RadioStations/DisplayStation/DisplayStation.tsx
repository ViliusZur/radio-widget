import React from 'react';
import {
	AccordionItem,
	AccordionItemButton,
	AccordionItemPanel,
} from 'react-accessible-accordion';
import styles from './displayStations.module.scss';

// import components
import SelectedStation from '../SelectedStation/SelectedStation';

// interfaces
interface Props {
	station: { key: number; name: string; number: number; image: string };
}

// displays a single station using accordion item. When selected, the station expands showing plus, minus buttons and a picture
const DisplayStation: React.FC<Props> = ({ station }) => (
	<>
		<AccordionItem uuid={`${station.key}`}>
			<AccordionItemPanel className={styles.Accordion_panel}>
				<SelectedStation station={station} />
			</AccordionItemPanel>
			<AccordionItemButton className={styles.Station}>
				{station.name}
				<div className={styles.number}>{station.number}</div>
			</AccordionItemButton>
		</AccordionItem>
	</>
);

export default DisplayStation;
