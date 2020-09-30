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

  test('title bar is rendered correctly', async () => {
    // render the component
    const { findByTestId } = renderRadio();

    // get elements
    const titleBar = await findByTestId('titleBar');
    const backArrow = await findByTestId('back-arrow');
    const switchOff = await findByTestId('switch');

    // perform assertions
    expect(backArrow).toBeInTheDocument();
    expect(switchOff).toBeInTheDocument();
    expect(titleBar).toHaveTextContent('stations');
  });

  test('renders 4 stations', async () => {
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
    const stations = await findByTestId('stations');
    const station1 = await findByTestId('accordionItem-1');
    const station2 = await findByTestId('accordionItem-2');
    const station3 = await findByTestId('accordionItem-3');
    const station4 = await findByTestId('accordionItem-4');

    // perform assertions
    expect(stations).toBeInTheDocument();
    expect(stations).toContainElement(station1);
    expect(stations).toContainElement(station2);
    expect(stations).toContainElement(station3);
    expect(stations).toContainElement(station4);
  });

  test('currently playing shows nothing if no station is selected', async () => {
    // render the component
    const { findByTestId, queryByTestId } = renderRadio();

    // get elements
    const currentlyPlaying = await findByTestId('currentlyPlaying');
    const currentlyPlayingText = queryByTestId('currentlyPlayingText');

    // perform assertions
    expect(currentlyPlaying).not.toHaveTextContent('currently playing');
    expect(currentlyPlayingText).not.toBeInTheDocument();
  });

  test('currently playing appears when selected a station', async () => {
    // render the component
    const { findByTestId } = renderRadio({
      stations: [
        { key: 1, name: 'station1', frequency: 1, coverImage: 'pathToImage' },
      ],
    });

    // get elements
    const station = await findByTestId('accordionBtn-1');
    fireEvent.click(station); // perform an event
    const currentlyPlayingStationName = await findByTestId(
      'currentlyPlayingText'
    );

    // perform assertions
    expect(currentlyPlayingStationName).toBeInTheDocument();
    expect(currentlyPlayingStationName).toHaveTextContent(
      'currently playing station1'
    );
  });

  test('currently playing changes when changing a station', async () => {
    // render the component
    const { findByTestId } = renderRadio({
      stations: [
        { key: 1, name: 'station1', frequency: 1, coverImage: 'pathToImage' },
        { key: 2, name: 'station2', frequency: 2, coverImage: 'pathToImage' },
      ],
    });

    // get elements
    let station = await findByTestId('accordionBtn-1');
    fireEvent.click(station); // perform an event
    const currentlyPlayingStationName = await findByTestId(
      'currentlyPlayingText'
    );

    // perform assertions
    expect(currentlyPlayingStationName).toBeInTheDocument();
    expect(currentlyPlayingStationName).toHaveTextContent(
      'currently playing station1'
    );

    // get elements
    station = await findByTestId('accordionBtn-2');
    fireEvent.click(station); // perform an event

    // perform assertions
    expect(currentlyPlayingStationName).toBeInTheDocument();
    expect(currentlyPlayingStationName).toHaveTextContent(
      'currently playing station2'
    );
  });

  // test
  test('station should not be expanded when not selected', async () => {
    // render the component
    const { findByTestId } = renderRadio({
      stations: [
        { key: 1, name: 'station1', frequency: 1, coverImage: 'pathToImage' },
      ],
    });

    // get elements
    const station = await findByTestId('accordionBtn-1');

    // perform assertion
    expect(station).toHaveAttribute('aria-expanded', 'false');
  });

  // test
  test('station should be expanded when selected', async () => {
    // render the component
    const { findByTestId } = renderRadio({
      stations: [
        { key: 1, name: 'station1', frequency: 1, coverImage: 'pathToImage' },
      ],
    });

    // get elements
    const station = await findByTestId('accordionBtn-1');
    fireEvent.click(station); // perform an event

    // perform assertion
    expect(station).toHaveAttribute('aria-expanded', 'true');
  });

  test('minus, plus buttons, and station image is displayed when station is passed as a prop and selected', async () => {
    // render the component
    const { findByTestId } = renderRadio({
      stations: [
        { key: 1, name: 'station1', frequency: 1, coverImage: 'pathToImage' },
      ],
    });

    // get elements
    const station = await findByTestId('accordionBtn-1');
    fireEvent.click(station); // perform an event
    const minus = await findByTestId('minus');
    const stationImage = await findByTestId('stationImage');
    const plus = await findByTestId('plus');

    // perform assertions
    expect(minus).toBeInTheDocument();
    expect(stationImage).toBeInTheDocument();
    expect(plus).toBeInTheDocument();
  });
});
