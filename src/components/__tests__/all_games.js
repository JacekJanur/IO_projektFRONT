import { render, screen } from '@testing-library/react';
import GameRoute from '../../routes/GameRoute';
import App from '../../App';
import { BrowserRouter } from 'react-router-dom';

test('test fetching all games', async () => {
  render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    )
  const gameblock =  await screen.findByTestId('gameblock');
  expect(gameblock).toBeInTheDocument();
});
