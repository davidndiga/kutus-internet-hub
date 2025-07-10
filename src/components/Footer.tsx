
import { Link } from 'react-router-dom';

interface FooterProps {
  scrollToSection: (sectionId: string) => void;
}

const Footer = ({ scrollToSection }: FooterProps) => {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-blue-400 mb-4">KentCorp</h3>
            <p className="text-white/80">
              Connecting Kutus and its environs with fast, reliable internet services.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-white/80">
              <li><Link to="/home-packages" className="hover:text-white">Home Internet</Link></li>
              <li><Link to="/hotspot-packages" className="hover:text-white">Hotspot Wi-Fi</Link></li>
              <li><button onClick={() => scrollToSection('features')} className="hover:text-white">Features</button></li>
              <li><button onClick={() => scrollToSection('team')} className="hover:text-white">Team</button></li>
              <li><button onClick={() => scrollToSection('contact')} className="hover:text-white">Contact</button></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-white/80">
              <li>Home Internet</li>
              <li>Business Internet</li>
              <li>Hotspot Access</li>
              <li>Technical Support</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-white/80">
              <li>Metro Place, Kutus</li>
              <li>Kirinyaga County</li>
              <li>0751507479</li>
              <li>info@kentcorpfibrenet.ac.ke</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/60">
          <p>&copy; 2025 KentCorp / Dave's Digital Oasis</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
