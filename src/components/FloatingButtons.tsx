
import { Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface FloatingButtonsProps {
  scrollToSection: (sectionId: string) => void;
}

const FloatingButtons = ({ scrollToSection }: FloatingButtonsProps) => {
  return (
    <>
      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button 
          size="lg" 
          className="bg-green-500 hover:bg-green-600 text-white rounded-full w-16 h-16 shadow-lg"
          onClick={() => window.open('https://wa.me/254751507479', '_blank')}
        >
          <Phone className="w-6 h-6" />
        </Button>
      </div>

      {/* Floating Get Connected Button (Mobile) */}
      <div className="fixed bottom-6 left-6 z-50 md:hidden">
        <Button 
          size="lg" 
          className="bg-orange-600 hover:bg-orange-700 text-white rounded-full px-6 py-3 shadow-lg"
          onClick={() => scrollToSection('packages')}
        >
          Get Connected
        </Button>
      </div>
    </>
  );
};

export default FloatingButtons;
