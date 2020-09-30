import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Radio from '../components/Radio/Radio';

interface Station {
  key: number;
  name: string;
  frequency: number;
  coverImage: string;
}
interface Props {
  stations?: Station[];
}

// render helper function to handle props overriding
function renderRadio(props: Partial<Props> = {}) {
  const defaultProps: Props = { stations: undefined };
  return render(<Radio {...defaultProps} {...props} />);
}

describe('Radio', () => {
  //test
  test('all main elements and components render', async () => {
    // render the component
    const { findByTestId } = renderRadio();

    // get elements
    const titleBar = await findByTestId('titleBar');
    const stations = await findByTestId('stations');
    const currentlyPlaying = await findByTestId('currentlyPlaying');

    // perform assertions
    expect(titleBar).toBeInTheDocument();
    expect(stations).toBeInTheDocument();
    expect(currentlyPlaying).toBeInTheDocument();
  });

  //test
  test(' renders stations', async () => {
    // render the component
    const { findByTestId } = renderRadio({
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
  test('currently playing appears when selected a station', async () => {
    // render the component
    const { findByTestId } = renderRadio({
      stations: [{ key: 1, name: 'station1', frequency: 1, coverImage: 'pathToImage' }],
    });

    // get elements
    const station = await findByTestId('accordionItemBtn-1');
    fireEvent.click(station); // perform an event
    const currentlyPlayingStationName = await findByTestId('stationName');

    // perform assertions
    expect(currentlyPlayingStationName).toBeInTheDocument();
    expect(currentlyPlayingStationName).toHaveTextContent('station1');
  });

  //test
  test('currently playing changes when changing a station', async () => {
    // render the component
    const { findByTestId } = renderRadio({
      stations: [
        { key: 1, name: 'station1', frequency: 1, coverImage: 'pathToImage' },
        { key: 2, name: 'station2', frequency: 2, coverImage: 'pathToImage' },
      ],
    });

    // get elements
    let station = await findByTestId('accordionItemBtn-1');
    fireEvent.click(station); // perform an event
    let currentlyPlayingStationName = await findByTestId('stationName');

    // perform assertions
    expect(currentlyPlayingStationName).toBeInTheDocument();
    expect(currentlyPlayingStationName).toHaveTextContent('station1');

    // get elements
    station = await findByTestId('accordionItemBtn-2');
    fireEvent.click(station); // perform an event

    // perform assertions
    expect(currentlyPlayingStationName).toBeInTheDocument();
    expect(currentlyPlayingStationName).toHaveTextContent('station2');
  });

  // test
  test('station should not be expanded when not selected', async () => {
    // render the component
    const { findByTestId } = renderRadio({
      stations: [{ key: 1, name: 'station1', frequency: 1, coverImage: 'pathToImage' }],
    });

    // get elements
    const station = await findByTestId('accordionItemBtn-1');

    // perform assertion
    expect(station).toHaveAttribute('aria-expanded', 'false');
  });

  // test
  test('station should be expanded when selected', async () => {
    // render the component
    const { findByTestId } = renderRadio({
      stations: [{ key: 1, name: 'station1', frequency: 1, coverImage: 'pathToImage' }],
    });

    // get elements
    const station = await findByTestId('accordionItemBtn-1');
    fireEvent.click(station); // perform an event

    // perform assertion
    expect(station).toHaveAttribute('aria-expanded', 'true');
  });
});
