import React from 'react';
import { render } from '@testing-library/react';
import SelectedStation from '../components/Radio/Stations/SelectedStation/SelectedStation';

interface Station {
  name: string;
  coverImage: string;
}
interface Props {
  station?: Station;
}

// render helper function to handle props overriding
function renderSelectedStation(props: Partial<Props> = {}) {
  const defaultProps: Props = { station: undefined };
  return render(<SelectedStation {...defaultProps} {...props} />);
}

describe('SelectedStation', () => {
  test('nothing should be displayed if null is passed as a prop', async () => {
    // render the component
    const { queryByTestId } = renderSelectedStation();

    // get elements
    const selectedStation = queryByTestId('selectedStation');

    // perform assertions
    expect(selectedStation).not.toBeInTheDocument();
  });

  test('minus, plus buttons, and station image is displayed when station is passed as a prop', async () => {
    // render the component
    const { findByTestId } = renderSelectedStation({
      station: { name: 'station1', coverImage: 'pathToImage' },
    });

    // get elements
    const minus = await findByTestId('minus');
    const stationImage = await findByTestId('stationImage');
    const plus = await findByTestId('plus');

    // perform assertions
    expect(minus).toBeInTheDocument();
    expect(stationImage).toBeInTheDocument();
    expect(plus).toBeInTheDocument();
  });

  test('elements are rendered correctly when station is passed as a prop', async () => {
    // render the component
    const { findByTestId } = renderSelectedStation({
      station: { name: 'station1', coverImage: 'pathToImage' },
    });

    // get elements
    const selectedStation = await findByTestId('selectedStation');
    const items = await findByTestId('items');
    const btn1 = await findByTestId('btn1');
    const minus = await findByTestId('minus');
    const stationImage = await findByTestId('stationImage');
    const btn2 = await findByTestId('btn2');
    const plus = await findByTestId('plus');

    // perform assertions
    expect(selectedStation).toBeInTheDocument();
    expect(selectedStation).toContainElement(items);
    expect(items).toContainElement(btn1);
    expect(items).toContainElement(stationImage);
    expect(items).toContainElement(btn2);
    expect(btn1).toContainElement(minus);
    expect(btn2).toContainElement(plus);
  });
});
