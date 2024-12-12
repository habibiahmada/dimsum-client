import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { CartProvider } from './components/Context.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DetailMenu from './pages/DetailMenu.jsx';

createRoot(document.getElementById('root')).render(
    <Router>
      <CartProvider>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/menu/:id" element={<DetailMenu />} />
        </Routes>
      </CartProvider>
    </Router>
);
