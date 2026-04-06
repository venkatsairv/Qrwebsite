import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="w-full py-12 px-8 bg-[#f9f9f9] dark:bg-slate-950 border-t border-opacity-10 border-[#c3c6d7]">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6 max-w-7xl mx-auto">
        <div className="flex flex-col gap-2">
          <span className="text-lg font-bold text-[#434655]">EtherQR</span>
          <p className="font-['Inter'] text-sm text-[#434655]">© 2024 EtherQR. All rights reserved.</p>
        </div>
        <div className="flex gap-8">
          <Link to="/privacy" className="font-['Inter'] text-sm text-[#434655] hover:text-[#2563eb] transition-all">Privacy Policy</Link>
          <Link to="/terms" className="font-['Inter'] text-sm text-[#434655] hover:text-[#2563eb] transition-all">Terms</Link>
          <Link to="/contact" className="font-['Inter'] text-sm text-[#434655] hover:text-[#2563eb] transition-all">Help Center</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
