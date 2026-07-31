import React from 'react';

const Button = ({ 
  children, 
  variant = 'primary', 
  arrow = false, 
  className = '', 
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center font-medium rounded-full transition-all duration-300 px-8 py-3 cursor-pointer";
  
  const variants = {
    primary: "bg-primary text-white hover:bg-primary-alt",
    secondary: "bg-white text-primary hover:bg-gray-50 shadow-sm",
    outline: "bg-transparent border border-primary text-primary hover:bg-primary hover:text-white"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant] || variants.primary} ${className}`}
      {...props}
    >
      {children}
      {arrow && (
        <svg 
          className="ml-2 w-5 h-5" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24" 
          strokeWidth="2"
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          <path d="M7 17L17 7" />
          <path d="M7 7h10v10" />
        </svg>
      )}
    </button>
  );
};

export default Button;