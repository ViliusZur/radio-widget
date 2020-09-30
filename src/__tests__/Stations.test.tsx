import React from 'react';
import { render } from '@testing-library/react';
import RadioStations from '../components/Radio/Stations/Stations';

interface Station {
  key: number;
  name: string;
  frequency: number;
  coverImage: string;
}
interface Props {
  stations?: Station[];
  onChange: (e: string[]) => void;
}

// render helper function to handle props overriding
function renderRadioStations(props: Partial<Props> = {}) {
  const defaultProps: Props = { stations: undefined, onChange() {} }; // set default props
  return render(<RadioStations {...defaultProps} {...props} />);
}

describe('Stations', () => {
  test('Accordion and stationsContainer elements should be in the document', async () => {
    // render the component
    const { findByTestId, queryByTestId } = renderRadioStations();

    // get elements
    const radioStations = await findByTestId('stations');
    const stationsContainer = queryByTestId('stationsContainer');
    const accordion = queryByTestId('accordion');

    // perform assertions
    expect(radioStations).toBeInTheDocument();
    expect(stationsContainer).toBeInTheDocument();
    expect(accordion).toBeInTheDocument();
  });

  test('should display an Accordion and stationsContainer elements inside container div when passed station as prop', async () => {
    // render the component
    const { findByTestId } = renderRadioStations({
      stations: [
        { key: 1, name: 'station1', frequency: 1, coverImage: 'pathToImage' },
      ],
    });

    // get elements
    const radioStations = await findByTestId('stations');
    const stationsContainer = await findByTestId('stationsContainer');
    const accordion = await findByTestId('accordion');

    // perform assertions
    expect(radioStations).toBeInTheDocument();
    expect(radioStations).toContainElement(stationsContainer);
    expect(stationsContainer).toContainElement(accordion);
  });

  test('should display no stations when none are passed as props', async () => {
    // render the component
    const { queryByTestId } = renderRadioStations();

    // get elements
    const station1 = queryByTestId('accordionItem-1');
    const station2 = queryByTestId('accordionItem-2');
    const station3 = queryByTestId('accordionItem-3');

    // perform assertions
    expect(station1).not.toBeInTheDocument();
    expect(station2).not.toBeInTheDocument();
    expect(station3).not.toBeInTheDocument();
  });

  test('should display 3 stations with names "station1", "station2", "Station3" when passed as props', async () => {
    // render the component
    const { findByTestId } = renderRadioStations({
      stations: [
        { key: 1, name: 'station1', frequency: 1, coverImage: 'pathToImage' },
        { key: 2, name: 'station2', frequency: 2, coverImage: 'pathToImage' },
        { key: 3, name: 'station3', frequency: 3, coverImage: 'pathToImage' },
      ],
    });

    // get elements
    const station1 = await findByTestId('accordionItem-1');
    const station2 = await findByTestId('accordionItem-2');
    const station3 = await findByTestId('accordionItem-3');

    // perform assertions
    expect(station1).toBeInTheDocument();
    expect(station2).toBeInTheDocument();
    expect(station3).toBeInTheDocument();
    expect(station1).toHaveTextContent('station1');
    expect(station2).toHaveTextContent('station2');
    expect(station3).toHaveTextContent('station3');
  });

  //repeating test
  test('should display 6 stations with names "station1", "station2", "Station3", "station4", "station5", "Station6" when passed as props', async () => {
    // render the component
    const { findByTestId } = renderRadioStations({
      stations: [
        { key: 1, name: 'station1', frequency: 1, coverImage: 'pathToImage' },
        { key: 2, name: 'station2', frequency: 2, coverImage: 'pathToImage' },
        { key: 3, name: 'station3', frequency: 3, coverImage: 'pathToImage' },
        { key: 4, name: 'station4', frequency: 4, coverImage: 'pathToImage' },
        { key: 5, name: 'station5', frequency: 5, coverImage: 'pathToImage' },
        { key: 6, name: 'station6', frequency: 6, coverImage: 'pathToImage' },
      ],
    });

    // get elements
    const station1 = await findByTestId('accordionItem-1');
    const station2 = await findByTestId('accordionItem-2');
    const station3 = await findByTestId('accordionItem-3');
    const station4 = await findByTestId('accordionItem-4');
    const station5 = await findByTestId('accordionItem-5');
    const station6 = await findByTestId('accordionItem-6');

    // perform assertions
    expect(station1).toBeInTheDocument();
    expect(station2).toBeInTheDocument();
    expect(station3).toBeInTheDocument();
    expect(station4).toBeInTheDocument();
    expect(station5).toBeInTheDocument();
    expect(station6).toBeInTheDocument();
    expect(station1).toHaveTextContent('station1');
    expect(station2).toHaveTextContent('station2');
    expect(station3).toHaveTextContent('station3');
    expect(station4).toHaveTextContent('station4');
    expect(station5).toHaveTextContent('station5');
    expect(station6).toHaveTextContent('station6');
  });

  test('AccordionButton with name and frequency, and AccordionPanel with station should be displayed inside AccordionItem when station is passed as prop', async () => {
    // render the component
    const { findByTestId } = renderRadioStations({
      stations: [
        { key: 1, name: 'station1', frequency: 1, coverImage: 'pathToImage' },
      ],
    });

    // get elements
    const accordionItem = await findByTestId('accordionItem-1');
    const accordionItemPanel = await findByTestId('accordionItemPanel');
    const selectedStation = await findByTestId('selectedStation');
    const accordionItemBtn = await findByTestId('accordionBtn-1');
    const frequency = await findByTestId('frequency');

    // perform assertions
    expect(accordionItem).toBeInTheDocument();
    expect(accordionItem).toContainElement(accordionItemPanel);
    expect(accordionItem).toContainElement(accordionItemBtn);
    expect(accordionItemPanel).toContainElement(selectedStation);
    expect(accordionItemBtn).toContainElement(frequency);
    expect(accordionItemBtn).toHaveTextContent('station1');
  });
});
