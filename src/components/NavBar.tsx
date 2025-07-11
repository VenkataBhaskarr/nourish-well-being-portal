
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="w-full bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded-full bg-primary-500 flex items-center justify-center">
            <span className="text-white font-bold">N</span>
          </div>
          <span className="text-xl font-bold text-gray-900">NutriTrack</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-gray-700 hover:text-primary-500 font-medium">
            Home
          </Link>
          <Link to="#features" className="text-gray-700 hover:text-primary-500 font-medium">
            Features
          </Link>
          <Link to="#testimonials" className="text-gray-700 hover:text-primary-500 font-medium">
            Testimonials
          </Link>
          <Link to="#pricing" className="text-gray-700 hover:text-primary-500 font-medium">
            Pricing
          </Link>
          <Link to="/login">
            <Button variant="outline" className="border-primary-500 text-primary-500 hover:bg-primary-50">
              Sign In
            </Button>
          </Link>
          <Link to="/login">
            <Button className="bg-primary-500 text-white hover:bg-primary-600">
              Get Started
            </Button>
          </Link>
        </nav>

        {/* Mobile menu button */}
        <button 
          className="md:hidden text-gray-700"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Menu />
        </button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-md py-4 px-4 absolute w-full z-50 animate-fade-in">
          <nav className="flex flex-col space-y-4">
            <Link to="/" className="text-gray-700 hover:text-primary-500 font-medium">
              Home
            </Link>
            <Link to="#features" className="text-gray-700 hover:text-primary-500 font-medium">
              Features
            </Link>
            <Link to="#testimonials" className="text-gray-700 hover:text-primary-500 font-medium">
              Testimonials
            </Link>
            <Link to="#pricing" className="text-gray-700 hover:text-primary-500 font-medium">
              Pricing
            </Link>
            <Link to="/login" className="inline-block w-full">
              <Button variant="outline" className="border-primary-500 text-primary-500 hover:bg-primary-50 w-full">
                Sign In
              </Button>
            </Link>
            <Link to="/login" className="inline-block w-full">
              <Button className="bg-primary-500 text-white hover:bg-primary-600 w-full">
                Get Started
              </Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default NavBar;
