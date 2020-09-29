import React from 'react';
import { render } from '@testing-library/react';

import CurrentlyPlaying from '../components/CurrentlyPlaying/CurrentlyPlaying';

// interfaces
interface Station {
  name: string;
}
interface Props {
  station: Station | null;
}

// render helper function to handle props overriding
function renderCurrentlyPlaying(props: Partial<Props> = {}) {
  const defaultProps: Props = { station: null }; // set default props
  return render(<CurrentlyPlaying {...defaultProps} {...props} />);
}

describe('CurrentlyPlaying', () => {
  //test
  test('should display nothing when no station is passed as prop', async () => {
    // render the component
    const { queryByTestId } = renderCurrentlyPlaying();

    // get elements
    const textContainer = queryByTestId('textContainer');
    const currentlyPlayingText = queryByTestId('currentlyPlayingText');
    const stationName = queryByTestId('stationName');

    // perform assertions
    expect(textContainer).not.toBeInTheDocument();
    expect(currentlyPlayingText).not.toBeInTheDocument();
    expect(stationName).not.toBeInTheDocument();
  });

  //test
  test('container should contain "CURRENTLY PLAYING" and station name when station is passed as a prop', async () => {
    // render the component
    const { findByTestId } = renderCurrentlyPlaying({ station: { name: 'M-1 Plius' } });

    // get elements
    const currentlyPlaying = await findByTestId('currentlyPlaying');
    const textContainer = await findByTestId('textContainer');
    const currentlyPlayingText = await findByTestId('currentlyPlayingText');
    const stationName = await findByTestId('stationName');

    // perform assertions
    expect(currentlyPlaying).toContainElement(textContainer);
    expect(textContainer).toContainElement(currentlyPlayingText);
    expect(textContainer).toContainElement(stationName);
    expect(currentlyPlayingText).toHaveTextContent('currently playing');
    expect(stationName).toHaveTextContent('M-1 Plius');
  });
});
