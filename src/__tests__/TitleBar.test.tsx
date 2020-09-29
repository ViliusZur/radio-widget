import React from 'react';
import { render } from '@testing-library/react';

import TitleBar from '../components/TitleBar/TitleBar';

describe('TitleBar', () => {
  test('should display back-arrow and switch buttons with images, and title "STATIONS"', async () => {
    // render the component
    const { findByTestId } = render(<TitleBar />);

    // get elements
    const titleBar = await findByTestId('titleBar');
    const items = await findByTestId('items');
    const backArrow = await findByTestId('backArrow');
    const backBtn = await findByTestId('backBtn');
    const title = await findByTestId('title');
    const switchImg = await findByTestId('switch');
    const switchBtn = await findByTestId('switchBtn');

    // perform assertions
    expect(titleBar).toContainElement(items);
    expect(items).toContainElement(backArrow);
    expect(items).toContainElement(backBtn);
    expect(items).toContainElement(title);
    expect(items).toContainElement(switchImg);
    expect(items).toContainElement(switchBtn);
    expect(title).toHaveTextContent('stations');
  });
});
