import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaCaretDown, FaCaretUp, FaWhatsapp } from 'react-icons/fa';
import { IoCloseOutline } from 'react-icons/io5';
import Button from '../ui/Button';

const navItems = [
  { label: 'Home', href: '/', isPrimary: true },
  { label: 'About', href: '/about' },
  { 
    label: 'Services', 
    id: 'services',
    dropdown: [
      { label: 'App Development', href: '/app-development' },
      { label: 'Web Development', href: '/web-development' },
      { label: 'Software Development', href: '/software-development-company-in-gurgaon' },
      { label: 'UI/UX', href: '/ui-ux' },
      { label: 'Solution Designing', href: '/solution-designing' },
      { label: 'Cloud Computing', href: '/cloud-computing' },
      { label: 'Cross Platform Development', href: '/cross-platform-development' },
    ]
  },
  { 
    label: 'Industries', 
    id: 'industries',
    dropdown: [
      { label: 'Manufacturing', href: '/manufacturing' },
      { label: 'Logistics', href: '/logistics' },
      { label: 'Construction', href: '/construction' },
      { label: 'Education', href: '/education' },
      { label: 'Travel', href: '/travel' },
      { label: 'Automotive', href: '/automotive' },
    ]
  },
  { label: 'Our Portfolio', href: '/portfolio' },
  { label: 'Contact', href: '/contact' },
];

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileExpandedMenu, setMobileExpandedMenu] = useState(null);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMobileMenuOpen]);

  const handleMouseEnter = (menu) => {
    setActiveDropdown(menu);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  return (
    <header className="bg-white sticky top-0 z-50 w-full py-4 px-6 md:px-12 lg:px-24 border-b border-b-gray-300">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src="/logo-bbb.png" alt="BigBrandBucket" className="h-12 w-auto object-contain" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center space-x-8 font-normal">
          {navItems.map((item) => {
            if (item.dropdown) {
              return (
                <div 
                  key={item.id}
                  className="relative group cursor-pointer py-2"
                  onMouseEnter={() => handleMouseEnter(item.id)}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className={`flex items-center transition-colors ${activeDropdown === item.id ? 'text-primary' : 'text-gray-800 hover:text-primary'}`}>
                    {item.label}
                    <FaCaretDown className="ml-1.5 text-xs" />
                  </div>
                  
                  {activeDropdown === item.id && (
                    <div className="absolute top-full left-0 bg-white min-w-[240px] border border-gray-100">
                      {item.dropdown.map((subItem) => (
                        <Link 
                          key={subItem.label} 
                          to={subItem.href} 
                          className="block font-normal px-6 py-2.5 text-sm hover:bg-primary-alt hover:text-white transition-colors"
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            }

            return (
              <Link 
                key={item.label}
                to={item.href} 
                className={`transition-colors ${item.isPrimary ? 'text-primary' : 'text-gray-800 hover:text-primary'}`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Right CTA */}
        <div className="hidden lg:block">
          <Button variant="outline" arrow>Get Quote</Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button 
            className="text-gray-800 p-2 cursor-pointer"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 6h16M4 12h16M4 18h16"/></svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Sidebar */}
      {/* Backdrop */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden transition-opacity"
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>
      )}

      {/* Sidebar */}
      <div 
        className={`fixed top-0 left-0 h-full w-[85%] max-w-[320px] bg-[#f4f4f4] z-50 transform transition-transform duration-300 ease-in-out lg:hidden overflow-y-auto flex flex-col
          ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <div className="flex items-center justify-between p-6 pb-4 border-b border-gray-300">
          <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>
            <img src="/logo-bbb.png" alt="BigBrandBucket" className="h-16 w-auto object-contain" />
          </Link>
          <button 
            onClick={() => setIsMobileMenuOpen(false)}
            className="p-1 text-gray-800 border border-gray-800 rounded-sm hover:bg-gray-200 transition-colors"
          >
            <IoCloseOutline className="w-5 h-5" />
          </button>
        </div>

        <nav className="flex-1 py-4 flex flex-col">
          {navItems.map((item) => {
            if (item.dropdown) {
              const isExpanded = mobileExpandedMenu === item.id;
              return (
                <div key={item.id} className="flex flex-col">
                  <div 
                    className={`flex items-center justify-between px-6 py-4 cursor-pointer font-medium ${isExpanded ? 'text-primary' : 'text-gray-800'}`}
                    onClick={() => setMobileExpandedMenu(isExpanded ? null : item.id)}
                  >
                    <span className="flex items-center gap-2">
                      {item.label}
                      {isExpanded ? <FaCaretUp className="text-sm" /> : <FaCaretDown className="text-sm" />}
                    </span>
                  </div>
                  
                  {isExpanded && (
                    <div className="flex flex-col w-full bg-white/50">
                      {item.dropdown.map((subItem, index) => (
                        <Link 
                          key={subItem.label} 
                          to={subItem.href} 
                          onClick={() => setIsMobileMenuOpen(false)}
                          className={`px-6 py-3.5 text-[15px] font-normal transition-colors text-gray-800 hover:bg-gray-200 hover:text-primary`}
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            }

            return (
              <Link 
                key={item.label}
                to={item.href} 
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-6 py-4 font-medium text-gray-800 hover:text-primary transition-colors"
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Mobile Bottom CTA */}
        <div className="p-6 pt-0 mt-auto flex flex-col gap-4">
          <Button variant="outline" className="w-fit border-[#0f6d70] text-[#0f6d70] hover:bg-[#0f6d70] hover:text-white rounded-full bg-transparent px-6" arrow>
            Quote
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;