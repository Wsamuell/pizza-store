import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import NoPage from './pages/NoPage';
import LogIn from './pages/Login';
import ManageToppings from './pages/ManageToppings';
import ManagePizza from './pages/ManagePizza';
import { LogInStatus } from '@/helpers/types';
import { useState } from 'react';

function App() {
  const getUserAuthenticated: string | null =
    localStorage.getItem('userAuthenticated');

  const [userAuthenticated, setUserAuthenticated] = useState<LogInStatus>(
    getUserAuthenticated === null
      ? LogInStatus.Pending
      : LogInStatus[getUserAuthenticated as keyof typeof LogInStatus]
  );
  console.log('userAuthenticated', userAuthenticated);
  console.log('getUserAuthenticated', getUserAuthenticated);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {userAuthenticated === LogInStatus.Success ? (
          <>
            <Route path="/pizza" element={<ManagePizza />} />
            <Route path="/toppings" element={<ManageToppings />} />
          </>
        ) : (
          <Route path="/*" element={<Navigate to="/login" />} />
        )}
        <Route
          path="/login"
          element={
            <LogIn
              userAuthenticated={userAuthenticated}
              setUserAuthenticated={setUserAuthenticated}
            />
          }
        />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
