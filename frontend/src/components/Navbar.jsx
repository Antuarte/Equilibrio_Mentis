// src/components/Navbar.jsx
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-green-600 text-white p-4 flex justify-between">
      <h1 className="text-lg font-bold">Monitoramento de Hábitos</h1>
      <div className="space-x-4">
        <Link to="/" className="hover:underline">Início</Link>
        <Link to="/habitos" className="hover:underline">Hábitos</Link>
        <Link to="/dieta" className="hover:underline">Dieta</Link>
      </div>
    </nav>
  );
};

export default Navbar;
