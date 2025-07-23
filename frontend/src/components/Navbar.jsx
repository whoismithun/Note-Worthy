import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const Navbar = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  const handleLogout = () => {
    localStorage.removeItem('token');
    toast.success('You have been logged out.');
    navigate('/login');
  };

  return (
    <div className="navbar bg-base-100/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="navbar-start">
        <Link to="/" className="btn btn-ghost text-xl">Note-Worthy</Link>
      </div>
      <div className="navbar-end gap-2">
        {token ? (
          <>
            <Link to="/create" className="btn btn-primary">Create Note</Link>
            <button onClick={handleLogout} className="btn btn-ghost">Logout</button>
          </>
        ) : (
          <>
            <Link to="/login" className="btn btn-ghost">Login</Link>
            <Link to="/register" className="btn btn-primary">Register</Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;