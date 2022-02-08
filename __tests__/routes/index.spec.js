import '@testing-library/jest-dom';

import { screen, render } from '@testing-library/svelte';

import Index from '../../src/routes/index.svelte';

describe('testing jest', () => {
  fit('should render the title', () => {
    render(Index);
    expect(screen.getByText('Welcome to SvelteKit')).toBeInTheDocument();
  });
});
