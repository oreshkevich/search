import React from 'react';
import {render, screen} from '@testing-library/react';
import {User} from './User.jsx';

describe('User component', () => {
  test('User renders', () => {
    render(<User />);
    expect(screen.getByRole('img')).toBeInTheDocument();
    expect(screen.getByTestId('custom-elem')).toBeInTheDocument();
    expect(screen.getByText(/login:/i)).toBeInTheDocument();
  });
});

