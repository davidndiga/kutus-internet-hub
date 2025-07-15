
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

interface NavigationProps {
  scrollToSection: (sectionId: string) => void;
}

const Navigation = ({ scrollToSection }: NavigationProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollToSection = (sectionId: string) => {
    scrollToSection(sectionId);
    setIsMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-blue-600">KentCorp</h1>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button onClick={() => handleScrollToSection('home')} className="text-gray-700 hover:text-blue-600 transition-colors">Home</button>
              <button onClick={() => handleScrollToSection('packages')} className="text-gray-700 hover:text-blue-600 transition-colors">Packages</button>
              <Link to="/hotspot-packages" className="text-gray-700 hover:text-blue-600 transition-colors">Hotspots</Link>
              <button onClick={() => handleScrollToSection('features')} className="text-gray-700 hover:text-blue-600 transition-colors">Features</button>
              <button onClick={() => handleScrollToSection('team')} className="text-gray-700 hover:text-blue-600 transition-colors">Team</button>
              <button onClick={() => handleScrollToSection('testimonials')} className="text-gray-700 hover:text-blue-600 transition-colors">Testimonials</button>
              <button onClick={() => handleScrollToSection('contact')} className="text-gray-700 hover:text-blue-600 transition-colors">Contact</button>
            </div>
          </div>

          <div className="hidden md:block">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full">
              Get Connected
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <button onClick={() => handleScrollToSection('home')} className="block px-3 py-2 text-gray-700 hover:text-blue-600">Home</button>
            <button onClick={() => handleScrollToSection('packages')} className="block px-3 py-2 text-gray-700 hover:text-blue-600">Packages</button>
            <Link to="/hotspot-packages" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Hotspots</Link>
            <button onClick={() => handleScrollToSection('features')} className="block px-3 py-2 text-gray-700 hover:text-blue-600">Features</button>
            <button onClick={() => handleScrollToSection('team')} className="block px-3 py-2 text-gray-700 hover:text-blue-600">Team</button>
            <button onClick={() => handleScrollToSection('testimonials')} className="block px-3 py-2 text-gray-700 hover:text-blue-600">Testimonials</button>
            <button onClick={() => handleScrollToSection('contact')} className="block px-3 py-2 text-gray-700 hover:text-blue-600">Contact</button>
            <div className="px-3 py-2">
              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-full">
                Get Connected
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
