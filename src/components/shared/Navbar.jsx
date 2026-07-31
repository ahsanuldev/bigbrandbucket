import React, { useState } from 'react';
import { FaCaretDown } from 'react-icons/fa';
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
      { label: 'Software Development', href: '/software-development' },
      { label: 'UI/UX', href: '/ui-ux' },
      { label: 'Solution Designing', href: '/solution-designing' },
      { label: 'Cloud Computing', href: '/cloud-computing' },
      { label: 'Cross Platform Development', href: '/cross-platform' },
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
        <a href="/" className="flex items-center">
          <img src="/logo-bbb.png" alt="BigBrandBucket" className="h-12 w-auto object-contain" />
        </a>

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
                        <a 
                          key={subItem.label} 
                          href={subItem.href} 
                          className="block font-normal px-6 py-2.5 text-sm hover:bg-primary-alt hover:text-white transition-colors"
                        >
                          {subItem.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              );
            }

            return (
              <a 
                key={item.label}
                href={item.href} 
                className={`transition-colors ${item.isPrimary ? 'text-primary' : 'text-gray-800 hover:text-primary'}`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Right CTA */}
        <div className="hidden lg:block">
          <Button variant="outline" arrow>Get Quote</Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button className="text-gray-800 p-2 cursor-pointer">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 6h16M4 12h16M4 18h16"/></svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;