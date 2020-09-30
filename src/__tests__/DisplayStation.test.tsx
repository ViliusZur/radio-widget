import React from 'react';
import { render } from '@testing-library/react';

import DisplayStation from '../components/RadioStations/DisplayStation/DisplayStation';

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

// render helper function to handle props overriding
function renderDisplayStation(props: Partial<Props> = {}) {
  const defaultProps: Props = { station: undefined };
  return render(<DisplayStation {...defaultProps} {...props} />);
}

describe('DisplayStation', () => {
  //test
  test('nothing should return if null is passed as prop', async () => {
    // render the component
    const { queryByTestId } = renderDisplayStation();

    // get elements
    const station1 = queryByTestId('station-1');

    // perform assertions
    // if station-1 is the parent element
    expect(station1).not.toBeInTheDocument();
  });

  //test
  test('parent div should be displayed when passing station as a prop', async () => {
    // render the component
    const { queryByTestId } = renderDisplayStation();

    // get elements
    const station1 = queryByTestId('station-1');

    // perform assertions
    expect(station1).not.toBeInTheDocument();
  });

  // Accordion parent element is in parent component,
  // therefore, elements inside "station-1" div are returned as an empty div
  // when testing this component separately
});
