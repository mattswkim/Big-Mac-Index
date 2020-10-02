import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders Input', () => {
  const { getByText } = render(<App />);
  const demoElement = getByText(/Hi there/i);
  expect(demoElement).toBeInTheDocument();
});

