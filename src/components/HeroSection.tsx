
import { Signal } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HeroSectionProps {
  scrollToSection: (sectionId: string) => void;
}

const HeroSection = ({ scrollToSection }: HeroSectionProps) => {
  return (
    <section id="home" className="kentcorp-gradient min-h-screen flex items-center pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              FAST,<br />
              AFFORDABLE,<br />
              AND RELIABLE<br />
              INTERNET
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-lg">
              Stay connected in Kutus and its environs with blazing-fast Wi-Fi at home and business internet.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-white text-orange-600 hover:bg-gray-100 rounded-full px-8 py-3 font-semibold"
                onClick={() => scrollToSection('packages')}
              >
                View Packages
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-glass hover:text-orange-600 rounded-full px-8 py-3 font-semibold"
                onClick={() => scrollToSection('contact')}
              >
                Contact Us
              </Button>
            </div>
          </div>
          <div className="hidden lg:block animate-slide-up">
            <div className="relative">
              <div className="w-96 h-96 mx-auto">
                <div className="relative w-full h-full bg-gradient-to-b from-blue-400 to-blue-600 rounded-full shadow-2xl flex items-center justify-center">
                  <Signal className="w-32 h-32 text-white" />
                  <div className="absolute top-8 right-8 w-4 h-4 bg-yellow-400 rounded-full animate-pulse"></div>
                  <div className="absolute bottom-16 left-12 w-3 h-3 bg-white rounded-full animate-pulse"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
