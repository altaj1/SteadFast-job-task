import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
 
  return (
    <header >
      <nav className="bg-[#333] shadow-lg">
        <div className="container mx-auto flex justify-between items-center p-4">
   
          <div className="text-2xl font-bold text-[#fff]">E-Mart</div>{" "}
          <ul
            className={`md:flex  gap-8 ${
              isOpen ? "block" : "hidden"
            } md:block`}
          >
            
            <li>
              <a href="#home" className="text-white hover:text-[#f09]">
                Home
              </a>
            </li>
            <li>
              <a href="#products" className="text-white hover:text-[#f09]">
                Products
              </a>
            </li>
            <li>
              <a href="#services" className="text-white hover:text-[#f09]">
                Services
              </a>
            </li>
            <li>
              <a href="#about" className="text-white hover:text-[#f09]">
                About
              </a>
            </li>
            <li>
              <a href="#contact" className="text-white hover:text-[#f09]">
                Contact
              </a>
            </li>
          
            
          </ul>
          <div className="md:hidden" onClick={toggleMenu}>
            
            <div className="hamburger space-y-1.5">
              
              <span className="block w-8 h-0.5 bg-white"></span>
              <span className="block w-8 h-0.5 bg-white"></span>
              <span className="block w-8 h-0.5 bg-white"></span>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};
export default Navbar;
