import { render, screen } from '@testing-library/react';
import GameRoute from '../../routes/GameRoute';
import App from '../../App';
import { MemoryRouter, Routes, Route } from 'react-router-dom';

  test('should render the component', async () => {
    const someServiceId = -1;

    render(
      <MemoryRouter initialEntries={[`/games/${someServiceId}`]}>
        <Routes>
            <Route path="/games/:id" element={<GameRoute />} />
        </Routes>
      </MemoryRouter> 
    )

    const gameblock =  await screen.findByTestId('nogame');
    expect(gameblock).toBeInTheDocument();
  });

