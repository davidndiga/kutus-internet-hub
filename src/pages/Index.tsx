
import { useState, useEffect } from 'react';
import { 
  Wifi, 
  Zap, 
  Shield, 
  Headphones, 
  Users, 
  Star, 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  CheckCircle,
  Home,
  Building,
  Signal,
  Menu,
  X,
  Instagram,
  Facebook,
  Youtube
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
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
                <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-blue-600 transition-colors">Home</button>
                <Link to="/hotspot-packages" className="text-gray-700 hover:text-blue-600 transition-colors">Hotspots</Link>
                <button onClick={() => scrollToSection('packages')} className="text-gray-700 hover:text-blue-600 transition-colors">Packages</button>
                <button onClick={() => scrollToSection('features')} className="text-gray-700 hover:text-blue-600 transition-colors">Features</button>
                <button onClick={() => scrollToSection('team')} className="text-gray-700 hover:text-blue-600 transition-colors">Team</button>
                <button onClick={() => scrollToSection('testimonials')} className="text-gray-700 hover:text-blue-600 transition-colors">Testimonials</button>
                <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-blue-600 transition-colors">Contact</button>
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
              <button onClick={() => scrollToSection('home')} className="block px-3 py-2 text-gray-700 hover:text-blue-600">Home</button>
              <Link to="/hotspot-packages" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Hotspots</Link>
              <button onClick={() => scrollToSection('packages')} className="block px-3 py-2 text-gray-700 hover:text-blue-600">Packages</button>
              <button onClick={() => scrollToSection('features')} className="block px-3 py-2 text-gray-700 hover:text-blue-600">Features</button>
              <button onClick={() => scrollToSection('team')} className="block px-3 py-2 text-gray-700 hover:text-blue-600">Team</button>
              <button onClick={() => scrollToSection('testimonials')} className="block px-3 py-2 text-gray-700 hover:text-blue-600">Testimonials</button>
              <button onClick={() => scrollToSection('contact')} className="block px-3 py-2 text-gray-700 hover:text-blue-600">Contact</button>
              <div className="px-3 py-2">
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-full">
                  Get Connected
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
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
                  className="border-white text-white hover:bg-white hover:text-orange-600 rounded-full px-8 py-3 font-semibold"
                  onClick={() => scrollToSection('contact')}
                >
                  Contact Us
                </Button>
              </div>
            </div>
            <div className="hidden lg:block animate-slide-up">
              <div className="relative">
                <div className="w-96 h-96 mx-auto">
                  {/* 3D Tower Illustration Placeholder */}
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

      {/* Packages Section */}
      <section id="packages" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Choose Your Perfect Plan</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer a variety of internet packages designed to meet your specific needs, 
              whether you're at home, running a business, or on the move.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Hotspot Wi-Fi */}
            <Card className="hover-scale cursor-pointer relative">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 mx-auto bg-orange-100 rounded-full flex items-center justify-center mb-4">
                  <MapPin className="w-8 h-8 text-orange-600" />
                </div>
                <CardTitle className="text-2xl">Hotspot Wi-Fi</CardTitle>
                <p className="text-gray-600">Stay connected on the go</p>
              </CardHeader>
              <CardContent className="text-center">
                <div className="mb-6">
                  <span className="text-4xl font-bold text-gray-900">KES 750</span>
                  <span className="text-gray-600">/month</span>
                </div>
                <ul className="space-y-3 mb-8 text-left">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span>Access to 15+ hotspot locations</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span>Up to 5 Mbps download speed</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span>Connect up to 3 devices</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span>24/7 customer support</span>
                  </li>
                </ul>
                <Link to="/hotspot-packages">
                  <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white rounded-full">
                    View Plans
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Home Wi-Fi */}
            <Card className="hover-scale cursor-pointer relative border-2 border-orange-500">
              <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-orange-500 text-white px-4 py-1 rounded-full">
                POPULAR
              </Badge>
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 mx-auto bg-orange-100 rounded-full flex items-center justify-center mb-4">
                  <Home className="w-8 h-8 text-orange-600" />
                </div>
                <CardTitle className="text-2xl">Home Wi-Fi</CardTitle>
                <p className="text-gray-600">Perfect for families</p>
              </CardHeader>
              <CardContent className="text-center">
                <div className="mb-6">
                  <span className="text-4xl font-bold text-gray-900">Ksh 1,000</span>
                  <span className="text-gray-600">/month</span>
                </div>
                <div className="text-sm text-orange-600 font-semibold mb-4">
                  KES 3,000 Installation Fee
                </div>
                <ul className="space-y-3 mb-8 text-left">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span>From 5-40 Mbps download speed</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span>Unlimited data usage</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span>Connect unlimited devices</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span>Free router & installation</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span>Priority customer support</span>
                  </li>
                </ul>
                <Link to="/home-packages">
                  <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white rounded-full">
                    View Plans
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Business Wi-Fi */}
            <Card className="hover-scale cursor-pointer relative">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 mx-auto bg-orange-100 rounded-full flex items-center justify-center mb-4">
                  <Building className="w-8 h-8 text-orange-600" />
                </div>
                <CardTitle className="text-2xl">Business Wi-Fi</CardTitle>
                <p className="text-gray-600">Enterprise - grade solution</p>
              </CardHeader>
              <CardContent className="text-center">
                <div className="mb-6">
                  <span className="text-4xl font-bold text-gray-900">Ksh 9,999</span>
                  <span className="text-gray-600">/month</span>
                </div>
                <ul className="space-y-3 mb-8 text-left">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span>50 Mbps+ download speed</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span>Unlimited data usage</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span>Programmable Router</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span>Enhanced security features</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span>24/7 dedicated support</span>
                  </li>
                </ul>
                <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white rounded-full">
                  Get Started
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="kentcorp-gradient py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Why Choose Kentcorp</h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              We provide more than just internet connectivity. Experience the Kentcorp difference 
              with our premium features and services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-white/10 backdrop-blur border-white/20 hover-scale">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 mx-auto bg-white/20 rounded-full flex items-center justify-center mb-6">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Lightning Fast Speeds</h3>
                <p className="text-white/80">
                  Experience blazing-fast internet speeds with our state-of-the-art fiber optic 
                  network infrastructure.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur border-white/20 hover-scale">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 mx-auto bg-white/20 rounded-full flex items-center justify-center mb-6">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Advanced Security</h3>
                <p className="text-white/80">
                  Stay protected with our built-in security features that safeguard your network 
                  from threats and unauthorized access.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur border-white/20 hover-scale">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 mx-auto bg-white/20 rounded-full flex items-center justify-center mb-6">
                  <Headphones className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">24/7 Support</h3>
                <p className="text-white/80">
                  Our dedicated support team is available around the clock to assist you 
                  with any questions or technical issues.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur border-white/20 hover-scale">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 mx-auto bg-white/20 rounded-full flex items-center justify-center mb-6">
                  <Wifi className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Extensive Coverage</h3>
                <p className="text-white/80">
                  With over 15 hotspot locations and expanding network coverage, stay 
                  connected wherever you go in Kutus and beyond.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur border-white/20 hover-scale">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 mx-auto bg-white/20 rounded-full flex items-center justify-center mb-6">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Reliable Uptime</h3>
                <p className="text-white/80">
                  Enjoy a 99.9% uptime guarantee with our redundant network infrastructure 
                  designed for maximum reliability.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur border-white/20 hover-scale">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 mx-auto bg-white/20 rounded-full flex items-center justify-center mb-6">
                  <span className="text-white font-bold text-lg">KSh</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Transparent Pricing</h3>
                <p className="text-white/80">
                  No hidden fees or surprise charges. What you see is what you pay, with 
                  flexible plans to suit your budget.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Meet the Team</h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Our dedicated team of professionals committed to delivering exceptional internet services to the Kutus community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
              <div className="w-48 h-48 rounded-full bg-gradient-to-br from-orange-400 to-yellow-400 flex-shrink-0 border-4 border-orange-500 flex items-center justify-center">
                <Users className="w-24 h-24 text-white" />
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-2xl font-bold text-white mb-2">KENNEDY WAHOGO</h3>
                <p className="text-orange-400 font-semibold mb-4">C.E.O KENTCORP</p>
                <p className="text-white/80 mb-6">
                  Visionary leader with over 10 years of experience in telecommunications. Kennedy founded KentCorp 
                  with the mission to bridge the digital divide in rural Kenya, bringing affordable and reliable 
                  internet connectivity to underserved communities in Kirinyaga County.
                </p>
                <Button className="bg-orange-600 hover:bg-orange-700 text-white rounded-full">
                  Learn More
                </Button>
              </div>
            </div>

            <div className="flex flex-col md:flex-row-reverse items-center md:items-start gap-8">
              <div className="w-48 h-48 rounded-full bg-gradient-to-br from-blue-400 to-indigo-500 flex-shrink-0 border-4 border-blue-500 flex items-center justify-center">
                <Users className="w-24 h-24 text-white" />
              </div>
              <div className="text-center md:text-right">
                <h3 className="text-2xl font-bold text-white mb-2">DAVID NDIGA</h3>
                <p className="text-blue-400 font-semibold mb-4">I.C.T MANAGER KENTCORP</p>
                <p className="text-white/80 mb-6">
                  Expert network engineer and IT specialist responsible for maintaining our robust infrastructure. 
                  David ensures 99.9% uptime across all our services and leads our technical team in delivering 
                  cutting-edge internet solutions to our customers.
                </p>
                <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Testimonials</h2>
            <p className="text-xl text-white/80">Hear it from our existing customers.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <Card key={i} className="bg-slate-800 border-slate-700">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-white/90 mb-4">
                    "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a 
                    piece of classical Latin literature from 45 BC, making it over 2000 years old."
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mr-4">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">Happy Customer</h4>
                      <p className="text-white/60 text-sm">Verified User</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
            <p className="text-xl text-gray-600">Ready to get connected? Contact us today!</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <Card className="h-full">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold mb-6">Send us a message</h3>
                  <form className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                      <input 
                        type="text" 
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                      <input 
                        type="email" 
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                        placeholder="your@email.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                      <input 
                        type="tel" 
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                        placeholder="+254 7XX XXX XXX"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                      <textarea 
                        rows={4}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                        placeholder="Tell us about your internet needs..."
                      ></textarea>
                    </div>
                    <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white py-3 rounded-lg">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-8">
              <Card>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <MapPin className="w-6 h-6 text-orange-600 mr-4" />
                      <div>
                        <p className="font-medium">Office Location</p>
                        <p className="text-gray-600">Metro Place, Kutus, Kirinyaga County, Kenya</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Phone className="w-6 h-6 text-orange-600 mr-4" />
                      <div>
                        <p className="font-medium">Phone</p>
                        <p className="text-gray-600">0751507479</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Mail className="w-6 h-6 text-orange-600 mr-4" />
                      <div>
                        <p className="font-medium">Email</p>
                        <p className="text-gray-600">info@kentcorpfibrenet.ac.ke</p>
                      </div>
                    </div>
                  </div>

                  {/* Social Media Links */}
                  <div className="mt-8">
                    <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
                    <div className="flex space-x-4">
                      <a href="#" className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center hover:bg-orange-200 transition-colors">
                        <Facebook className="w-5 h-5 text-orange-600" />
                      </a>
                      <a href="#" className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center hover:bg-orange-200 transition-colors">
                        <Instagram className="w-5 h-5 text-orange-600" />
                      </a>
                      <a href="#" className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center hover:bg-orange-200 transition-colors">
                        <Youtube className="w-5 h-5 text-orange-600" />
                      </a>
                      <a href="#" className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center hover:bg-orange-200 transition-colors">
                        <div className="text-orange-600 font-bold text-xs">TT</div>
                      </a>
                      <a href="#" className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center hover:bg-orange-200 transition-colors">
                        <div className="text-orange-600 font-bold text-xs">YS</div>
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold mb-4">Our Location</h3>
                  <div className="bg-gray-200 h-64 rounded-lg overflow-hidden">
                    <iframe 
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15959.234567890!2d37.4579!3d-0.5234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1234567890ab%3A0x1234567890abcdef!2sMetro%20Place%2C%20Kutus%2C%20Kenya!5e0!3m2!1sen!2ske!4v1234567890"
                      width="100%" 
                      height="100%" 
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="KentCorp Office Location"
                    ></iframe>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
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
    </div>
  );
};

export default Index;
