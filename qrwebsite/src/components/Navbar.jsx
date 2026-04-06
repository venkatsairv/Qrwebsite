import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const { user, isAuthenticated, logout } = useAuth();

  return (
    <nav className="w-full sticky top-0 z-50 bg-[#f9f9f9] dark:bg-slate-900 bg-opacity-80 backdrop-blur-xl flex justify-between items-center px-8 py-4 mx-auto border-b border-opacity-10 border-[#c3c6d7]">
      <div className="flex items-center gap-8">
        <Link to="/" className="text-2xl font-extrabold tracking-tighter text-[#004ac6] dark:text-[#2563eb]">
          EtherQR
        </Link>
        <div className="hidden md:flex gap-6">
          <Link to="/features" className="text-[#434655] font-medium hover:text-[#2563eb] transition-colors duration-200">Features</Link>
          <Link to="/pricing" className="text-[#434655] font-medium hover:text-[#2563eb] transition-colors duration-200">Pricing</Link>
          <Link to="/blog" className="text-[#434655] font-medium hover:text-[#2563eb] transition-colors duration-200">Blog</Link>
          <Link to="/contact" className="text-[#434655] font-medium hover:text-[#2563eb] transition-colors duration-200">Contact</Link>
        </div>
      </div>
      <div className="flex items-center gap-4">
        {isAuthenticated ? (
          <>
            <Link to="/dashboard" className="text-[#434655] font-medium hover:text-[#2563eb] transition-colors">
              {user?.email}
            </Link>
            <button
              className="text-[#434655] font-medium hover:text-[#2563eb] transition-colors cursor-pointer"
              onClick={logout}
              type="button"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login" className="text-[#434655] font-medium hover:text-[#2563eb] transition-colors cursor-pointer">
              Sign In
            </Link>
            <Link to="/register" className="premium-gradient text-white px-6 py-2.5 rounded-lg font-semibold active:opacity-80 active:scale-[0.98] transition-all cursor-pointer">
              Create Account
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
