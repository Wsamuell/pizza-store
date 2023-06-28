// import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import NoPage from './pages/NoPage';
import LogIn from './pages/Login';
import ManageToppings from './pages/ManageToppings';
import ManagePizza from './pages/ManagePizza';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="login" element={<LogIn />} />
        <Route path="toppings" element={<ManageToppings />} />
        <Route path="pizza" element={<ManagePizza />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
