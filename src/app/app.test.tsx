/// <reference types="@testing-library/jest-dom" />
import { render, screen } from '@testing-library/react';

describe('App smoke test', () => {
  it('renders without crashing', () => {
    render(<div>Hello World</div>);
    expect(screen.getByText('Hello World')).toBeInTheDocument();
  });
});
