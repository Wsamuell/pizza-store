import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import NoPage from './pages/NoPage';
import LogIn from './pages/Login';
import ManageToppings from './pages/ManageToppings';
import ManagePizza from './pages/ManagePizza';
import { LogInStatus } from '@/helpers/types';
import { useState } from 'react';

function App() {
  const [userAuthenticated, setUserAuthenticated] = useState<LogInStatus>(
    LogInStatus.Pending
  );

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/pizza" element={<ManagePizza />} />
        {userAuthenticated === LogInStatus.Success ? (
          <>
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
