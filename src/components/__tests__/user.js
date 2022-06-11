import { render, screen } from '@testing-library/react';
import UserRoute from '../../routes/UserRoute';
import App from '../../App';
import { MemoryRouter, Routes, Route } from 'react-router-dom';

  test('should render the component', async () => {
    const someServiceId = 1;

    render(
      <MemoryRouter initialEntries={[`/user/${someServiceId}`]}>
        <Routes>
            <Route path="/user/:id" element={<UserRoute />} />
        </Routes>
      </MemoryRouter> 
    )

    const gameblock =  await screen.findByTestId('user-profile');
    expect(gameblock).toBeInTheDocument();
  });

