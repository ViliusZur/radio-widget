import React from 'react';
import { render, fireEvent, waitForElement } from '@testing-library/react';

import RadioWidget from '../components/RadioWidget/RadioWidget';

// interfaces
interface Station {
  key: number;
  name: string;
  frequency: number;
  coverImage: string;
}
interface Props {
  stations: Station[] | null;
}

// render helper function to handle props overriding
function renderRadioWidget(props: Partial<Props> = {}) {
  const defaultProps: Props = { stations: null };
  return render(<RadioWidget {...defaultProps} {...props} />);
}

describe('RadioWidget', () => {
  //test
  test('all components render', async () => {
    // render the component
    const { findByTestId } = renderRadioWidget();

    // get elements
    const widget = await findByTestId('widget');
    const titleBar = await findByTestId('titleBar');
    const radioStations = await findByTestId('radioStations');
    const currentlyPlaying = await findByTestId('currentlyPlaying');

    // perform assertions
    expect(widget).toBeInTheDocument();
    expect(widget).toContainElement(titleBar);
    expect(widget).toContainElement(radioStations);
    expect(widget).toContainElement(currentlyPlaying);
  });

  //test
  test('widget renders stations', async () => {
    // render the component
    const { findByTestId } = renderRadioWidget({
      stations: [
        { key: 1, name: 'station1', frequency: 1, coverImage: 'pathToImage' },
        { key: 2, name: 'station2', frequency: 2, coverImage: 'pathToImage' },
        { key: 3, name: 'station3', frequency: 3, coverImage: 'pathToImage' },
        { key: 4, name: 'station4', frequency: 4, coverImage: 'pathToImage' },
      ],
    });

    // get elements
    const radioStations = await findByTestId('radioStations');
    const station1 = await findByTestId('station-1');
    const station2 = await findByTestId('station-2');
    const station3 = await findByTestId('station-3');
    const station4 = await findByTestId('station-4');

    // perform assertions
    expect(radioStations).toBeInTheDocument();
    expect(radioStations).toContainElement(station1);
    expect(radioStations).toContainElement(station2);
    expect(radioStations).toContainElement(station3);
    expect(radioStations).toContainElement(station4);
  });

  //test
  /*test('currently playing appears when selected a station', async () => {
    // render the component
    const { findByTestId } = renderRadioWidget({
      stations: [{ key: 1, name: 'station1', frequency: 1, coverImage: 'pathToImage' }],
    });

    // get elements
    const station1 = await findByTestId('accordionItem');
    // perform an event
    fireEvent.click(station1);

    const currentlyPlayingStationName = await findByTestId('stationName');
    // perform assertions
    expect(currentlyPlayingStationName).toBeInTheDocument();
    expect(currentlyPlayingStationName).toHaveTextContent('station1');
  });*/

  //test
  // test('currently playing changes when changing a station');
});
